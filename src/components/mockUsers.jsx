import React, {useState, useEffect} from 'react';
import { paginate, makeArrayFromANumber, sorting} from "./utils/utils";
import Dashboard from '../screens/Dashboard';
var allUsers = [];

function Users() {
    let [users, setUsers] = useState([]);
    const [pageSize, setPageSize] = useState(10);
	const [currentPage, setCurrentPage] = useState(0);
    const [sortColumn, setSortColumn] = useState("id");
	const [sortOrder, setSortOrder] = useState("asc");

    //pagination
	let data = paginate(users, currentPage, pageSize);

    //sorting
    data = data.length && sorting(data, sortColumn, sortOrder);
    let totalLink = Math.ceil(users.length / pageSize);
	let linksArray = makeArrayFromANumber(totalLink);
    console.log(linksArray);

    useEffect(() => {
        async function getUsers() {
            let result = await fetch(
                "https://610161fb4e50960017c29dd3.mockapi.io/users",
            );
            let data = await result.json();
            allUsers = data;
            setUsers(data);
        }
        getUsers();
    }, []);
    console.log(allUsers);
         
    const handlePageChange = (linkNo) => {
		if (linkNo === "previous") setCurrentPage(currentPage - 1);
		else if (linkNo === "next") setCurrentPage(currentPage + 1);
		else setCurrentPage(linkNo);
	};

    const handleSort = (key) => {
		setSortColumn(key);
		setSortOrder(sortOrder === "asc" ? "desc" : "asc");
	};

    const handleSearch = (e) => {
		let searchKeywords = e.target.value.toLowerCase();

		let filtered = allUsers.filter((user) => {
			let a = user.name.toLowerCase();
			return a.search(searchKeywords) !== -1;
		});
		setUsers(filtered);
	};

    const handleFiltering = (e) => {
		let filtered = allUsers.filter(
			(user) => user.isVerified === e.target.checked,
		);
		setUsers(filtered);
	};
    
    return (
        <div>
        <div className="mb-3 mt-5 search-bar-wrapper">
				<input
					onKeyUp={handleSearch}
					type="email"
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="Search the users...."
				/>
				
                	<label for="customRange2" class="form-label">
					Example range
				</label>
				<input
					type="range"
					class="form-range"
					min="0"
					max="5"
					id="customRange2"></input>
			</div>
            <div className= "table-wrapper p-3">
            <table className="table m-table">
            <thead>
                <th onClick={() => handleSort("id")}>Id</th>
                <th onClick={() => handleSort("name")}>Name</th>
                <th>Profile Picture</th>
                <th onClick={() => handleSort("salary")}>Salary</th>
                <th onClick={() => handleSort("email")}>Email</th>
                <th>
								{" "}
								Verification Status{" "}
								<input
									onClick={handleFiltering}
									className="ml-4"
									type="checkbox"
								/>
							</th>
            </thead>
            <tbody>
                {data.length && data.map((user) => (
                    <tr key = {user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td><img className = "profilepic"src = {user.pp} alt =""></img></td>
                        <td>{user.salary}</td>
                        <td>{user.email}</td>
                        <td>{user.isVerified ? "Verified" : "NOT Verified"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            </div>


        <div className="pagination-block">
				<nav aria-label="Page navigation example">
					<ul className="pagination">
                    <li onClick={() => handlePageChange("previous")} class="page-item ">
							<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
								Previous
							</a>
						</li>
                            {linksArray.map((link) => (
							<li
								onClick={() => handlePageChange(link)}
								className= {`page-item ${currentPage === link && "active"} `}>
								<a className="page-link" href="#">
									{link + 1}
								</a>
							</li>
						))}
                        <li onClick={() => handlePageChange("next")} class="page-item ">
							<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
								Next
							</a>
                            </li>
                            </ul>
                            
        </nav>
        </div>
        </div>
    );
}

export default Users;


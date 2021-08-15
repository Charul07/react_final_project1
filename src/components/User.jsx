import React, {useEffect, useState} from 'react'

function User(props) {
    const [person, setPerson] = useState({});
    useEffect(() => {
        fetch( `https://610161fb4e50960017c29dd3.mockapi.io/users/${props.match.params.id}`)
        .then(result=> result.json())
        .then((data) => setPerson(data))
    }, []);
    return (
        <div>
            <h1>Profile</h1>
            <div class="card m-card m-auto">
  <img src={person.pp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{person.name}</h5>
    <h4>{person.email}</h4>
    <h4>{person.salary}</h4>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
    );
}

export default User;

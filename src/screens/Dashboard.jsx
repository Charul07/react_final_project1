import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Users from "../components/Users"; 
import "./dashboard.css";
import Products from "../components/Products";
import Transactions from "../components/Transactions";
import Categories from "../components/Categories";
import Orders from "../components/Orders";
import UserForm from "../components/UserForm";
import DashboardPanel from "../components/DashboardPanel";
import ProductForm from "../components/ProductForm";
import CategoryForm from '../components/CategoryForm';
import Setting from '../components/Setting';


function Dashboard(props) {
	return (
		<div class="m-dashboard">
			<div className="d-top-nav">
				<Header />
			</div>
			<div className="content-wrap">
				<div className="d-sidebar">
					<Sidebar />
				</div>
				<div className="d-main">
					<Switch>
						<Route
							path={`${props.match.path}/users/new`}
							component={UserForm}
						/>
						<Route
							path={`${props.match.path}/users/update/:id`}
							component={UserForm}
						/>
						<Route path={`${props.match.path}/users`} component={Users} />
						<Route
							path={`${props.match.path}/products/new`}
							component={ProductForm}
						/>
						<Route
							path={`${props.match.path}/products/update/:id`}
							component={ProductForm}
						/>
						<Route path={`${props.match.path}/products`} component={Products} />
						<Route
							path={`${props.match.path}/transactions`}
							component={Transactions}
						/>
							<Route
							path={`${props.match.path}/categories/new`}
							component={CategoryForm}
						/>
						<Route
							path={`${props.match.path}/categories/update/:id`}
							component={CategoryForm}
						/>
						<Route
							path={`${props.match.path}/categories`}
							component={Categories}
						/>
						<Route path={`${props.match.path}/orders`} component={Orders} />
						<Route path={`${props.match.path}/`} component={DashboardPanel} />
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;


// import React from 'react'
// import { Route, Switch } from 'react-router-dom'
// import Header from '../components/Header'
// import Sidebar from '../components/Sidebar'
// import "./dashboard.css"
// import Users from "../components/Users";
// import Products from '../components/Products';
// import Transactions from '../components/Transactions';
// import Categories from '../components/Categories';
// import Orders from '../components/Orders';
// import LoginPanel from './LoginPanel';
// // import UserForm from "../components/UserForm";
// import DashboardPanel from '../components/DashboardPanel';
// function Dashboard(props) {
// 	return (
// 		<div class = "m-dashboard">
// 			<div className="d-top-nav">
//  				<Header />
//  			</div>
//  			<div className="content-wrap">
//  				<div className="d-sidebar">
//  					<Sidebar />
//  				</div>
// 				<div className="d-main">
// 				<Switch>
// 				<Route path={`${props.match.path}/`} component={DashboardPanel}/>
// 				{/* <Route path={`${props.match.path}/users/new`} component={UserForm} /> */}
//                 <Route path={`${props.match.path}/users`} component={Users} />
// 				<Route path={`${props.match.path}/loginpanel`} component={LoginPanel} />
// 				<Route path={`${props.match.path}/products`} component={Products} />
// 				<Route path={`${props.match.path}/transactions`} component={Transactions} />
// 				<Route path={`${props.match.path}/categories`} component={Categories} />
// 				<Route path={`${props.match.path}/orders`} component={Orders} />
// 				</Switch>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }


// export default Dashboard;


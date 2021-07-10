import React from 'react'
import '../App.css'
import {
  Link
} from "react-router-dom";


import { FaTwitter } from "react-icons/fa";

export const FrontPage = () => {
	return (
		<div className="main">
			<div className="l-site">
			<FaTwitter className="flex-icon"/>
			</div>
			<div className="r-site">
			<FaTwitter className="logo"/>
				<h1 className="main-h1">Lo que está</h1>
				<h1 className="main-h1">pasando ahora.</h1>
				<h2 className="main-h2">Únete a Twitter hoy mismo.</h2>
				<div className="btn-group">
				<Link to="/signup" className="btn btn-register">Registrate</Link>
				<Link to="/login" className="btn btn-signin">Iniciar sesion</Link>
				</div>
			</div>
		</div>
	)
}

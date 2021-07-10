import React from 'react'
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { TOKEN } from "../constants";
import '../App.css'

import { FaTwitter } from "react-icons/fa";

export const Login = () => {
	const { register, handleSubmit } = useForm();
	let history = useHistory();

	const enviarData = async (data) => {
		try{
			let response = await fetch("https://clone-tw-bl3r3.herokuapp.com/login", { 
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if(response.ok){
				let result = await response.json();
				//Save token
				localStorage.setItem(TOKEN, result.token);
				history.push("/feed")
			}

		}catch(error){
			console.log(error);
		}

	}

  const onSubmit = async data => {
		await enviarData(data);
	}
		

	return (
		<div className="login">
			<div className="form-login">
				<FaTwitter className="logo-login"/>
				<h1 className="h1-login">Iniciar sesión en Twitter</h1>
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<input type="email" className="form-login_input" placeholder="Correo Electronico " {...register("email")}/>
					<input type="password" className="form-login_input" placeholder="Contraseña" {...register("password")} /> 
					<button className="btn btn-register" type="submit">Iniciar sesión</button> 
				</form>
				<Link to="/signup" className="link">
				registrate en twitter
        </Link>
			</div>
		</div>
	)
}

import React from 'react'
import '../App.css'
import {
  Link
} from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";

export const SignUp = () => {
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const enviarData = async (data) => {
		try{
			let response = await fetch("https://clone-tw-bl3r3.herokuapp.com/user-create", { 
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if(response.ok){
				history.push("/login")
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
				<h1 className="h1-login">Registrate en Twitter</h1>
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<input type="text" className="form-login_input" placeholder="Nombre " {...register("name")}/>
					<input type="text" className="form-login_input" placeholder="Apellido" {...register("last_name")}/> 
					<input type="text" className="form-login_input" placeholder="Username" {...register("username")}/> 
					<input type="email" className="form-login_input" placeholder="Correo Electronico " {...register("email")}/>
					<input type="password" className="form-login_input" placeholder="Contraseña" {...register("password")} /> 
					<button className="btn btn-register" type="submit">Registrate</button> 
				</form>
				<Link to="/login" className="link">
				Inicia sesión en twitter
        </Link>
			</div>
		</div>
	)
}

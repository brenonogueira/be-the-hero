import React, { useState } from "react";
import "./style.css";
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Logon() {
  const [id, setId] = useState("");

	let navigate = useNavigate()

	async function handleLogin(e) {
		e.preventDefault()

		try {
			const response = await api.post('sessions', { id })
			console.log(response.data.name)
			localStorage.setItem('ongId', id)
			localStorage.setItem('ongName', response.data.name)
			navigate('/profile')
		} catch (err) {
			alert('falha no login, tente novamente')
		}
	}

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button type="submit" className="button">Entrar</button>

          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

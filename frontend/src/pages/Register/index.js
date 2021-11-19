import React from 'react'
import './style.css'
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Register() {
	return (
		<div className='register-container'>
			<div className='content'>
				<section>
					<img src={logoImg} alt="Be The Hero" />

					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>

					<Link to="/" className='back-link'>
						<FiArrowLeft size={16} color='#E02041' />
						Não tenho cadastro
					</Link>
				</section>

				<form>
					<input placeholder='Nome da ONG' />
					<input type="email" placeholder='E-mail' />
					<input placeholder='WhatsApp' />

					<div className='input-group'>
						<input placeholder='Cidade' />
						<input placeholder='UF' style={{ width: 80 }} />
					</div>
					<button type='submit' className='button'>Cadastrar</button>
				</form>
			</div>
		</div>
	)
}

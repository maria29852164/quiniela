'use client'
import { useState, useEffect } from "react"
import { client } from "../supabase/client"
import { Logo } from "../components/Logo"
import { useTasks } from "../context/TaskContext";

 function Login() {

	const [email, setEmail] = useState('')
  const [ password , setPassword] = useState('')
	const { loading, loginWithPassword} = useTasks()


	const handleSubmit = async (event) => {
	  event.preventDefault();
    try {
      const { user, error } = await client.auth.signUp({
        email,
        password,
      });

      if (error) {
        alert(error.message);
      } else {
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a otra página
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
    }
  };
	
  
	return(
<>
  <main className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-b from-sky to-blue overflow-hidden">
    <div className="w-full md:w-1/2 bg-white p-8 rounded shadow">
      <div className="flex items-center justify-center">
        <Logo />   
      </div>
      <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray text-sm font-bold mb-2">
              Inicia Sesion
            </label>		
            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                  required
                  type="email" 
                  name="email"
                  value={email} 
                  placeholder="Email" 
                  onChange={(e) => setEmail(e.target.value)}/>
                <input  className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                  required
                  type="password" 
                  name="password"
                  value={password} 
                  placeholder="Contraseña" 
                  onChange={(e) => setPassword(e.target.value)}
                  aria-required/>
          </div>
            <div className="flex items-center justify-center">
          <button
            disabled={loading} 
            className="bg-blue hover:bg-blue/70 hover:text-turquesa text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors">
            {loading ? "Cargando..." : "Inicia Sesion"}</button></div>
      </form>
    </div>
  </main>
</>
	)
}

export default Login
import React from 'react'
import '../../styles/login.styles.css'


export default function Login() {
  return (
    <>
      <div class="wrapper fadeInDown">
        <div id="formContent">

          <h2 class="active"> Inicio de sesion </h2>

          <form>
            <input type="text" id="login" class="fadeIn second" name="login" placeholder="Nombre de usuario" />
            <input type="text" id="password" class="fadeIn third" name="login" placeholder="Constraseña" />
            <input type="submit" class="fadeIn fourth" value="Iniciar Sesion" />
          </form>


          <div id="formFooter">
            <a class="underlineHover" href="#">¿Olvidó su contraseña?</a>
          </div>

        </div>
      </div>
    </>


  )
}

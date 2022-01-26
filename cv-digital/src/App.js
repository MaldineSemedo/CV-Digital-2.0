import logo from './logo.svg';
import './App.css';

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
container.classList.remove("right-panel-active");
});

function App() {
  return  (
     
      <div>

<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
              
            </div >

	<div class="container" id="container">
	<div class="form-container sign-up-container">
		<form action="#">
			<h1>Criar uma conta</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>ou use seu e-mail para cadastro</span>
			<input type="text" placeholder="Nome" />
			<input type="email" placeholder="E-mail" />
			<input type="password" placeholder="Senha" />
			<button>INCREVER - SE</button>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Entrar</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>ou use sua conta</span>
			<input type="email" placeholder="E-mail" />
			<input type="password" placeholder="Senha" />
			<a href="#">Esqueceu sua senha?</a>
			<button>ENTRAR</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Bem vindo de volta!</h1>
				<p>Para se manter conectado conosco, faça login com suas informações pessoais</p>
				<button class="ghost" id="signIn">ENTRAR</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Olá amigo Afi!</h1>
				<p>Insira seus dados pessoais e comece a jornada conosco</p>
				<button class="ghost" id="signUp">INSCREVER - SE</button>
			</div>
		</div>
	</div>
</div>
      </div>
  );
}

export default App;

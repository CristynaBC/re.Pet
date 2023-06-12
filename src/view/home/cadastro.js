import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";



export const cadastro = () => {
  const container = document.createElement("div");
  const auth = getAuth()

  const templateCadastro = `
    
    <section class="registerpage-form">
      <img src="./img/logo.png" class="logo-repet" alt="Logo da rede social re.Pet">
  
      <form class="register-form">
  
      <label for="nome"></label>
      <input type="text" class="form-inputs-register" id="nome-cadastro" required placeholder="Nome completo">
      </input>
  
      <label for="email-cadastro"></label>
      <input type="email" class="form-inputs-register"  id="email-cadastro" required placeholder="Exemplo@email.com">
      </input>
      
      <label for="senha-cadastro"></label>
      <input type="password" class="form-inputs-register" id="senha-cadastro" required placeholder="Senha">
      </input>
  
      <label for="confirmar-senha"></label>
      <input type="password" class="form-inputs-register" id="confirmar-senha" required placeholder="Confirmar senha">
      </input>
  
      <button type="submit" id="sign-up" >Cadastrar</button>
  
      </form>
       
    </div>

    </section>
  </section>
      <h3> Já possui cadastro? <a class="entrar" href="/#login">Fazer login</a></h3>
      
      `;

  //Registrar o usuario com nome,email,senha.
  container.innerHTML = templateCadastro;

  const register = container.querySelector("#sign-up");
  register.addEventListener("click", (event) => {
    event.preventDefault()
    
    const email = container.querySelector("#email-cadastro");
    const password = container.querySelector("#senha-cadastro");
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Usuário cadastrado com sucesso, por favor realize o login.")
    window.location.hash = "#login"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
    
  });

  return container;
};

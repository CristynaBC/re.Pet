export const feed = () => {
  const container = document.createElement('div');

  const templateFeed = `
    <section class="feed-page">
      <p> Seja bem-vindo, usuário </p>
      <a class="feedPage" href="/#feed"></a>

      <button id="post">Crie seu post aqui!</button>

      <div id="meuModal" class="modal">
        <div class="modal-content">
          <span class="fechar">&times;</span>
       
          <form id="form-post">
            <br>
            <input type="radio" id="quero-adotar" name="quero" value="quero-adotar">
            <label for="quero-adotar">Quero adotar</label>

            <input type="radio" id="quero-doar" name="quero" value="quero-doar">
            <label for="quero-doar">Quero doar</label>
            <br>
            <label for="idade">Idade pet:</label>
            <input type="number" id="idade" name="idade">
            <label for="especie">Espécie:</label>
            <select name="select" id="especie">
            <option value="cachorro">Cachorro</option>
            <option value="gato" selected>Gato</option>
            <option value="outros" selected>Outros</option>
            </select>
 
            <label for="sexo">Sexo:</label>
            <select name="select" id="sexo">
            <option value="sexo1">Fêmea</option>
            <option value="sexo2" selected>Macho</option>
            </select>
            <br> 

            <input type="text" id="raca" name="raca" placeholder="Raça">

            <input type="text" id="local" name="local" placeholder="Localização">

            <input type="text" id="contato" name="contato" placeholder="(xx) xxxxx-xxxx">
            <br>
            <textarea id="mensagem" name="mensagem" rows="4" cols="20" placeholder=" Escreva sua mensagem aqui."></textarea>
            <br>


            <button type="submit" class="publicar" id="publicar">Publicar</button>
            </form>

        </div>
      </div>
    </section>
  `;

  container.innerHTML = templateFeed;

  container.querySelector('#post').addEventListener('click', () => {
    const modal = document.getElementById("meuModal");
    const fechar = modal.querySelector(".fechar");

    // Ao clicar no botão, exibe o modal
    modal.style.display = "block";

    // Ao clicar no botão de fechar, fecha o modal
    fechar.onclick = function() {
      modal.style.display = "none";
    }

  });
  

container.querySelector('#publicar').addEventListener('click', (event) => {
  event.preventDefault(); 
  

  const idadePet = document.getElementById('idade').value;
  const especie = document.getElementById('especie').value;
  const sexo = document.getElementById('sexo').value;
  const raca = document.getElementById('raca').value;
  const localizacao = document.getElementById('local').value;
  const contato = document.getElementById('contato').value;
  const mensagem = document.getElementById('mensagem').value;


  const post = document.createElement('div');
  post.innerHTML = `
    <p>Idade do pet: ${idadePet}</p>
    <p>Espécie: ${especie}</p>
    <p>Sexo: ${sexo}</p>
    <p>Raça: ${raca}</p>
    <p>Localização: ${localizacao}</p>
    <p>Contato: ${contato}</p>
    <p>Mensagem: ${mensagem}</p>
  `;

  
  const feedPage = document.querySelector('.feed-page');
  feedPage.appendChild(post);

  
  const modal = document.getElementById('meuModal');
  modal.style.display = 'none';
});
  

  return container;
};

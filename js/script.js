const url = "https://restcountries.com/v2/all"


const listaPaises = $('#listaPaises')
// const listaPaises = document.querySelector('#listaPaises')
const cardsPorPagina = 12
let paginaAtual = 1

fetch(url)
  .then(response => response.json())
  .then(data => {

    //Math.cell() arredonda o resultado da divisão para cima
    let totalPaginas = Math.ceil(data.length / cardsPorPagina)

    function mostrarPagina(pagina) {
      let inicio = (pagina - 1) * cardsPorPagina
      let fim = inicio + cardsPorPagina
      listaPaises.empty()
      for (let i = inicio; i < fim && i < data.length; i++) {
        const pais = data[i];
        const div = `
                      <div class="card" style="width: 18rem; height: 25rem;">
                        <img src="${pais.flag}" class="card-img-top h-50" alt="bandeira_${pais.name}">
                        <div class="card-body">
                          <h5 class="card-title pais">${pais.name}</h5>
                          <p class="card-text capital">${pais.capital}</p>
                          <p class="card-text regiao">${pais.region}</p>
                          <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop${[i]}">Ver Mais</button>
                        </div>
                      </div>
                      <br />
                      <div class="modal fade" id="staticBackdrop${[i]}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="staticBackdropLabel">${pais.name}</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              <h4>Nome: ${pais.name}</h4>
                              <img src="${pais.flag}" width="150">
                              <p>Nome Nativo: ${pais.nativeName}</p>
                              <p>Capital: ${pais.capital}</p>
                              <p>AlfaCode: ${pais.alpha2Code}</p>
                              <p>Código telefonico: ${pais.callingCodes}</p>
                              <p>Região: ${pais.region}</p>
                              <p>SubRegião: ${pais.subregion}</p>
                              <p>População: ${pais.population}</p>
                              <p>Denominação: ${pais.demonym}</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Fechar</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    `;
        listaPaises.append(div);
      }
    }
    //a função atualizarPagina é responsavel por exibir os paises na página e atualizar a paginação
    function atualizarPagina() {
      $('#contador-pagina').text(`Página ${paginaAtual} de ${totalPaginas}`)
      $('#anterior').prop('disabled', paginaAtual === 1)
      $('#proximo').prop('disabled', paginaAtual === totalPaginas)
      mostrarPagina(paginaAtual)
    }

    atualizarPagina()
    //eventos para os botões anterior e proximo
    $('#anterior').click(() => {
      if (paginaAtual > 1) {
        paginaAtual--
        atualizarPagina()
      }
    })
    //--------------------------
    $('#proximo').click(() => {
      if (paginaAtual < totalPaginas) {
        paginaAtual++
        atualizarPagina()
      }
    })
    //--------------------------
  })
  .catch(error => console.error(error));
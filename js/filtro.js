const campoFiltro = document.querySelector('#filtrar-paises')
const btnFiltro = document.querySelector('#filtrar-capital')
const btnRegiao = document.querySelector('#filtrar-regiao')


campoFiltro.addEventListener('input', function () {
    let cards = document.querySelectorAll('.card')

    if(this.value.length > 0){
        for(let i = 0; i < cards.length; i++){
            let card = cards[i]
            let  nome = card.querySelector('.pais').textContent

            //cria uma expressao regular a partir do valor digitado no campo do filtro
            let expressao = new RegExp(this.value, 'i')

            if(!expressao.test(nome)){
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }
        }
    } else {
        for(let i = 0; i < cards.leght; i++){
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }
})

btnFiltro.addEventListener('click', function () {
    let cards = document.querySelectorAll('.card')
    
    

    let capital = document.querySelector('.filtrar-capital').value

    if(capital.length > 0){
        for(let i = 0; i < cards.length; i++){
            let card = cards[i]
            let nome = card.querySelector('.capital').textContent

            if(capital != nome){
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }  

        }
    } else {
        for(let i = 0; i < cards.leght; i++){
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }
})



btnRegiao.addEventListener('click', function(){
    let regiao = document.querySelector('.filtrar-regiao').value
    let cards = document.querySelectorAll('.card')
    if(regiao.length > 0 ){
        for(let i = 0; i < cards.length; i++){
            let card = cards[i]
            let nome = card.querySelector('.regiao').textContent.toLowerCase()
            console.log(nome)
            //-----------------------------------------------
            if(regiao != nome){
                card.classList.add('invisivel')
            } else {
                card.classList.remove('invisivel')
            }    
        } 
    } else {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            card.classList.remove('invisivel')
        }
    }    
})
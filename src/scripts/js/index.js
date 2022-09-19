const listaDeItens = document.querySelector('.list_cards')
const listaDeItensCarrinho = document.querySelector('#UlCarrinho')
const divCarrinho = document.querySelector('#div_carrinho')
const botaoTodos = document.querySelector('#button_menu_1')
const botaoAcessorios = document.querySelector('#button_menu_2')
const botaoCalcados = document.querySelector('#button_menu_3')
const botaoCamisetas = document.querySelector('#button_menu_4')
const inputPesquisa = document.querySelector('#input_research')
const botaoPesquisa = document.querySelector('#button_research')


const arrCarrinho = []
let divCarrinho_1_span = document.createElement('span')
let divCarrinho_2_span = document.createElement('span')
divCarrinho_1_span.innerHTML = 0
divCarrinho_2_span.innerHTML = 0


function renderizarCarrinho(lista){
    if(lista.length == 0){
        divCarrinho.innerHTML = ''
        let carrinhoLI = document.createElement('li')
        let carrinhoLITitle = document.createElement('h3')
        let carrinhoLIp = document.createElement('p')

        carrinhoLITitle.innerHTML = "Carrinho vazio"
        carrinhoLIp.innerHTML = "Adicione Itens!"

        carrinhoLI.classList.add('carrinho_empty')
        carrinhoLITitle.classList.add('carrinho_empty_title')
        carrinhoLIp.classList.add('carrinho_empty_paragraph')
        
        carrinhoLI.append(carrinhoLITitle, carrinhoLIp)
        listaDeItensCarrinho.appendChild(carrinhoLI)
    }else{
        divCarrinho.innerHTML = ''
        let divCarrinho_1 = document.createElement('div')
        let divCarrinho_1_p = document.createElement('p')
       
        let divCarrinho_2 = document.createElement('div')
        let divCarrinho_2_p = document.createElement('p')
        
        
        divCarrinho_1_p.innerHTML = 'Quantidade:'
        divCarrinho_2_p.innerHTML = 'Total:'
    
        divCarrinho_1.classList.add('section_aside_div_carrinhoCompras_div_quantidade')
        divCarrinho_1_p.classList.add('section_aside_div_carrinhoCompras_div_quantidade_paragraph')
        divCarrinho_1_span.classList.add('section_aside_div_carrinhoCompras_div_quantidade_number')
        divCarrinho_2.classList.add('section_aside_div_carrinhoCompras_div_total')
        divCarrinho_2_p.classList.add('section_aside_div_carrinhoCompras_div_total_paragraph')
        divCarrinho_2_span.classList.add('section_aside_div_carrinhoCompras_div_total_number')

        
        divCarrinho_1.append(divCarrinho_1_p, divCarrinho_1_span)
        divCarrinho_2.append(divCarrinho_2_p, divCarrinho_2_span)
        divCarrinho.append(divCarrinho_1, divCarrinho_2)

        renderizarProdutoCarrinho(arrCarrinho)  
    }   
}

renderizarCarrinho(arrCarrinho)

function renderizarProdutoListaPrincipal(lista, referenciaHtml){
    for(let i = 0; i < lista.length; i++){
        let listItem = document.createElement('li')
        let listImg = document.createElement('img')
        let listDiv = document.createElement('div')
        let listTag = document.createElement('span')
        let listName = document.createElement('h3') 
        let listDescription = document.createElement('p')
        let listPrice = document.createElement('span')
        let listButton = document.createElement('button')

        listImg.src = `${lista[i].img}`
        listTag.innerHTML = `${lista[i].tag[0]}`
        listName.innerHTML = `${lista[i].nameItem}`
        listDescription.innerHTML = `${lista[i].description}`
        listPrice.innerHTML = `R$${lista[i].value},00`
        listButton.innerHTML = `${lista[i].addCart}`

        listButton.setAttribute('id', `botao_${lista[i].id}`)

        listItem.classList.add('list_items')
        listDiv.classList.add('list_items_div')
        listImg.classList.add('list_items_img')
        listTag.classList.add('list_items_tag')
        listName.classList.add('list_items_h3')
        listPrice.classList.add('list_items_price')
        listDescription.classList.add('list_items_description')
        listButton.classList.add('list_items_button')

        listDiv.append(listTag, listName, listDescription, listPrice, listButton)
        listItem.append(listImg, listDiv)
        referenciaHtml.appendChild(listItem)

        listButton.addEventListener('click', function AdicionarCarrinho(){
            listaDeItensCarrinho.innerHTML = ''
            divCarrinho_1_span.innerHTML ++  
            
            if(divCarrinho_2_span.innerHTML == 0){
                divCarrinho_2_span.innerHTML = `R$ ${+divCarrinho_2_span.innerHTML + lista[i].value},00`
            }
            else{
                divCarrinho_2_span.innerHTML = `R$ ${+divCarrinho_2_span.innerHTML.replace('R$ ', '').replace(',00', '') + lista[i].value},00`
                }
           
                
            let id = parseInt(listButton.id.substring(6))   

            if(lista[i].id === id){
                arrCarrinho.push(lista[i])  
            }               
            renderizarCarrinho(arrCarrinho)                  
        })
    }
}

renderizarProdutoListaPrincipal(data, listaDeItens)

function renderizarProdutoCarrinho(lista){

        for(let i = 0; i < lista.length; i++){
            let listItem = document.createElement('li')
            let listImg = document.createElement('img')
            let listDiv = document.createElement('div')
            let listName = document.createElement('h3') 
            let listPrice = document.createElement('span')
            let listButton = document.createElement('button')

            listImg.src = `${lista[i].img}`
            listName.innerHTML = `${lista[i].nameItem}`
            listPrice.innerHTML = `R$ ${lista[i].value},00`
            listButton.innerHTML = 'Remover'
        

            listItem.classList.add('carrinhoCompras_li_full')
            listDiv.classList.add('list_items_div_carrinho')
            listImg.classList.add('list_items_img_carrinho')
            listPrice.classList.add('list_items_price_carrinho')
            listButton.classList.add('list_items_button_carrinho')  
          
            listDiv.append(listName, listPrice, listButton)
            listItem.append(listImg, listDiv)
            listaDeItensCarrinho.appendChild(listItem)
            
            listButton.addEventListener('click', function removerItemCarrinho(){ 
                listaDeItensCarrinho.innerHTML = ''

                divCarrinho_1_span.innerHTML --  
                
                divCarrinho_2_span.innerHTML = `R$ ${+divCarrinho_2_span.innerHTML.replace('R$ ', '').replace(',00', '') - lista[i].value},00`  

                arrCarrinho.splice(i, 1)

                renderizarCarrinho(arrCarrinho) 
            })
        }   
}


botaoTodos.addEventListener('click', function filtrarTodos(){ 

    listaDeItens.innerHTML = ''
    renderizarProdutoListaPrincipal(data, listaDeItens)
})

botaoAcessorios.addEventListener('click', function filtrarAcessorios(){ 

    listaDeItens.innerHTML = ''
    let arrFiltro = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Acessórios"){
            arrFiltro.push(data[i])
        }
    }
    if(arrFiltro.length == 0){
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})

botaoCalcados.addEventListener('click', function filtrarCalcados(){ 

    listaDeItens.innerHTML = ''
    let arrFiltro = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Calçados"){
            arrFiltro.push(data[i])
        }
    }
    if(arrFiltro.length == 0){
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})

botaoCamisetas.addEventListener('click', function filtrarCamisetas(){ 

    listaDeItens.innerHTML = ''
    let arrFiltro = []
    for(let i = 0; i < data.length; i++){
        if(data[i].tag[0] === "Camisetas"){
            arrFiltro.push(data[i])
        }
    }
    if(arrFiltro.length == 0){
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }
})

botaoPesquisa.addEventListener('click', function pesquisarItens(){
    listaDeItens.innerHTML = ''
    let arrFiltro = []

    for(let i = 0; i < data.length; i++){
        if(data[i].nameItem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputPesquisa.value.toLowerCase()) || data[i].tag[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(inputPesquisa.value.toLowerCase())){
            arrFiltro.push(data[i])
        }
    }

    if(arrFiltro.length == 0){
        let LiSemEstoque = document.createElement('li')
        let H1SemEstoque = document.createElement('h1')

        LiSemEstoque.classList.add('sem_estoque_message')

        H1SemEstoque.innerHTML = 'Não encontramos nenhum item em nosso estoque!'
        LiSemEstoque.appendChild(H1SemEstoque)
        listaDeItens.appendChild(LiSemEstoque)
    }
    else{
        renderizarProdutoListaPrincipal(arrFiltro, listaDeItens)
    }

    inputPesquisa.value = ''
})

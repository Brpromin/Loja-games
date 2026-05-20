let produtosDisponiveis = []
const _url=' https://vragknuzsabemzyzfqmu.supabase.co'
const _key = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyYWdrbnV6c2FiZW16eXpmcW11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NjMzMDIsImV4cCI6MjA5NDMzOTMwMn0.cIQG4nNk9tFmr_JA0V8Xs89Brug1Sb4ZYFBxbApjr2c'
const _supabase = supabase.createClient (_url, _key)

async function carregarProdutos() {
        const { data, error } = await _supabase
                .from('Produtos')
                        .select('*')
                        produtosDisponiveis = data

                            if (error) {
                                    console.error(error)
                                            return
                                                }

                                                    const grid = document.querySelector('.produtos')
                                                        grid.innerHTML = ''

                                                            data.forEach(prod => {
                                                                    const card = document.createElement('div')
                                                                            card.className = 'card'
                                                                                    card.innerHTML = `
                                                                                    <img src="${prod.img}" alt="${prod.nome}" style="width:100%;border-radius:8px;margin-bottom:10px;">
                                                                                        <h2>${prod.nome}</h2>
                                                                                            <p>${prod.descricao}</p>
                                                                                                <p>R$ ${parseFloat(prod.preco).toFixed(2)}</p>
                                                                                                    <p class="${prod.estoque > 0 ? 'em-estoque' : 'sem-estoque'}">
                                                                                                            ${prod.estoque > 0 ? `✔ ${prod.estoque} em estoque` : '✖ Esgotado'}
                                                                                                                </p>
                                                                                                                    <button onclick="addToCart(${prod.id})" ${prod.estoque <= 0 ? 'disabled' : ''}>
                                                                                                                            ${prod.estoque > 0 ? 'Comprar' : 'Esgotado'}
                                                                                                                                </button>
                                                                                                                                `
                                                                                            grid.appendChild(card)
                                                                                                })
                                                                                                }

                                                                                                carregarProdutos()


const btnMenu = document.querySelector('.btn-menu')
const menuLinks = document.querySelector('.menu-links')

btnMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('aberto')
    })
const fecharMenu = document.querySelector('.fechar-menu')

fecharMenu.addEventListener('click', () => {
    menuLinks.classList.remove('aberto')
    })

    document.addEventListener('click', (e) => {
        if (!menuLinks.contains(e.target) && !btnMenu.contains(e.target)) {
                menuLinks.classList.remove('aberto')
                    }
                    })
    let quantidade = 0
    const contador = document.querySelector('#contador')
    const botoes = document.querySelectorAll('.card button')

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
                quantidade++
                        contador.textContent = quantidade
                            })
                            }) 
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || []

function addToCart(id) {
    const produto = produtosDisponiveis.find(p => p.id == id)
        if (!produto) return
            
                carrinho.push(produto)
                localStorage.setItem('carrinho', JSON.stringify(carrinho))
                    contador.textContent = carrinho.length
                        alert(produto.nome + ' adicionado ao carrinho!')
                        }
    const carrinhoIcone = document.getElementById('contador').parentElement
    const modalCarrinho = document.getElementById('modal-carrinho')
    const fecharCarrinho = document.getElementById('fechar-carrinho')
    const listaCarrinho = document.getElementById('lista-carrinho')
    const carrinhoTotal = document.getElementById('carrinho-total')
    carrinhoIcone.addEventListener('click', () => {
        atualizarCarrinho ()
        modalCarrinho.style.display ='flex'
    })
    fecharCarrinho.addEventListener ('click', () => {
        modalCarrinho.style.display ='none'
    })
    function atualizarCarrinho () {
        listaCarrinho.innerHTML = ''
        let total = 0 
        carrinho.forEach((item, index) => {
            total += item.preco
            listaCarrinho.innerHTML += `
                        <li>
                                        <span>${item.nome}</span>
                                                        <span>R$ ${parseFloat(item.preco).toFixed(2)}</span>
                                                                        <button onclick="removerItem(${index})">✕</button>
                                                                                    </li>
                                                                                            `
        })
        carrinhoTotal.textContent = 'Total: R$ ' + total.toFixed(2)
        contador.textContent = carrinho.length
    }
    function removerItem (index) {
        carrinho.splice (index, 1)
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
        atualizarCarrinho ()
    }
    function filtrarCategoria(categoria) {
            const grid = document.querySelector('.produtos')
                grid.innerHTML = ''

                    const filtrados = categoria === 'todos' 
                            ? produtosDisponiveis 
                                    : produtosDisponiveis.filter(p => p.categoria === categoria)

                                        filtrados.forEach(prod => {
                                                const card = document.createElement('div')
                                                        card.className = 'card'
                                                                card.innerHTML = `
                                                                <img src="${prod.img}" alt="${prod.nome}" style="width:100%;border-radius:8px;margin-bottom:10px;">
                                                                            <h2>${prod.nome}</h2>
                                                                                        <p>${prod.descricao}</p>
                                                                                                    <p>R$ ${parseFloat(prod.preco).toFixed(2)}</p>
                                                                                                                <button onclick="addToCart(${prod.id})">Comprar</button>
                                                                                                                        `
                                                                                                                                grid.appendChild(card)
                                                                                                                                    })

                                                                                                                                        menuLinks.classList.remove('aberto')
                                                                                                                                        }
const inputBusca = document.getElementById ('inpur-busca')
inputBusca.addEventListener ('input', () => {
    const termo = inputBusca.value.toLowerCase ()
    const grid = document.querySelector('.produtos')
    grid.innerHTML= ''
const filtrados = produtosDisponiveis.filter (p => p.nome.toLowerCase().include (termo)
)
filtrados.forEach (prod =>{
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
       <h2>${prod.nome}</h2>
                   <p>${prod.descricao}</p>
                               <p>R$ ${parseFloat(prod.preco).toFixed(2)}</p>
                                           <p class="${prod.estoque > 0 ? 'em-estoque' : 'sem-estoque'}">
                                                           ${prod.estoque > 0 ? `✔ ${prod.estoque} em estoque` : '✖ Esgotado'}
                                                                       </p>
                                                                                   <button onclick="addToCart(${prod.id})" ${prod.estoque <= 0 ? 'disabled' : ''}>
                                                                                                   ${prod.estoque > 0 ? 'Comprar' : 'Esgotado'}
                                                                                                               </button>
                    
    `
    grid.appendChild (card)
})
})
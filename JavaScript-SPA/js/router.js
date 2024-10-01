
// MODELAR A CLASSE DA ROTA

export class Router {  
    routes = {}
    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault() // Previne a página de recarregar
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle() // THIS é a referencia dentro da função
    }

    handle() {
        const { pathname } = window.location // Destruturação
        const route = this.routes[pathname] || this.routes[404]
    
        fetch(route) 
            // prometo pra voce que vou buscar essa rota, ENTÃO quando CONCLUIR vou voltar com e executar essa função
            // Fetch: API do HTML, sempre retorna uma promessa, assincrono
            // then : então
            .then((data) => data.text()) // transformei em um texto
            .then(html => {
                document.querySelector('#app').innerHTML = html
            }) // agora vou mostrar esse html
    }
}


// export default new Router()
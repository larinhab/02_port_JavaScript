// SPA: pega os dados devolvidos como json, do back para front
import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add(404, "/pages/404.html")

// OBJECT LITERAL:
//const routes = {
//    "/": "pages/home.html',
//    "/about": 'pages/about.html',
//    "/contact":  'pages/contact.html',
//    404: "/pages/404.html"
//}

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

//  class Passaro() {
//      voar() {  // ISTO É UM METODO, TOAD FUNÇÃO DENTRO DE UMA CLASSE É UM METODO
//          alert('voar')
//      }
//      // TODA VARIAVEL DENTRO DE UMA CLASSE É UM ATRIBUTO
//  }

//  class Pato extends Passaro {
//      constructor(){
 //         super() // Este super vai herdar atraves da palavra 'extends', 
//          // vai puxar tudo que tiver na classe Passaro
//      }
//  }

//  class Galinha extends Passaro {
//      constructor() {
 //         super()
 //     }
    
 //     voar() {
 //         alert('nao voa tao bem')
 //     } // POLIFORMISMO: reescrever, mesmo herdando posso reescrever o metodo
//  }

//  const pato = new Pato ()
//  pato.voar()

//  const galinha = new Galinha()
//  galinha.voar()
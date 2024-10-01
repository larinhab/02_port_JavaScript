import { Router } from "./router.js";

const router = new Router()
router.add('/', "/index.html")
router.add('/', "/src/pages/home.html")
router.add('/universe', "src/pages/universe.html")
router.add('/explorer', "src/pages/explorer.html")
router.add(404, "/src/pages/404.html")//

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;

    if(body.classList.contains('home')){
        body.style.backgroundImage = 'url(./src/assets/bg.png))'
    } else if(body.classList.contains('uni')) {
        body.style.backgroundImage = 'url(./src/assets/bguni.png))'
    } else if(body.classList.contains('exp')) {
        body.style.backgroundImage = 'url(./src/assets/bgex.png))'
    }
});
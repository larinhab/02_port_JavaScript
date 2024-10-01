import { Router } from "./router.js";
import { getAccessToken } from "./api.js";


// PÁGINAS 
const router = new Router()
router.add('/', "/index.html")
router.add('/', "src/pages/home.html")
router.add('/about', "src/pages/about.html")
router.add('/contact', "src/pages/contact.html")
router.add(404, "/src/pages/404.html")


router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

// ______________________________________________ //


// 
// export function appearInput(inputValue) {
//     creatRow() {
//         const tr = document.createElement('tr')

//         tr.innerHTML =
//          ` <td class="user">
   //      <img src="https://github.com/larinhab.png" alt="">
      //   <a href="https://open.spotify.com/user/larabviana"></a>
      //   <p>larabviana</p>
       //      </td>
         //    <td class="artist">Vintage Culture</td>
        //     <td class="song">Innerbloom</td>
         //    <td> 
         //        <button class="remove">&times</button>
         //    </td>
   //  `
   //      return tr
   //   }
//   }

  // removeAllTr() {
    // this.tbody.querySelectorAll('tr')
    // forEach((tr) => {
       //  tr.remove()
    // })
// }

// searchButton()
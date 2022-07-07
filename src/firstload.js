import './style.css'

import loadContact from './pages/contact.js'
import loadMenu from './pages/menu.js'
import loadHome from './pages/home.js'


function topNavBar() {
    const header = document.createElement('div');
    header.setAttribute('id','header')

    const homebutton = document.createElement('button')
    homebutton.innerHTML = ("Home")
    homebutton.classList.add('button');
    homebutton.setAttribute('id','homeButton');
    homebutton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homebutton);
        loadHome();
    })

    const menubutton = document.createElement('button')
    menubutton.innerHTML = ("Menu")
    menubutton.classList.add('button');
    menubutton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menubutton);
        loadMenu();
    })

    const contact = document.createElement('button')
    contact.innerHTML = ("Contact")
    contact.classList.add('button');
    contact.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contact);
        loadContact();
    })

    header.appendChild(homebutton);
    header.appendChild(menubutton);
    header.appendChild(contact);

    document.body.appendChild(header);
    return header;
}

function home() {
    const home = document.createElement('div');
    home.setAttribute('id','home')
    document.body.appendChild(home);
    console.log(home)
    loadHome();

    return home;
}
// loadFooter
function footer() {
    const footer = document.createElement('div');
    footer.setAttribute('id','footer')
    footer.innerHTML = ("Website created by Blazej Wartalski");

    const footerGitHub = document.createElement('a');
    footerGitHub.setAttribute('id','footerGit');
    footerGitHub.setAttribute('href','https://github.com/BlazejWartalski');
    footerGitHub.href = "https://github.com/BlazejWartalski";
    footerGitHub.innerHTML = ("GitHub link to my profile");

    footer.appendChild(footerGitHub);
    
    document.body.appendChild(footer);
    return footer;
}

function setActiveButton(btn) {
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    })
    btn.classList.add("active");
}

function initializeWebsite() {

    topNavBar();
    home();
    footer();
  
    setActiveButton(document.getElementById("homeButton"));
  }
  
export default initializeWebsite;
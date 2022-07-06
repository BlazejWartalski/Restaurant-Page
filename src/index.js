import './style.css'

const maindiv = document.getElementById("content");

console.log("lets go");
console.log(maindiv);
function topNavBar() {
    const header = document.createElement('div');
    header.setAttribute('id','header')

    const homebutton = document.createElement('button')
    homebutton.innerHTML = ("Home")
    header.appendChild(homebutton);

    const menubutton = document.createElement('button')
    menubutton.innerHTML = ("Menu")
    header.appendChild(menubutton);

    const contact = document.createElement('button')
    contact.innerHTML = ("Contact")
    header.appendChild(contact);

    return header;
}

function home() {
    const home = document.createElement('div');
    home.setAttribute('id','home')

    const banner = document.createElement('div');
    banner.setAttribute('id','banner')
    banner.classList.add('section')
    banner.innerHTML = ("here goes the banner");
    home.appendChild(banner);

    const about = document.createElement('div');
    about.setAttribute('id','about');
    about.classList.add('section')
    about.innerHTML = ("Info about restaurant")
    home.appendChild(about);

    const location = document.createElement('div');
    location.setAttribute('id','location');
    location.classList.add('section')
    location.innerHTML = ("location restaurant")
    home.appendChild(location);

    return home;
}

function footer() {
    const footer = document.createElement('div');
    footer.setAttribute('id','footer')
    footer.innerHTML = ("Website created by Blazej Wartalski");

    const footerGitHub = document.createElement('div');
    footerGitHub.setAttribute('id','footerGit')
    footerGitHub.innerHTML = ("GitHub link to my profile");

    footer.appendChild(footerGitHub);
    return footer;
}

document.body.appendChild(topNavBar());
document.body.appendChild(home());
document.body.appendChild(footer());
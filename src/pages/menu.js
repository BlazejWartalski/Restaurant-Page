function loadMenu() {
    home.innerHTML = ""
    
    const banner = document.createElement('div');
    banner.setAttribute('id','banner')
    banner.classList.add('section')
    
        const logo = document.createElement('img');
        logo.setAttribute('id','logoTelephone')
        banner.appendChild(logo);
        
        const bannertext = document.createElement('div');
        bannertext.innerHTML = ("Menu")
        banner.appendChild(bannertext);
        home.appendChild(banner);
    
    const about = document.createElement('div');
    about.setAttribute('id','moreShitt');
    about.classList.add('section')
    about.innerHTML = ("Lorem ipsum")
    home.appendChild(about);

    const about2 = document.createElement('div');
    about2.setAttribute('id','moreShitt');
    about2.classList.add('section')
    about2.innerHTML = ("Lorem ipsum")
    home.appendChild(about2);

    const about3 = document.createElement('div');
    about3.setAttribute('id','moreShitt');
    about3.classList.add('section')
    about3.innerHTML = ("Lorem ipsum")
    home.appendChild(about3);

    const about4 = document.createElement('div');
    about4.setAttribute('id','moreShitt');
    about4.classList.add('section')
    about4.innerHTML = ("Lorem ipsum")
    home.appendChild(about4);

    
    return home;
}

export default loadMenu;
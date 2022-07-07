function loadContact() {
    home.innerHTML = ""
    
    const banner = document.createElement('div');
    banner.setAttribute('id','banner')
    banner.classList.add('section')
    
        const logo = document.createElement('img');
        logo.setAttribute('id','logoTelephone')
        banner.appendChild(logo);
        
        const bannertext = document.createElement('div');
        bannertext.innerHTML = ("Contact details")
        banner.appendChild(bannertext);
        home.appendChild(banner);
    
    const about = document.createElement('div');
    about.setAttribute('id','moreShitt');
    about.classList.add('section')
    about.innerHTML = ("Lorem ipsum")
    home.appendChild(about);

    
    return home;
}





export default loadContact;
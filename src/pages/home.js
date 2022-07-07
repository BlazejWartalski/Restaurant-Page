function loadHome() {
    home.innerHTML = ""
    
    const banner = document.createElement('div');
    banner.setAttribute('id','banner')
    banner.classList.add('section')
    
    const logo = document.createElement('img');
    logo.setAttribute('id','logo')
    banner.appendChild(logo);
    
    const bannertext = document.createElement('div');
    bannertext.innerHTML = ("Restaurant Name")
    banner.appendChild(bannertext);
    home.appendChild(banner);
    
    const about = document.createElement('div');
    about.setAttribute('id','about');
    about.classList.add('section')
    about.innerHTML = ("Info about restaurant")
    const ul = document.createElement('ul');
    ul.setAttribute('id','hoursList');
    // const hrList = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    // document.getElementById('')
    home.appendChild(about);
    
    const location = document.createElement('div');
    location.setAttribute('id','location');
    location.classList.add('section')
    location.innerHTML = ("location restaurant")
    home.appendChild(location);
    
    return home;
}

export default loadHome;
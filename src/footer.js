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
    return footer;
}

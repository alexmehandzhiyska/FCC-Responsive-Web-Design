const barEl = document.getElementById('bars-icon');
const navbarEl = document.getElementById('nav-bar');
const navLinksEl = document.getElementsByClassName('nav-links')[0]
const links = Array.from(document.querySelectorAll('.nav-links>li>a'))

if (barEl.style.display == 'inline' || barEl.style.display == '') {
    barEl.addEventListener('click', e => {

        if (navLinksEl.classList.contains('vertical-link-ul')) {
            navLinksEl.classList.remove('vertical-link-ul')
            links.forEach(l => l.classList.remove('vertical-link'))

        } else {
            navLinksEl.classList.add('vertical-link-ul')
            links.forEach(l => l.classList.add('vertical-link'))
        };

        links.forEach(l => {
            l.addEventListener('click', e => {
                navLinksEl.classList.remove('vertical-link-ul')
                links.forEach(l => l.classList.remove('vertical-link'));
            })
        })
    })
}

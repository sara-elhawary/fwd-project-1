function main() {
  dynamicNavBar()
  activeSection()
}

//SELECT ACTIVE SECTION
function activeSection() {
  const navBarLinks = document.querySelectorAll('.nav-link')
  console.log(navBarLinks)
  navBarLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const activeLink = document.querySelector('.nav-link.active')
      if (activeLink) {
        activeLink.classList.remove('active')
      }
      const currentLink = event.target
      currentLink.classList.add('active')
    })
  })
}

//Dynamically built navigation bar
function dynamicNavBar() {
  const navBar = document.getElementById('nav-bar')
  const links = {
    Home: 'home-page',
    Why: 'our-work',
    Contact: 'footer',
  }

  for (const link in links) {
    const item = document.createElement('li')

    item.innerHTML = `<a href="#${links[link]}" class="nav-link">${link}</a>`
    console.log(item.innerHTML)
    navBar.appendChild(item)
    console.log('item is created')
  }
}
main()

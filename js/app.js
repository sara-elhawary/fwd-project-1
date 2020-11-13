function main() {
  dynamicNavBar()
  activeSection()
}

//SELECT ACTIVE SECTION
function activeSection() {
  const navBar = document.getElementById('nav-bar')
  navBarLinks = navBar.children
  console.log(navBarLinks)

  navBarLinks.addEventListener('click', function (event) {
    for (const i = 0; i < navBarLinks.length; i++) {
      if (navBarLinks.item(i).contains('active')) {
        navBarLinks.item(i).remove('active')
      }
    }
    event.target.classList.add('active')
    console.log(event.target.classList)
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
    item.classList.add('nav-link')
    item.innerHTML = `<a href="#${links[link]}" class="nav-link">${link}</a>`
    console.log(item.innerHTML)
    navBar.appendChild(item)
    console.log('item is created')
  }
}
main()

const navSections = document.querySelectorAll('section')
const navBar = document.getElementById('nav-bar')

//DYNAMIC NAV BAR
function dynamivNavBar() {
  let fragment = document.createDocumentFragment()
  navSections.forEach((element) => {
    let newli = document.createElement('li')
    let newLink = document.createElement('a')
    const elementId = element.id
    let navLink = elementId
      .split('-')
      .map((word) => capitalize(word))
      .join(' ')
    let txtContent = document.createTextNode(navLink)
    let attr = document.createAttribute('data-link')
    let hrefAttr = document.createAttribute('href')
    attr.value = `#${element.id}`
    hrefAttr.value = `#${element.id}`
    newLink.setAttributeNode(attr)
    newLink.setAttributeNode(hrefAttr)

    let attr1 = document.createAttribute('class')
    attr1.value = 'nav-link'
    newLink.setAttributeNode(attr1)
    newLink.appendChild(txtContent)
    newli.appendChild(newLink)
    fragment.appendChild(newli)
    helper()
  })
  navBar.appendChild(fragment)
}
function helper() {
  window.addEventListener('DOMContentLoaded', (event) => {
    let mylinks = document.querySelectorAll('.link')
    mylinks.forEach((Elm) => {
      Elm.addEventListener('click', function (event) {
        let sectionid = event.target.textContent
        let getit = document.getElementById(sectionid)
        getit.scrollIntoView()
      })
    })
    console.log('DOM fully loaded and parsed')
  })
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

function inViewPort(element) {
  const dimensions = element.getBoundingClientRect()
  const top = dimensions.top
  const left = dimensions.left
  const bottom = dimensions.bottom
  const right = dimensions.right

  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function activeLinkFunction() {
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach((link) => {
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

//SELECT ACTIVE SECTION

function activeSection() {
  console.log(navSections)
  document.addEventListener('scroll', function (event) {
    event.preventDefault()
    navSections.forEach((section) => {
      if (inViewPort(section)) {
        section.classList.add('highlighted')
      }
    })
  })
}

function main() {
  dynamivNavBar()
  activeLinkFunction()
  activeSection()
}
main()

const navLinks = document.querySelectorAll('.section')
const navBar = document.getElementById('nav-bar')
//dynamic nav bar
function dynamivNavBar() {
  let fragment = document.createDocumentFragment()
  navLinks.forEach((element) => {
    let newli = document.createElement('li')
    let newLink = document.createElement('a')
    let txtContent = document.createTextNode(element.id)
    let attr = document.createAttribute('data-link')
    attr.value = `#${element.id}`
    newLink.setAttributeNode(attr)
    let att1 = document.createAttribute('class')
    att1.value = 'link'
    newLink.setAttributeNode(att1)
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
dynamivNavBar()
// function main() {
//   dynamicNavBar()
//   activeSection()
// }

// //SELECT ACTIVE SECTION
// //querySelectorAll for section and then he used data nav and assigned
// //its value to
// function activeSection() {
//   const navBarLinks = document.querySelectorAll('.nav-link')
//   console.log(navBarLinks)
//   navBarLinks.forEach((link) => {
//     link.addEventListener('click', (event) => {
//       const activeLink = document.querySelector('.nav-link.active')
//       const highlighted = document.querySelector('.higlighted')
//       if (activeLink && highlighted) {
//         activeLink.classList.remove('active')
//         highlighted.classList.remove('highlighted')
//       }
//       const currentLink = event.target
//       currentLink.classList.add('active')
//     })
//   })
// }

// //Dynamically built navigation bar
// function dynamicNavBar() {
//   const navBar = document.getElementById('nav-bar')
//   const links = {
//     Home: 'home-page',
//     Why: 'our-work',
//     Services: 'unique',
//     Contact: 'footer',
//   }

//   for (const link in links) {
//     const item = document.createElement('li')

//     item.innerHTML = `<a href="#${links[link]}" class="nav-link">${link}</a>`
//     console.log(item.innerHTML)
//     navBar.appendChild(item)
//     console.log('item is created')
//   }
// }
// main()

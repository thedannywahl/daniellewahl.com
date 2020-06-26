const toggleActive = id => {
  let els = [
    document.querySelectorAll('nav a'),
    document.querySelectorAll('.group')
    ]
  els.forEach(nl => {
    nl.forEach(el => {
      el.classList.remove('active')
    })
  })
  let c = [
    document.querySelector(`[href="#${id}"]`),
    document.querySelector(`[id="${id}"]`)
  ]
  let h = document.getElementsByTagName('h1')[0]
  c.forEach(el => {
    if(el === null) return
    if(id === "contact") {
      h.classList.remove('active')
    } else {
      h.classList.add('active')
    }
    el.classList.toggle('active')
  })
  let t = id === "boudoir" ? id : "photography"
  document.getElementsByClassName('title')[0].innerHTML = t
  document.title = `${t.charAt(0).toUpperCase() + t.slice(1)} by Danielle Wahl`
}
const toggle = id => {
  toggleActive(id)
  if(lazyLoadInstance) lazyLoadInstance.update()
}
let u = document.location.href.split('#')[1]
if(u !== undefined) toggle(u)

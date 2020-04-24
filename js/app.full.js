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
const toggleMeta = id => {
  let t = id === "boudoir" ? id : "photography"
  let els = document.querySelectorAll("meta[property^='og:']")
  for(let i = 0; i < els.length; i++) {
    switch(els[i].attributes.property.value) {
      case 'og:title':
        els[i].content = `${t.charAt(0).toUpperCase() + t.slice(1)} by Danielle Wahl`
      break
      case 'og:description':
        let d = {
          boudoir: "I'm a boudoir photographer in Utah. I'm passionate about helping women discover their beauty inside and out.",
          photography: "I'm a photographer serving Utah and its surrounding areas. I'm passionate about boudoir, motherhood, and strong, confident women."
        }
        els[i].content = d[t]
      break
      case 'og:image':
        els[i].content = `images/meta/${t}.jpg`
      break
      case 'og:url':
        els[i].content = `https://daniellewahl.com/#${id}`
      break
    }
  }
}
const toggle = id => {
  toggleActive(id)
  toggleMeta(id)
  if(lazyLoadInstance) lazyLoadInstance.update()
}
let u = document.location.href.split('#')[1]
if(u !== undefined) toggle(u)

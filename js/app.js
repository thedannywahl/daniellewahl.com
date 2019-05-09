const toggleActive = (id) => {
  let els = [
    document.querySelectorAll('[role="navigation"] a'),
    document.querySelectorAll('[role="region"]')
    ]
  els.forEach(nl => {
    nl.forEach(el => {
      el.classList.remove('active')
    })
  })
  let c = [
    document.getElementById(id),
    document.querySelector(`[aria-label="${id}"]`)
  ]
  let h = document.getElementsByTagName('h1')[0]
  c.forEach((el) => {
    if(el === null) return
    if(id === "contact") {
      h.classList.remove('active')
    } else {
      h.classList.add('active')
    }
    el.classList.toggle('active')
  })
  let t = id === "contact" ? "photography" : id
  document.getElementsByClassName('title')[0].innerHTML = t
  document.title = t.charAt(0).toUpperCase() + t.slice(1) + " by Danielle Wahl"
}

let dl = document.location.href.split('#')[1]
if(dl !== undefined) toggleActive(dl)

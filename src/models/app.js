import Popover from './popover'

const button = document.getElementById('button')

button.addEventListener('click', () => {
  const popover = new Popover(button.dataset.title, button.dataset.body)
  popover.render()
  popover.element.style.top = '-' + ( popover.element.getBoundingClientRect().height + 8 ) + 'px'
  }
)

// function showTooltip(e) {
//   e.preventDefault()
//   const query = document.querySelector('.tooltip')
//   const coords = this.getBoundingClientRect()
//   const hrefHeight = this.getBoundingClientRect().bottom - this.getBoundingClientRect().top
  

//   if (query) {
//       if (this.getAttribute('title') === query.textContent) {
//           query.remove()
//           return
//       }
//       query.remove()
//   }
//   let tooltip = document.createElement('div')
//   tooltip.classList.add('tooltip')
//   tooltip.style.display = 'block'
//   tooltip.style.top = coords.top + hrefHeight + 'px'
//   tooltip.style.left = coords.left + 'px'
//   tooltip.textContent = this.getAttribute('title')
//   document.body.append(tooltip)

//   //setTimeout(() => tooltip.remove(), 2000)
// }

// let hrefs = document.getElementsByClassName('has-tooltip')
// for (href of hrefs) {
//   href.addEventListener('click', showTooltip)
// }
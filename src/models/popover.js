export default class Popover {
  constructor(title, body) {
    this.title = title
    this.body = body
    this.element = document.getElementById('popover')
    this.container = document.getElementById('button-container')
  }

  render() {
    this.clear()
    const element = document.createElement('div')
    element.id = 'popover'
    element.innerHTML = `
      <h3 id="popover-title">${this.title}</h3>
      <div id="popover-body">${this.body}</div>
    `
    this.container.appendChild(element)
    this.element = element
  }

  clear() {
    if (this.element) this.element.remove()
  }
}
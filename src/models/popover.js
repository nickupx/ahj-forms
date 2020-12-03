export default class Popover {
  constructor(title, body) {
    this.title = title
    this.body = body
    this.element = document.getElementById('popover')
  }

  render() {
    this.clear()
    const container = document.getElementById('button-container')
    const element = document.createElement('div')
    element.id = 'popover'
    element.innerHTML = `
      <div id="arrow" style="top: 34px;"></div>
      <h3 id="popover-title">${this.title}</h3>
      <div id="popover-body">${this.body}</div>
    `
    document.body.appendChild(element)
  }

  clear() {
    if (this.element) this.element.remove()
  }
}
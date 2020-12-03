import CardWidget from './widget'

const widget = new CardWidget()

widget.form.addEventListener('submit', (e) => {
  e.preventDefault()
  widget.validate()
})

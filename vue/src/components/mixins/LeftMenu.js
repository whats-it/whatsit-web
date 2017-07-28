
export const LeftMenu = {
  methods: {
    toggle (e) {
      console.log(e)
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}

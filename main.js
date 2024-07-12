let html = document.querySelector('html')
let toggleMode = document.getElementById('toggle-mode')

toggleMode.addEventListener('click', () => {
    html.classList.toggle('light')
})
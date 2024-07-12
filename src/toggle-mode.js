let darkMode = true

let button = document.getElementById('toggle-mode')

button.addEventListener('click', () => {

    document.documentElement.classList.toggle('light') // documentElement = <html></html>

    let mode = darkMode ? 'Light' : 'Dark'

    button.querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode

})  
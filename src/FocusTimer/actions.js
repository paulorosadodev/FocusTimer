import state from './state.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running') // Retorna true ou false
}

export function set() {

}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
}
import state from './state.js'
import * as timer from './timer.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running') // Retorna true ou false
    timer.countdown()
}

export function set() {

}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
}

// export function forward() {
//     state.seconds += 10
// }

// export function backward() {
//     state.seconds -= 10
// }
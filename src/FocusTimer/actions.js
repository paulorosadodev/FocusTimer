import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running') // Retorna true ou false
    timer.countdown()
}

export function set() {
    el.minutes.setAttribute('contenteditable', true)
    el.minutes.focus()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')
    if (state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()
}

// export function forward() {
//     state.seconds += 10
// }

// export function backward() {
//     state.seconds -= 10
// }
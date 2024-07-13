import state from './state.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
import { reset } from './actions.js'

export function countdown() {

    clearTimeout(state.countdownId)

    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)
    
    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        reset()
        sounds.alarm.play()
        return
    }

    updateDisplay(minutes, seconds)

    state.countdownId = setTimeout(() => {
        countdown()
    }, 1000)

    console.log(state.countdownId)

}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes // Se minutes for nulo (não passado no parametro) ele pega do state
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
} 
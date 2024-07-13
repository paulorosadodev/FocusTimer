import state from './state.js'
import * as el from './elements.js'

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes // Se minutes for nulo (não passado no parametro) ele pega do state
    seconds = seconds ?? state.seconds

    el.minutes.textContent = String(minutes).padStart(2, '0')
    el.seconds.textContent = String(seconds).padStart(2, '0')
}
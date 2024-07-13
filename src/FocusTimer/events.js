import * as actions from "./actions.js"
import * as el from "./elements.js"
import state from "./state.js";
import { controls } from "./elements.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action

        if (typeof actions[action] != 'function') {
            return
        }

        actions[action]()
    })

    window.addEventListener('keydown', event => {
        if (event.key == ' ') {
            actions['toggleRunning']()
        } else if (event.key == 'Enter') {
            actions['reset']()
        } else if (event.key.toLowerCase() == 'm') {
            actions['toggleMusic']()
        } 
        // else if (event.key == 'ArrowRight') {
        //     actions['forward']()
        // } else if (event.key == 'ArrowLeft') {
        //     actions['backward']()
        // }
    })
}

export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ''
    })

    el.minutes.onkeypress = (event) => {
        return /\d/.test(event.key)
    }

    el.minutes.addEventListener('blur', () => {
        if (el.minutes.textContent > 60) {
            el.minutes.textContent = 60
        }

        state.minutes = el.minutes.textContent
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })

}
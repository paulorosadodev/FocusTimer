import { controls } from "./elements.js";
import * as actions from "./actions.js"

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
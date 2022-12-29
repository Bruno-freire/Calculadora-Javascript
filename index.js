import { calculate, resultInput } from "./modules/calculate.js"
import {themeSwitcher} from "./modules/themeSwitcher.js"
import {copyToClipBoard} from "./modules/copyToClipBoard.js"
import { handleButtonPress, clear, handleTyping } from "./modules/keyHandlers.js"

document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
  charKeyBtn.addEventListener('click', handleButtonPress)
})

document.getElementById('input').addEventListener('keydown', handleTyping)
document.getElementById('clear').addEventListener('click', clear)
document.getElementById('equal').addEventListener('click', calculate)
document.getElementById('copyToClipboard').addEventListener('click', copyToClipBoard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)
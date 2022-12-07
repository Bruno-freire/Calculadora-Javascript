const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const input = document.getElementById('input')
const resultInput = document.getElementById('result')
const root = document.querySelector(':root')
const main = document.querySelector('main')

function calculate(){
  //linha 8 é uma forma de o value nao ser perdido em caso de erro.
  input.value = input.value
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')
  if(resultInput.value == "undefined"){
    resultInput.value = "0"
    resultInput.classList.remove('error')
  }
}

input.addEventListener('keydown', function(ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if(ev.key === "Backspace"){
    input.value = input.value.slice(0,-1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
})

document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    input.value += charKeyBtn.dataset.value
    input.focus()
  })
})

document.getElementById('equal').addEventListener('click', calculate)

document.getElementById('clear').addEventListener('click', function(){
  input.value = ''
  resultInput.value = ''
  resultInput.classList.remove('error')
})

document.getElementById('copyToClipboard').addEventListener('click', function(copy){
  const button = copy.currentTarget
  if(button.innerText === "Copy")
  {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(resultInput.value)
  }
  else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})

document.getElementById('themeSwitcher').addEventListener('click', function(){
  if(main.dataset.theme == 'dark'){
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"
  }else{
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})



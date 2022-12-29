const resultInput = document.getElementById('result')
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

export {resultInput, calculate}
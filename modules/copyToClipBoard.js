function copyToClipBoard(copy){
  const button = copy.currentTarget
  if(button.innerText === "Copy")
  {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(document.getElementById('result').value)
  }
  else{
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
}

export {copyToClipBoard}
let boxs = document.querySelectorAll('.box');

document.addEventListener('keydown',(e) =>{
  console.log(e)
  e.preventDefault()
  if(e.code.toLowerCase() == 'space'){
    randomColor()
  } 
})

function generteColor(){
  let hexColor = '0123456789ABCDEF';
  let color = '';
  for(let i =0 ;i<6; i++){
    color += hexColor[Math.floor(Math.random()*hexColor.length)]
  }
  return '#'+color
}

document.addEventListener('click',(e) =>{
  let type = e.target.dataset.item;
  if(type == 'lock'){
    let n = e.target.tagName.toLowerCase() == 'i' ? e.target : e.target.children[0];
    n.classList.toggle('fa-lock-open');
    n.classList.toggle('fa-lock');

  }else if(type == 'copy'){
    copyText(e.target.textContent)
  }else if(type == 'colorBox'){
    randomColor()
  }
})

function randomColor(){
  boxs.forEach((item)=>{
    let myLock = item.querySelector('i').classList.contains('fa-lock');
    console.log(myLock)
    let color = chroma.random();    
    // let color = generteColor();
    let text = item.querySelector('h2');
    let button = item.querySelector('button');
    if(myLock){
      return
    }
    text.textContent = color;
    item.style.backgroundColor = color;

    textColor(text,color);
    textColor(button,color);
  })
}

function copyText(text){
  return navigator.clipboard.writeText(text)
}

function textColor(text,color){
  let luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? 'black' : 'white';
}

randomColor();
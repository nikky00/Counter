let header = document.querySelector('h1')
let dec = document.querySelector('.dec');
let res = document.querySelector('.res');
let inc = document.querySelector('.inc');
let body =document.querySelector('body')

function decrease(yellow) {
    body.style.backgroundColor = 'yellow'
    header.textContent--
    
}
dec.addEventListener('click', decrease)

function increase() {
  header.textContent++   
  body.style.backgroundColor = 'green'
   
 }  
inc.addEventListener('click', increase)


function reset() {
    header.textContent=0
    body.style.backgroundColor = 'red'

}
res.addEventListener('click', reset)
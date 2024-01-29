const doc = document;
const regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;




const inputValue = doc.querySelector('#input');

const spanAlert = doc.querySelector('#alert');
const main = doc.querySelector('main');
const msg = doc.querySelector('#msg');


function capturaDeEmail (){
  
  const input = inputValue.value;

  if(regExp.test(input)){

    main.classList.add('active')
    msg.classList.remove('active')

  }else {

    spanAlert.classList.remove('active')
    inputValue.classList.add('input-active')

  }
  
}


function volver (){

  if(main.classList.contains('active')){

    main.classList.remove('active')
    msg.classList.add('active')
    spanAlert.classList.add('active')
    
  }
  
  doc.querySelector('.email__div').reset()
  
}

const btn = doc.querySelector('#btn');

btn.addEventListener('click', (e)=>{

  e.preventDefault()
  capturaDeEmail()

})


const btnDiss = doc.querySelector('#btn-dis');

btnDiss.addEventListener('click', (e) =>{
  e.preventDefault()
  volver()
})


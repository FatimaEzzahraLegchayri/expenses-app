const header = document.querySelector('header')

document.addEventListener('scroll',function(){
  if(window.scrollY > 0){
    header.classList.add('header-shadow')
  }else{
    header.classList.remove('header-shadow')
  }
})
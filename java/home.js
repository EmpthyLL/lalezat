
const search = document.querySelector('.search-bar')
const searchicon = document.querySelector('.search')
const searchform = document.getElementById('search-form')
searchicon.addEventListener('click',function(ev){
    search.classList.toggle('active')
    searchform.focus()
    ev.preventDefault()
})
document.addEventListener('click',function(ev){
    if(!searchicon.contains(ev.target) && !search.contains(ev.target)){
        search.classList.remove('active')
    }
})

const routesHome = {
    '/home':            '/pages/home.html',
  
   
}

const routesPersonagens = {
    '/personagens':    '/pages/personagens.html',
    
}
const routesEpisodios = {
    '/episodios':         '/pages/episodios.html',
}
const route = async ()=>{
    
    window.event.preventDefault()
    window.history.pushState({},'', window.event.target.href)
    const path = window.location.pathname
  const responseHome = await fetch(routesHome[path])
  const responsePersonagens = await fetch(routesPersonagens[path])
  const responseEpisodios = await fetch(routesEpisodios[path])
  const homeCode = await responseHome.text()
  const personagensCode = await responsePersonagens.text()
  const episodiosCode = await responseEpisodios.text()
  
  
  document.getElementById('root').innerHTML = html
  
      
  }
  window.route = route
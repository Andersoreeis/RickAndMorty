const routes = {
    '/home': './pages/home.html',
    '/character': './pages/character.html',
    '/episode': './pages/episode.html',
    
  };



 

const route = async ()=>{
    
    window.event.preventDefault()
    window.history.pushState({},'', window.event.target.href)
    const path = window.location.pathname
  const response = await fetch(routes[path])
  console.log(response);
  console.log(path);
  const html = await response.text()
 
  
  
  document.getElementById('root').innerHTML = html
  
      
  }
  window.route = route
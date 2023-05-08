const routes = {
    '/home': './pages/home.html',
    '/about': './pages/about.html',
    '/character': './pages/character.html',
   
    
  };


  import {loadTable} from './allcharacters.js'
  const loadingTable = loadTable()
 

const route = async ()=>{
    
    window.event.preventDefault()
    window.history.pushState({},'', window.event.target.href)
    const path = window.location.pathname
  const response = await fetch(routes[path])
 
  console.log(path);
  

  const html = await response.text()
  loadingTable

  
  
  document.getElementById('root').innerHTML = html
  
      
  }
  window.route = route
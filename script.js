//Variables a asignar para modificar el html


const app = document.getElementById('root')

const logo = document.createElement('img');
logo.src ='logo.png';

const logo2 = document.createElement('img');
logo2.src = 'logo7.png';

const container = document.createElement('div')
container.setAttribute('class', 'container')

//Modificar el html
app.appendChild(container)
app.appendChild(logo)

app.appendChild(container)
app.appendChild(logo2)

//Crear la conexion con la api
var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Acceder al json y darle formato a la salida en el sitio web
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      
      const img = document.createElement('img');
      img.src = movie.image;
      
   
      

      switch (movie.title) {
        case 'Grave of the Fireflies':
          img.onclick = ()=>{
            window.location.href = "https://9anime.id/watch/grave-of-the-fireflies.0235/ep-full";
            }
          break;
          case 'Only Yesterday':
            img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/only-yesterday.3rkr/ep-full";
              }
            break;
          case 'Castle in the Sky':  
          img.onclick = ()=>{
            window.location.href = "https://9anime.id/watch/castle-in-the-sky.zlnm/ep-full";
            }
          break;
          case 'My Neighbor Totoro':
            img.onclick = ()=>{
            window.location.href = "https://9anime.id/watch/my-neighbor-totoro.1n3p";}
            break;
          case "Kiki's Delivery Service" :
            img.onclick = ()=>{
            window.location.href = "https://9anime.id/watch/kikis-delivery-service.2oj2/ep-full";}
             break ;
           case "Only Yesterday" :
            img.onclick = ()=>{
            window.location.href = "https://9anime.id/watch/only-yesterday.3rkr/ep-full";}
            break;    
            case "Porco Rosso" :
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/porco-rosso.4qlj/ep-full";}
             break ; 
            case "Pom Poko":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/pom-poko.6ln0";}
             break ;   
            case "Whisper of the Heart":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/whisper-of-the-heart.7jo1/ep-full";}
                break; 
            case "Princess Mononoke":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/princess-mononoke.yk8x/ep-full";}
                    break;
            case "My Neighbors the Yamadas":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/my-neighbors-the-yamadas.9oqm";}
                                       break ;  
              case "Spirited Away":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/spirited-away.w48o";}   
             break ; 
             case "The Cat Returns":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/the-cat-returns.kw04";}   
             break ; 
             case "Howl's Moving Castle":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/howls-moving-castle.ll26";}   
             break ;
             case "Tales from Earthsea":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/tales-from-earthsea.m288";}   
             break ;                              
             case "Ponyo":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/ponyo.n30m";}   
             break ;                              
             case "Arrietty":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/the-secret-world-of-arrietty.oj05";}   
             break ;                              
             case "From Up on Poppy Hill":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/from-up-on-poppy-hill.pr1q";}   
             break ;                              
             case "The Wind Rises":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/the-wind-rises.no4l";}   
             break ;                              
             case "The Tale of the Princess Kaguya":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/the-tale-of-the-princess-kaguya.qx3j";}   
             break ; 
             case "When Marnie Was There":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/when-marnie-was-there.vv0l";}   
             break ; 
             case "The Red Turtle":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/red-garden.qn63";}   
             break ; 
             case "Earwig and the Witch":
              img.onclick = ()=>{
              window.location.href = "https://9anime.id/watch/earwig-and-the-witch.8oqq";}   
             break ;                                                            
        default:
          break;
      }
      
      card.appendChild(img);



      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()

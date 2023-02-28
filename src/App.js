/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import Img from "./Img/eu1.png"
import Img2 from "./Img/logo.png"
import Img3 from "./Img/shopReact.png"
import Img4 from "./Img/food.png"
import Img5 from "./Img/todo.png"
import Img6 from "./Img/calculadora1.png"
import Img7 from "./Img/imc1.png"

import { ExternalLink } from 'react-external-link';




import {SiInkscape} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'
import {SiGimp} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {TbBrandJavascript} from 'react-icons/tb'
import {DiReact} from 'react-icons/di' 
import {SiTypescript} from 'react-icons/si' 
import {AiFillInstagram} from 'react-icons/ai' 
import {AiFillLinkedin} from 'react-icons/ai' 
import {AiOutlineWhatsApp} from 'react-icons/ai' 
import {BsFillMoonFill} from 'react-icons/bs' 
import {BsFillSunFill} from 'react-icons/bs' 

import { useState } from 'react';

 


 

 
 function App() {

  const [icone ,setIcone] = useState(true )
  
  const changeIcon = ()=>{
    setIcone( !icone )
    if(icone===true){
      document.body.style.background = '#0D0225'
      document.getElementById('li').style.color= '#f7f6f6'
      document.getElementById('footer').style.color = "#f7f6f6"

    } else{
      document.body.style.background = ' #f7f6f6'
      document.getElementById('li').style.color= '#000000'
      document.getElementById('footer').style.color = "#000000"

    }
  
  }

  return (
    <div className="App">
       

      <nav>
      <img className="cardclientes" src={Img2} alt=""/>
        <tr id='li'>
          <li> Home </li>         
          <li>Tecnologias </li>         
          <li>Projetos</li>      
          <li>Contato</li>             
        </tr>

              
      </nav>  
       
       <div className='moon'> 
       <button  onClick={changeIcon } > { icone ? <BsFillMoonFill color='black' />   : <BsFillSunFill color='#d8ca02' /> } </button>
      
       </div>
       

      

        <section className="img">         
        <img className="cardclientes-logo" src={Img} alt=""/>
        </section>


          <section className="jaburu">
            <h2>Desenvolvedor Front-end</h2>
            <h3> Olá, sou o Mateus Rodrigues. Prazer em conhecê-lo.</h3>
          </section>
            

        <main>
                     

        <div className="text">             
                <h2> 
                    Programador, sempre disposto a novos
                    desafios. Adepto do desenvolvimento web
                    e acima de tudo resiliente
                </h2>
            </div> 

           <div className="cards" id='tec'>     

           

              <div className="card">    
                 <h3>Designer</h3>
                 
                 <h3> Ferramentas: </h3>
                  <p> Figma </p>  
                  <p> Inkscape </p>  
                  <p> Gimp </p> 
                  <div className='icons'>
                  <SiInkscape />
                  <FiFigma />
                  <SiGimp />
                  </div>                 
              </div>
              <div className="card">  
                <h3>Desenvolvedor  front-end</h3>   
                <h3> Tecnologias: </h3> 
                <p> HTML </p>  
                <p> CSS </p>  
                <p> Javascript </p>  
                <p> React js </p>  
                <div className='icons'>
                 <AiFillHtml5 />
                  <DiCss3 />
                  <TbBrandJavascript />
                  <DiReact />
                </div>
              </div>
              <div className="card"> 
                 <h3> Competências: </h3>   
                 <p> Criativo</p> 
                 <p>  Capacidade de trabalhar em equipe </p>   
                 <p> Autoconfiança </p> 
                 <p>Proatividade </p>
                 <p>Boa comunicação </p>

                 <div className='icons'>
                  

                 </div>

                  
              </div>
               
           </div>

           <section >
            <h3> Projetos Desenvolvidos</h3>
           
           <div className='container-cards'>
            <div className="card">    
                 <h3>todo list</h3>
                 <ExternalLink href='https://to-do-react-two-eta.vercel.app/'> 
                 <img src={Img5}></img> 
                 </ExternalLink>
                 <div className='icons'>
                 <DiReact />
                 </div>
                 
                                  
              </div>
              <div className="card">  
                <h3>Shop react </h3>  
                <ExternalLink href='https://shop-react-peach.vercel.app/'>
                <img src={Img3}></img> 
                </ExternalLink>
                <div className='icons'>
                 <DiReact />
                 </div>
                
              </div>
              <div className="card"> 
                 <h3> food e-commerce </h3>  
                 <ExternalLink href='https://food-ecommerce-seven.vercel.app/'>
                 <img src={Img4}></img>  
                 </ExternalLink>   
                 <div className='icons'>
                 <DiReact />
                 <SiTypescript />
                 </div>          

                  
               </div>

               <div className="card"> 
                 <h3> calculadora</h3> 
                 <ExternalLink href='https://grand-longma-63d22c.netlify.app/'>
                 <img src={Img6}></img>    
                 </ExternalLink>
                 <div className='icons'>
                 <AiFillHtml5 />
                  <DiCss3 />
                  <TbBrandJavascript />
                  </div>
                                 

               </div>

               <div className="card"> 
                 <h3> Imc</h3>   
                 <ExternalLink href='https://clinquant-blancmange-ab9055.netlify.app/'>
                 <img src={Img7}></img>    
                 </ExternalLink>
                 <div className='icons'>
                 <AiFillHtml5 />
                  <DiCss3 />
                  <TbBrandJavascript />
                  </div>                                
            

               </div>
            </div>

            
            
           </section>

        </main>  


     <footer>
      <h2> Contato:</h2>
      <div className='icons2'>

     
      <ExternalLink href="https://www.instagram.com/marcosmate01/" className='remo'>
       <AiFillInstagram />
      </ExternalLink>  
      
       <h3>       
       <ExternalLink href="https://www.linkedin.com/in/mateus-rodrigues-55754217a/" className='remo'>
       <AiFillLinkedin />
      </ExternalLink>   
      </h3> 

       <h3>    
      <ExternalLink href="https://wa.me/5591989607101?text=ol%C3%A1+Mateus+Rodrigues" className='remo'>
      <AiOutlineWhatsApp />
      </ExternalLink>       
      </h3>
       
        
       

        
      </div>
          <div className='footer'>
            <p id='footer' > © Mateus Rodrigues, 2023</p>
            <img src={Img2}/>
          </div>
        </footer>
    

    </div>
  );
}

export default App;

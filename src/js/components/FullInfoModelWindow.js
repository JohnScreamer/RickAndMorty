// import {ROOT_CONTENT_CONTEINER} from "./constants.js";
import {ContentRender} from "./ContentRender.js"
import{ROOT_MODEL} from "./constants.js"
import{BODY} from "./constants.js"

class ModelWindow{
   addEvent(conteiner){
      conteiner.addEventListener("click",(e)=>{
         let card = e.target.closest('.list-person__card')
         if(card){
            
          this.filter(card.getAttribute('data-id'))
         }
         
      })
      
      
      
   }



   async filter(id){
      let data = await ContentRender.getData()
      
      data.forEach(element => {
         
         if(element.id == id){
            console.log(element);
            this.render(element)
         }
         
      });

      
   }

   
 async render({name,status,gender,location,species,image}){
      
      ROOT_MODEL.style.display="flex";
     let color = 'dead';

     status == 'Dead'?color:color='alive';

     let html =`<div class="model__wrapper">
     <span class="model__name" >${name}</span>
     <img  class="model__img rip" src="${image}">
     <p class="model__text">
     <span>Status:<span class="model__style model__status ${color}">${status}</span></span>
     <span>Gender:<span class="model__style model__gender">${gender}</span></span>
     <span>Race:<span class="model__style  model__species">${species}</span></span>
     <span>Location:<span class="model__style model__location">${location.name}</span></span>
     </p>
     </div>
     `


   let htmlConteiner= `<div class="model__conteiner">${html}</div>`      
     ROOT_MODEL.innerHTML = htmlConteiner
     BODY.style.overflow='hidden';
     this.closeWindow()
     
   }
   
   closeWindow(){
      document.addEventListener('click',(e)=>{
         // ROOT_MODEL.style.display="none";
         !e.target.closest(".model__wrapper")?ROOT_MODEL.style.display="none":undefined
         BODY.style.overflow='visible';
      })


   }

  
}
let model = new ModelWindow()
export {model}

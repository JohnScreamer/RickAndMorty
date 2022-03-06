// import {data} from ""
import {RICK_MORTY_URL} from  "./constants.js";
import {data} from "./Getdata.js";
import {ROOT_CONTENT_CONTEINER} from "./constants.js";
import {model} from "./FullInfoModelWindow.js"




class Content{
  async getData(){
     let dataArr = await data.get(RICK_MORTY_URL);
     
     return dataArr;
     
   }

 async render(){
    let data =await this.getData();
    
    let html = '';
    
    
    data.forEach(({name,image,id}) => {
      //  console.log(name,image);
       html+= `<li class="list-person__card" data-id="${id}">
       <p class="card__name">${name}</p>
       <img class="card__img" src="${image}">
       
         
       </li>`
       
    });
    let htmlList = `<ul class="list-person">${html}</ul>`;
    ROOT_CONTENT_CONTEINER.innerHTML = htmlList;
    model.addEvent(ROOT_CONTENT_CONTEINER)
 }


}
let ContentRender= new Content();
export {ContentRender}
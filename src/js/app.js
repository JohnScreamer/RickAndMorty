// import {data}  from "./components/Getdata.js";
// import {RICK_MORTY_URL} from "../js/components/constants.js"

// (async function(){
//   let rezolt= await data.get(RICK_MORTY_URL);
//  console.log(rezolt);
// }
// )()

import {ContentRender} from "../js/components/ContentRender.js"

(async function(){
  await ContentRender.render()

})()

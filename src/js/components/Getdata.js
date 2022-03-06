


class DataRequest{
  async get(url){
     let respons = await fetch(url);
     let data = await respons.json();
     return data.results;
      


   }
}
let data = new DataRequest()
export {data};
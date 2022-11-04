import { fetchWrapper } from "helpers";


const baseUrl = `http://localhost:9080`;

export const catService={getAllCats,addCat}



export function getAllCats() {
      return fetchWrapper.get(`${baseUrl}/api/categories/`)
} 


export function addCat(newcat){

      return fetchWrapper.post(`${baseUrl}/categories/`,newcat)
}
import axios from "axios"



const getCategoryDetails = async (id)=> {

    try{
 return axios.get(`https://edeaf-api-staging.azurewebsites.net/v1/admin/categories/${id}`,{
    headers : {     'Accept' : '*/*',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`}
         },
         )
       .then(function (response) {
   
        return response.data.data
       }).catch((e)=>
          e.message
       )
     }catch (e){
    return e;
     }
         
    
  }
export default getCategoryDetails
import axios from "axios"



const login = async (credentials)=> {
   
    try{
  
     const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('client_id', 'web-dashboard');
  params.append('client_secret', 'SuperSecretPassword');
  params.append('scope', 'openid profile role email offline_access adminApi mobileApi');
  params.append('username', credentials.email);
  params.append('password', credentials.password);
 return axios.post('https://edeaf-api-staging.azurewebsites.net/connect/token',params,{
             'Content-Type' : 'application/x-www-form-urlencoded',
             'Accept' : '*/*'
         })
       .then(function (response) {
        localStorage.setItem('access_token',response.data['access_token'])
         console.log(response.data);
         console.log(axios.defaults)
        return true
       }).catch((e)=>
          e.message
       )
     }catch (e){
    return e;
     }
         
    
  }
export default login
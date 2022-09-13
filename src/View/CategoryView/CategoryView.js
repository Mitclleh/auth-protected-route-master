import {  useParams,Link } from "react-router-dom";
import { useState } from "react";
import getCategoryDetails from "../../api/category_details";

const CategoryDetails = () => {
  const  {id}  = useParams();
  const [details,setDetails] = useState(); 
  useState(()=> {
    getCategoryDetails(id).then((c)=> setDetails(c))
    })
  
  return (
    <div>
      { (details === null) && <div>Loading...</div> }
   {
details  &&<h2>{details.name} Details :</h2>
   }
      
    
      
       {details && details.words.map(word => (
          <div className="blog-preview" key={word.id} >
        
            <h2>{ word.name}</h2>
            <p>{'Published : ' + word.published}</p>

       
      
          </div>
        ))}  
     
    
    </div>
  );
}
 
export default CategoryDetails;
import {  useState } from "react";
import getCategories from "../api/categories";
import {Link} from "react-router-dom";
const CategoryList = () => {

const [categories,setCategories] = useState([]); 


useState(()=> {
getCategories().then((c)=> setCategories(c))
})
    return (
        <div className="blog-list">
        {categories.map(category => (
          <div className="blog-preview" key={category.id} >
            <Link to={`/details/${category.id}`}>
              <h2>{ category.name }</h2>
           <p>{category.id}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default CategoryList;
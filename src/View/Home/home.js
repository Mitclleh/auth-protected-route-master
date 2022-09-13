import {useHistory } from "react-router-dom";
import "../../App.css";
import CategoryList from "../../components/categoryList";

function Home() {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push('/home')
  };
  return (
    <div className="App">
      <h2>Welcome to the Homepage / Landing page</h2>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
   <CategoryList />
    </div>
  );
}

export default Home;
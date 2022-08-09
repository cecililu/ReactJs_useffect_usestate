import './App.css';
import {useEffect,useState} from 'react'
 const App = (props) => {
    const [state, setState] = useState([]);
     async function renderData() {
        try {
          const response = await fetch("https://fakestoreapi.com/products/");
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          const data = await response.json();
          console.log(data);
          setState(data);}
            catch (error) {
              console.log(error)
        }
      }
      useEffect(() => {
        renderData();
      }, []);
      const availableItems = state.map((item) => (<li key={item.id}>{item.title}</li>))
        return (
          <>
            {availableItems}
          </>
        );
};

export default App;
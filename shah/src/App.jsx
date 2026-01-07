import { useState } from 'react';
import './App.css';
import First from './Component/first';
import Header from './Component/Header';
import Footer from './Component/footer'
function App() {
  const [name, setName] = useState("sha");

  const fun = (para) => {
    setName(para);
  };

  function product(){
    return product;
  }

  return (
    <>
    <Header names="ali" age="12"/>
      <h1>Hello React {name}</h1>
      <h1>Hello React {product}</h1>


      <First />

      <button onClick={()=>fun("jee")}>Click Me</button>
      <button onClick={product}>product</button>

      <Footer/>
    

      
    </>
  );
}

export default App;

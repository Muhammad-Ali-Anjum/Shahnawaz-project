import { useState } from "react";
import "./App.css";
import First from "./Component/First";
import Header from "./Component/Header";
import Footer from "./Component/footer";
import Khp from "./Component/Khp";
import Home from "./page/Home"

function App() {
  const [name, setName] = useState("sha");

  // Update name
  const updateName = (value) => {
    setName(value);
  };

  // Product function (example)
  const product = () => {
    return "Laptop";
  };

  return (
    <>
   
      {/* Modern Header with props */}
      {/* <Header names="Ali" age={12} />
       <Khp/> */}

<Home/>
      {/* <main className="app-container brand">
        <h1>Hello React {name}</h1>
        <h2>Product: {product()}</h2> */}

        {/* <First />

        <button onClick={() => updateName("jee")}>
          Change Name
        </button>

        <button onClick={product}>
          Show Product
        </button>
      </main> */}

      {/* <Footer /> */}
    
    </>
  );
}

export default App;



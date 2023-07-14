import React from "react";
import AppNavBar from "./Components/Navbar";
import Image from "./Components/Image";
import Divder from "./Components/Divder";
import MediaCard from "./Components/Body";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>
     <div>
      <AppNavBar/>
      </div> 
     <div>
      <Image></Image>
      </div>
      <div>
        <Divder/>
      </div>
        <MediaCard/>
        <Footer/>
        

    </div>
  );
}

export default App;

import React from 'react';
import {Wishlist} from './Components/Wishlist';
import {Vegetables} from "./Components/Vegetable"
function App() {
  return (
    <>
      <Wishlist />
      <Vegetables tomatoes={10} potatoes={8} carrots={5} onions={7}/>
    </>
  );
}

export default App;
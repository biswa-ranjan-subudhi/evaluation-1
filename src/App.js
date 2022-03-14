import React from 'react';
import Vegetables from './Components/vegetable.js';
import Wish from './Components/Wishlist.js';


function App() {
  return <Vegetables tomatoes={10} carrots={5} onions={7} potatoes={8} />
}
function wishlist(){
  return <Wish/>
}
export { App ,wishlist};
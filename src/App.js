import React from 'react';
import Vegetables from './Components/vegetable.js';
import {Wishlist} from './Components/Wishlist.js'

function App() {
  return (<Vegetables tomatoes={10} carrots={5} onions={7} potatoes={8} />,
  <Wishlist/>
  )
}
export { App};
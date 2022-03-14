import React from 'react';
import {Vegetable} from './Components/vegetable.js';
import {Wishlist} from './Components/Wishlist.js'

function App() {
  return (<Vegetable tomatoes={10} carrots={5} onions={7} potatoes={8} />,
  <Wishlist/>
  )
}
export { App };

import './App.css'
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import AddList from './AddList';
function App() {

  const[items, setItems] = useState([{
    id : 1,
    checked : true,
    Name : "Arun"
},
{
    id : 2,
    checked : true,
    Name : "kamal"
},
{
    id : 3,
    checked : true,
    Name : "vimal"
},
]);
const handleCheck = (id)=> {
const listItem = items.map ((item) => item.id === id ? {...item, checked : !item.checked} : item)
setItems(listItem)
console.log(listItem)
}

const handleDelete = (id) => {
const listDelete = items.filter ((item) => item.id !== id)
setItems(listDelete)
}
  return (
    <div> 
         { <Header 
            item = {items}
            handleCheck = {handleCheck ()}
            handleDelete = {handleDelete ()}
         /> }
         {/* <Footer 
           data = {items.length}
         /> */}
         <AddList />
    </div>
   
  );
}

export default App;

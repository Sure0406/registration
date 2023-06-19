import React from 'react'


const Header = ({item, handleCheck, handleDelete}) => {

   
return (
   
    <main>
         <h1>To do list</h1>
        {(item.length) ? ( 
           <ul>
             {item.map((item) => (
                <li>
                    <input type = "checkbox" onChange={() => handleCheck(item.id)} checked = {item.checked}></input>
                    <label style = {(item.checked) ? {textDecoration : 'line-through'} : null} onDoubleClick={() => handleCheck(item.id)}>{item.Name}</label>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </li>
              ))}
           </ul>) : <h2>your list is empty</h2>
        }
       
    </main>
)
   
}

export default Header;
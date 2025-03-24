// src/components/InventoryList.jsx
import React from 'react';
import InventoryItem from './InventoryItem';
const InventoryData =[
    {id:1, name:"Smartphone",quantity:5,category:"Electronics"},
    {id:2,name:"Pen",quantity:20,category:"Stationary"},
    {id:3,name:"Office Chair",quantity:25,category:"Furniture"}
];

const InventoryList=()=>{
    return(
        <div>
            <h2>Inventory List</h2>
            {InventoryData.map(item =>
                <InventoryItem key={item.id} item={item}/>
            )};
        </div>
    );
};
export default InventoryList;

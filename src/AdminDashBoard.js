import React from 'react';
import Sidebar from './Sidebar';
import { Card } from 'react-bootstrap';
const AdminDashBoard = () => {

const data=[{name:"totaluser",num:"12"},
{name:"totaluser",num:"12"}
]

const cards=data.map(item=>{


    return(
        <Card>
        <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Subtitle>{item.num}</Card.Subtitle>
        </Card.Body>
                </Card>

    )
})

    return (
        <div className=" flex flex-row items-start text-center">

            <div>

            <Sidebar/>
            </div>
            
                
            <div className=' mt-20  text-center py-1 px-14  lg:ml-48'>

                <h1 className='text-slate-400 font-Nerko font-semibold '>welcome to admin Dashboard</h1>

                <main className='grid md:grid-cols-2  py-3  gap-x-3 gap-y-3  '>
                 
               
            {cards}
                </main>
            </div>


          
        </div>
    );
}

export default AdminDashBoard;

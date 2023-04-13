import React, { useState } from 'react'
import "./ContactList.css"
import AddForm from './AddForm'

function ContactList() {
    const[add,setAdd] = useState(false)

    function handleAdd(){
        console.log("Add Contact")
        setAdd(!add)
    }
    return (
        <>
            <div>
                <h1 id='mainhead'>Contact Manager</h1>
                <hr />
                <div className='flex'>
                    <h2 id='contactlist'>Contact List</h2>
                    <button onClick={handleAdd} id='addbtn' type="button" className="btn btn-primary btn-sm">Add Contact</button>

                </div>
            </div>
            {add?<AddForm/>:null}
        </>
    )
}

export default ContactList
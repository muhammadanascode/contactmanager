import React, { useEffect, useState } from 'react'
import "./ContactList.css"
import AddForm from './AddForm'
import List from './List'
import Reducer from './Reducer'
import { useReducer } from 'react';

function ContactList() {
    const [add, setAdd] = useState(false)
    const [value, setValue] = useState("")
    const [items, dispatch] = useReducer(Reducer, [])
    const [filter, setFilter] = useState(items)

    function handleAdd() {
        console.log("Add Contact")
        setAdd(true)
    }

    function handleChange(e) {
        setValue(e.target.value)
        if (e.target.value.length == 0) {
            setFilter(items)
        }
        else {
            const newItems = items.filter((ele) => {
                return (
                    ele.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                )
            })
            setFilter(newItems)
        }
    }

    useEffect(() => {
        setFilter(items)
    }, [items])

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
            {add ? <AddForm add={setAdd} dispatch={dispatch} /> : null}

            <div className='searchdiv'>
                <input onChange={handleChange} value={value} id='search' placeholder='Search Contacts' type="search" />
            </div>

            <List filter={filter} />
        </>
    )
}

export default ContactList
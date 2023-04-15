import React from 'react'
import "./ContactList.css"

function List({ filter , dispatch}) {

    function handleDelete(e){
        dispatch({type:"DELETE" , payload:e})
    }

    return (
        <>

            {filter.length !== 0 ?
                filter.map((e) => {
                    return <div className='contact' key={e.id}>
                        <div className='flex1'>
                            <i className="fa-solid fa-circle-user fa-2xl" id='iconperson'></i>
                            <p id='contactName'>{e.name}</p>
                            <i className="fa-solid fa-trash-can" id= "icondelete"  onClick={()=>handleDelete(e)}></i>
                        </div>
                        <p id='contactNumber'>Number: {e.number}</p>
                    </div>
                })
                : null}
        </>
    )
}

export default List
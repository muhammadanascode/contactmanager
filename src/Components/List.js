import React from 'react'
import "./ContactList.css"

function List({ filter}) {

    return (
        <>

            {filter.length !== 0 ?
                filter.map((e) => {
                    return <div className='contact' key={e.id}>
                        <div className='flex1'>
                            <i className="fa-solid fa-circle-user fa-2xl" id='icon'></i>
                            <p id='contactName'>{e.name}</p>
                        </div>
                        <p id='contactNumber'>Number: {e.number}</p>
                    </div>
                })
                : null}
        </>
    )
}

export default List
import React, { useState } from 'react'
import "./ContactList.css"

function AddForm({ add, dispatch }) {

  const [name, setName] = useState("")
  const [num, setNum] = useState("")
  const [error, setError] = useState(false)

  function handleName(e) {
    setName(e.target.value)
  }
  function handleNumber(e) {
    setNum(e.target.value)
  }

  function handleSubmit(e) {

    if (num.length == 11 && name.length !== 0) {
      dispatch({ type: "ADD", payload: [name, num] })
      e.preventDefault()
      setName("")
      setNum("")
      setError(false)
      add(false)
    }

    else {
      e.preventDefault()
      setError(true)
    }

  }

  return (
    <>
      <form>

        <div className="d-flex justify-content-center">
          <div className="mb-3 ms-4 mt-5">
            <label htmlFor="name" className="form-label">Name</label>
            <input placeholder='receiptant name' onChange={handleName} value={name} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Name of recepitant" />

          </div>
          <div className="mb-3 ms-4 mt-5">
            <label htmlFor="number" className="form-label">Number</label>
            <input placeholder='receiptant number' onChange={handleNumber} value={num} type="number" className="form-control" id="exampleInputPassword1" />
          </div>

        </div>
        {error ? <div id='error'>*Please fill the above field correctly</div> : null}

        <div className='btndiv'> <button onClick={handleSubmit}  type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>

    </>
  )
}

export default AddForm
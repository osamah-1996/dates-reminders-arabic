import React from 'react'

const DateAction = ({deleteData, showData}) => {
  return (
    <div>
      <div className='row justify-content-center my-2'>
            <div className='d-flex justify-content-between'>
              <button className='btn-style col-md-2 p-2' onClick={deleteData}>مسح الكل</button>
              <button className='btn-style col-md-2 mx-2 p-2' onClick={showData}>عرض</button>
            </div>

          </div>
    </div>
  )
}

export default DateAction
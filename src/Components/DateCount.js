import React from 'react'

const DateCount = ({person}) => {
  return (
    <div>
      <div className='row justify-content-center'>
            <div className='col sm-8 fs-4 fw-bold'>
            لديك {person.length} موعداً اليوم
            </div>
          </div>
    </div>
  )
}

export default DateCount
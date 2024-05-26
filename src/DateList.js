import React from 'react'

const DateList = ({ person }) => {
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='rectangle my-2'>
          {
            person.length ? (
              person.map((item, index) => {
                return (
                  <div className='d-flex p-2 border-bottom mx-2' key={index}>
                    <img src={item.image} alt='opps something went wrong' className='image-avatar' />
                    <div className='px-3'>
                      <p className='d-inline fs-5'>{item.name}</p>
                      <p className='fs-6'>{item.date}</p>
                    </div>
                  </div>
                )
              })
            ) : <h2 className='text-center p-5'>لايوجد لديك مواعيد اليوم</h2>
          }
        </div>
      </div>
    </div>
  )
}

export default DateList

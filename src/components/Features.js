import React from 'react'
import Card from './Card'
import Fdata from './Fdata'

const Features = () => {
  return (
    <div className='container'>
      <div className="row">
        {
          Fdata.map((val, ind) => {
            return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
          })
        }
      </div>
    </div>
  )
}

export default Features

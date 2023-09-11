import React from 'react'
import contact from './contact.jpg'
const Contact = () => {
  return (
    <>
      <div className="container about contact">
        <div className="row align-items-center">
          <div className="col-6">
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-lg-12">
                <input type="text" className="form-control" id="validationCustom01" placeholder='Enter Your Name' required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-lg-12">
                <input type="email" className="form-control" id="validationCustom02" placeholder='Enter Your Email' required />
                <div className="valid-feedback">
                  Looks good!
                </div>
              </div>
              <div className="col-lg-12">
                <div class="mb-3">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter Message'></textarea>
                </div>
              </div>
              <div className="col-12">
                <button className="btn px-4 pb-2" type="submit">Submit form</button>
              </div>
            </form>

          </div>
          <div className="col-6">
            <img src={contact} alt="" className='img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact


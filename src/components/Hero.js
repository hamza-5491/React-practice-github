import React from 'react'
// import IMG from './IMG.jpg';

const Hero = () => {
    return (
        <>
            <section className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-7 mt-5">
                                    <h1>Hey There! <br />this is<span> Ameer Hamza</span><br /><span>Senior Front End Developer.</span></h1>
                                    <button className="btn mt-4 px-4 pb-2">Order Now</button>
                                </div>
                                <div className="col-lg-4">
                                    <div className="image">
                                        {/* <img src={IMG} alt="" className="img-fluid" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero

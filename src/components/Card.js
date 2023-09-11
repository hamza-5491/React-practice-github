import React from 'react'

const Card = (props) => {
    return (
        
                <div className="col-lg-4 col-md-6 col-12 my-4 text-center">
                    <div className="card">
                        <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <a href="#" className="btn">Demo</a>
                        </div>
                    </div>
                </div>
            
    )
}

export default Card
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Boot = () => {
    return (
        <React.Fragment>
        <h1 className='text-center text-danger text-capitalize my-5' >Web Page</h1>
            <div className="container">
                <div className="row">
                    <div className="col"><div class="card" >
  <img src="https://picsum.photos/seed/picsum/200/300" class="card-img-top" alt="" height="200px" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>Column</div>
                    <div className="col"><div class="card" >
  <img src="https://picsum.photos/200/300?grayscale" className="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>Column</div>
                    <div className="col"><div class="card" >
  <img src="https://picsum.photos/200/300/?blur" class="card-img-top" alt="..." height="200px"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>Column</div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Boot;
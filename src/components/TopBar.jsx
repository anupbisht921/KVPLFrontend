import React from 'react'

function TopBar() {
  return (
    <>
    {/* Topbar Start */}
  <div className="container-fluid d-none d-lg-block">
    <div className="row align-items-center py-4 px-xl-5">
      <div className="col-lg-3">
        <a href="#" className="text-decoration-none">
          <h1 className="m-0">
            {/* <span className="text-primary">E</span> */}
            KVPL</h1>
        </a>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
          <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
            <small>123 Street, New York, USA</small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
          <i className="fa fa-2x fa-envelope text-primary mr-3" />
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
            <small>info@example.com</small>
          </div>
        </div>
      </div>
      <div className="col-lg-3 text-right">
        <div className="d-inline-flex align-items-center">
          <i className="fa fa-2x fa-phone text-primary mr-3" />
          <div className="text-left">
            <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
            <small>+012 345 6789</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
    </>
  )
}

export default TopBar
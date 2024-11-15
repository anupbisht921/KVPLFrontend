import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    {/* Navbar Start */}
  <div className="container-fluid">
    <div className="row border-top px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{height: 67, padding: '0 30px'}}>
          <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2" />Subjects</h5>
          <i className="fa fa-angle-down text-primary" />
        </a>
        <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: 9}}>
          <div className="navbar-nav w-100">
            <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">Web Design <i className="fa fa-angle-down float-right mt-1" /></a>
              <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                <a href="#" className="dropdown-item">HTML</a>
                <a href="#" className="dropdown-item">CSS</a>
                <a href="#" className="dropdown-item">jQuery</a>
              </div>
            </div>
            <a href="#" className="nav-item nav-link">Apps Design</a>
            <a href="#" className="nav-item nav-link">Marketing</a>
            <a href="#" className="nav-item nav-link">Research</a>
            <a href="#" className="nav-item nav-link">SEO</a>
          </div>
        </nav>
      </div>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href="#" className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav py-0">
              
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="course" className="nav-item nav-link">Courses</Link>
              {/* <Link to="teachers" className="nav-item nav-link">Teachers</Link> */}
              {/* <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/blog" className="dropdown-item">Blog List</Link>
                  <Link to="single.html" className="dropdown-item">Blog Detail</Link>
                </div>
              </div> */}
              <Link to="contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" to="">Join Now</Link>
          </div>
        </nav>
      </div>
    </div>
  </div>
  {/* Navbar End */}
    </>
  )
}

export default Header
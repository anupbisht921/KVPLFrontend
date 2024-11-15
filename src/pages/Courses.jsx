import React from 'react'
import Subject from '../components/Subject'
function Courses() {
  return (
    <>
    {/* <TopBar /> */}
    <div>
  {/* Header Start */}
  <div className="container-fluid page-header" style={{marginBottom: 90}}>
    <div className="container">
      <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
        <h3 className="display-4 text-white text-uppercase">Courses</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href="#">Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Courses</p>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Category Start */}
  {/* <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Subjects</h5>
        <h1>Explore Top Subjects</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-1.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">Web Design</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-2.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">Development</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-3.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">Game Design</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-4.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">Apps Design</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-5.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">Marketing</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-6.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">Research</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-7.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">Content Writing</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="cat-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/cat-8.jpg" alt />
            <a className="cat-overlay text-white text-decoration-none" href="#">
              <h4 className="text-white font-weight-medium">SEO</h4>
              <span>100 Courses</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <Subject />
  {/* Category Start */}
  {/* Courses Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Courses</h5>
        <h1>Our Popular Courses</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="assets/frontend/img/course-1.jpg" alt="Cours Image" />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href="#">Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="assets/frontend/img/course-2.jpg" alt="Cours Image" />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href="#">Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="assets/frontend/img/course-3.jpg" alt="Cours Image" />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href="#">Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="assets/frontend/img/course-4.jpg" alt="Cours Image" />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href="#">Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="assets/frontend/img/course-5.jpg" alt="Cours Image" />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href="#">Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid" src="assets/frontend/img/course-6.jpg" alt="Cours Image" />
            <div className="bg-secondary p-4">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0"><i className="fa fa-users text-primary mr-2" />25 Students</small>
                <small className="m-0"><i className="far fa-clock text-primary mr-2" />01h 30m</small>
              </div>
              <a className="h5" href="#">Web design &amp; development courses for beginner</a>
              <div className="border-top mt-4 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                  <h5 className="m-0">$99</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Courses End */}
</div>

    </>
  )
}

export default Courses
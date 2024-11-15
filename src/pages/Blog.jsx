import React from 'react'
import TopBar from '../components/TopBar'
import Header from '../components/Header'

function Blog() {
  return (
    <>
    {/* <TopBar /> */}
    {/* <Header /> */}
    <div>
  {/* Header Start */}
  <div className="container-fluid page-header" style={{marginBottom: 90}}>
    <div className="container">
      <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
        <h3 className="display-4 text-white text-uppercase">Blog</h3>
        <div className="d-inline-flex text-white">
          <p className="m-0 text-uppercase"><a className="text-white" href>Home</a></p>
          <i className="fa fa-angle-double-right pt-1 px-3" />
          <p className="m-0 text-uppercase">Blog</p>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
  {/* Blog Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="row pb-3">
            <div className="col-lg-6 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="assets/frontend/img/blog-1.jpg" alt />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="assets/frontend/img/blog-2.jpg" alt />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="assets/frontend/img/blog-3.jpg" alt />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="assets/frontend/img/blog-1.jpg" alt />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="assets/frontend/img/blog-2.jpg" alt />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="blog-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="assets/frontend/img/blog-3.jpg" alt />
                <a className="blog-overlay text-decoration-none" href>
                  <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
                  <p className="text-primary m-0">Jan 01, 2050</p>
                </a>
              </div>
            </div>
            <div className="col-12">
              <nav aria-label="Page navigation">
                <ul className="pagination pagination-lg justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-5 mt-lg-0">
          {/* Author Bio */}
          <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
            <img src="assets/frontend/img/user.jpg" className="img-fluid rounded-circle mx-auto mb-3" style={{width: 100}} />
            <h3 className="text-primary mb-3">John Doe</h3>
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Tag Cloud</h3>
            <p className="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est  ipsum erat kasd amet elitr</p>
          </div>
          {/* Search Form */}
          <div className="mb-5">
            <form action>
              <div className="input-group">
                <input type="text" className="form-control form-control-lg" placeholder="Keyword" />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary"><i className="fa fa-search" /></span>
                </div>
              </div>
            </form>
          </div>
          {/* Category List */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Categories</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <a href className="text-decoration-none h6 m-0">Web Design</a>
                <span className="badge badge-primary badge-pill">150</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <a href className="text-decoration-none h6 m-0">Web Development</a>
                <span className="badge badge-primary badge-pill">131</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <a href className="text-decoration-none h6 m-0">Online Marketing</a>
                <span className="badge badge-primary badge-pill">78</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <a href className="text-decoration-none h6 m-0">Keyword Research</a>
                <span className="badge badge-primary badge-pill">56</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                <a href className="text-decoration-none h6 m-0">Email Marketing</a>
                <span className="badge badge-primary badge-pill">98</span>
              </li>
            </ul>
          </div>
          {/* Recent Post */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Recent Post</h3>
            <a className="d-flex align-items-center text-decoration-none mb-3" href>
              <img className="img-fluid rounded" src="assets/frontend/img/blog-80x80.jpg" alt />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
            <a className="d-flex align-items-center text-decoration-none mb-3" href>
              <img className="img-fluid rounded" src="assets/frontend/img/blog-80x80.jpg" alt />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
            <a className="d-flex align-items-center text-decoration-none mb-3" href>
              <img className="img-fluid rounded" src="assets/frontend/img/blog-80x80.jpg" alt />
              <div className="pl-3">
                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                <small>Jan 01, 2050</small>
              </div>
            </a>
          </div>
          {/* Tag Cloud */}
          <div className="mb-5">
            <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Tag Cloud</h3>
            <div className="d-flex flex-wrap m-n1">
              <a href className="btn btn-outline-primary m-1">Design</a>
              <a href className="btn btn-outline-primary m-1">Development</a>
              <a href className="btn btn-outline-primary m-1">Marketing</a>
              <a href className="btn btn-outline-primary m-1">SEO</a>
              <a href className="btn btn-outline-primary m-1">Writing</a>
              <a href className="btn btn-outline-primary m-1">Consulting</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
</div>

    </>
  )
}

export default Blog
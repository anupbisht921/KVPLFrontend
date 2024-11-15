import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import Subject from '../components/Subject'
import CoursesComponent from '../components/Courses'
import Registeration from '../components/Registeration'
import EnquiryModal from './EnquiryModal'


const Home = () => {
// function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Open the modal on the first render
    setShowModal(true);
}, []);

const handleClose = () => setShowModal(false);
  return (
    <>
  {/* <TopBar /> */}
    <div>
  {/* Carousel Start */}
  <div className="container-fluid p-0 pb-5 mb-5">
    <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#header-carousel" data-slide-to={0} className="active" />
        <li data-target="#header-carousel" data-slide-to={1} />
        <li data-target="#header-carousel" data-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{minHeight: 300}}>
          <img className="position-relative w-100" src="assets/frontend/img/carousel-1.jpg" style={{minHeight: 300, objectFit: 'cover'}} />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="p-5" style={{width: '100%', maxWidth: 900}}>
              <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
              <h1 className="display-3 text-white mb-md-4">Best Education From Your Home</h1>
              <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{minHeight: 300}}>
          <img className="position-relative w-100" src="assets/frontend/img/carousel-2.jpg" style={{minHeight: 300, objectFit: 'cover'}} />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="p-5" style={{width: '100%', maxWidth: 900}}>
              <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
              <h1 className="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
              <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{minHeight: 300}}>
          <img className="position-relative w-100" src="assets/frontend/img/carousel-3.jpg" style={{minHeight: 300, objectFit: 'cover'}} />
          <div className="carousel-caption d-flex align-items-center justify-content-center">
            <div className="p-5" style={{width: '100%', maxWidth: 900}}>
              <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
              <h1 className="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
              <a href="#" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <EnquiryModal isOpen={showModal} onClose={handleClose} />
    {/* <EnquiryModal show={showModal} handleClose={handleClose} /> */}
  </div>
  {/* Carousel End */}
  {/* About Start */}
  <About />
  {/* About End */}
  {/* Category Start */}
  <Subject />
  {/* Category Start */}
  {/* Courses Start */}
  <CoursesComponent />
  {/* Courses End */}
  {/* Registration Start */}
  <Registeration />
  {/* Registration End */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Teachers</h5>
        <h1>Meet Our Teachers</h1>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src="assets/frontend/img/team-1.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
              <h5>Jhon Doe</h5>
              <p className="m-0">Web Designer</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src="assets/frontend/img/team-2.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
              <h5>Jhon Doe</h5>
              <p className="m-0">Web Designer</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src="assets/frontend/img/team-3.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
              <h5>Jhon Doe</h5>
              <p className="m-0">Web Designer</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 text-center team mb-4">
          <div className="team-item rounded overflow-hidden mb-2">
            <div className="team-img position-relative">
              <img className="img-fluid" src="assets/frontend/img/team-4.jpg" alt />
              <div className="team-social">
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f" /></a>
                <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            <div className="bg-secondary p-4">
              <h5>Jhon Doe</h5>
              <p className="m-0">Web Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Testimonial</h5>
        <h1>What Say Our Students</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="owl-carousel testimonial-carousel">
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
              <img className="img-fluid mx-auto mb-3" src="assets/frontend/img/testimonial-1.jpg" alt />
              <h5 className="m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
              <img className="img-fluid mx-auto mb-3" src="assets/frontend/img/testimonial-2.jpg" alt />
              <h5 className="m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-normal mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</h4>
              <img className="img-fluid mx-auto mb-3" src="assets/frontend/img/testimonial-3.jpg" alt />
              <h5 className="m-0">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Blog Start */}
  {/* <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: 5}}>Our Blog</h5>
        <h1>Latest From Our Blog</h1>
      </div>
      <div className="row pb-3">
        <div className="col-lg-4 mb-4">
          <div className="blog-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/blog-1.jpg" alt />
            <a className="blog-overlay text-decoration-none" href="#">
              <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
              <p className="text-primary m-0">Jan 01, 2050</p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="blog-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/blog-2.jpg" alt />
            <a className="blog-overlay text-decoration-none" href="#">
              <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
              <p className="text-primary m-0">Jan 01, 2050</p>
            </a>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="blog-item position-relative overflow-hidden rounded mb-2">
            <img className="img-fluid" src="assets/frontend/img/blog-3.jpg" alt />
            <a className="blog-overlay text-decoration-none" href="#">
              <h5 className="text-white mb-3">Lorem elitr magna stet eirmod labore amet labore clita at ut clita</h5>
              <p className="text-primary m-0">Jan 01, 2050</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Blog End */}
  
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</div>

    </>
  )
}

export default Home
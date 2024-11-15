import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import { Accordion } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

// function CourseDetail() {
const CourseDetail = () => {
    const { courseId } = useParams(); // Get the courseId from the URL
    const [course, setCourse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourseDetails = async () => {
          try {
            const res = await fetch(`http://localhost:8000/api/courses/${courseId}`);
            const result = await res.json();
            // setCourse(result.data);  // Assuming the API response has the `data` field
            console.log(result)
            if (result.status === false) {
                // If status is false, there is no data, so set error
                setCourse(null);  
                setError(result.message); // Use the message from the response
            } else if (result.data) {
                // If status is true, set the course data
                setCourse(result.data);  
                setError(null); // Clear any previous errors
            }
            console.log(result);
          } catch (error) {
            console.error("Error fetching course details:", error);
          }
        };
    
        fetchCourseDetails();
      }, [courseId]);  // Re-run the effect whenever courseId changes
    
    //   if (!course) {
    //     return <p>Loading course details...</p>;
    //   }

    // Format the created_at date
    const formatDate = (dateString) => {
        const date = new Date(dateString); // Create a Date object
        return date.toLocaleDateString('en-US', {
            weekday: 'long', // "Monday"
            year: 'numeric', // "2024"
            month: 'long', // "November"
            day: 'numeric', // "1"
        });
    };

    // Function to parse courseDesc and group the content by modules
    const parseCourseDesc = (courseDesc) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(courseDesc, 'text/html');
        const paragraphs = htmlDoc.querySelectorAll('p');
        const lists = htmlDoc.querySelectorAll('ul');
        
        let modules = [];
        let currentModule = null;

        paragraphs.forEach((p, index) => {
            if (p.querySelector('strong') && p.querySelector('strong').textContent.includes('Module')) {
                // This paragraph is a module header (e.g., "Module 1: Getting Started with Excel")
                if (currentModule) {
                    modules.push(currentModule);
                }
                currentModule = {
                    title: p.textContent,  // Store the module title
                    items: []
                };
            }
            if (currentModule && lists[index]) {
                // If there's a list right after the module header, add it as list items
                const listItems = lists[index].querySelectorAll('li');
                listItems.forEach((li) => {
                    currentModule.items.push(li.innerHTML);
                });
            }
        });

        if (currentModule) {
            modules.push(currentModule); // Push the last module
        }

        return modules;
    };

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-warning" role="alert">
                    {error}
                </div>
            </div>
        );
    }
  return (
    <>
     {/* Header Start */}
<div className="container-fluid page-header" style={{marginBottom: 90}}>
  <div className="container">
    <div className="d-flex flex-column justify-content-center" style={{minHeight: 300}}>
      <h3 className="display-4 text-white text-uppercase">Course Details</h3>
      <div className="d-inline-flex text-white">
        <p className="m-0 text-uppercase"><a className="text-white" href="#">Home</a></p>
        <i className="fa fa-angle-double-right pt-1 px-3" />
        <p className="m-0 text-uppercase">Course Details</p>
      </div>
    </div>
  </div>
</div>
{/* Header End */}
{/* Detail Start */}
<div className="container-fluid py-5">
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-8">
        <div className="mb-5">
          <h6 className="text-primary mb-3">{course ? formatDate(course.created_at) : "Loading..."}</h6>
          <h1 className="mb-5">{course ? course.courseTitle : "Loading..."}</h1>
          {/* <img className="img-fluid rounded w-100 mb-4" src="img/carousel-1.jpg" alt="Image" /> */}
          {/* Course Description with Accordion */}
          <Accordion defaultActiveKey="0">
            {course && parseCourseDesc(course.courseDesc).map((module, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                    <Accordion.Header style={{ fontSize: '16px' }}>{module.title}</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {module.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
        </div>
        {/* Comment List */}
        
        {/* Comment Form */}
        {/* <div className="bg-secondary rounded p-5">
          <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Leave a comment</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" className="form-control border-0" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" className="form-control border-0" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input type="url" className="form-control border-0" id="website" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" cols={30} rows={5} className="form-control border-0" defaultValue={""} />
            </div>
            <div className="form-group mb-0">
              <input type="submit" defaultValue="Leave Comment" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold" />
            </div>
          </form>
        </div> */}
      </div>
      <div className="col-lg-4 mt-5 mt-lg-0">
        {/* Author Bio */}
        <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
        <form>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" className="form-control border-0" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Phone *</label>
              <input type="text" className="form-control border-0" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" cols={30} rows={5} className="form-control border-0" defaultValue={""} />
            </div>
            <div className="form-group mb-0">
              <input type="submit" defaultValue="Leave Comment" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold" />
            </div>
          </form>
        </div>
        
        {/* Category List */}
        {/* <div className="mb-5">
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
        </div> */}
        {/* Recent Post */}
        {/* <div className="mb-5">
          <h3 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Recent Post</h3>
          <a className="d-flex align-items-center text-decoration-none mb-3" href>
            <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt />
            <div className="pl-3">
              <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
              <small>Jan 01, 2050</small>
            </div>
          </a>
          <a className="d-flex align-items-center text-decoration-none mb-3" href>
            <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt />
            <div className="pl-3">
              <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
              <small>Jan 01, 2050</small>
            </div>
          </a>
          <a className="d-flex align-items-center text-decoration-none mb-3" href>
            <img className="img-fluid rounded" src="img/blog-80x80.jpg" alt />
            <div className="pl-3">
              <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
              <small>Jan 01, 2050</small>
            </div>
          </a>
        </div> */}
        
      </div>
    </div>
  </div>
</div>
{/* Detail End */}

    </>
  )
}

export default CourseDetail
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Subject = () => {

    const [courses, setCourses] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function
    
    const fetchCourses = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/getCourseLists');
            // const res = await fetch('http://localhost:8000/api/courses');
            const result = await res.json();
            
            // Assuming the response structure is { data: [...] }
            setCourses(result.data || []);  // Handle case where 'data' is undefined or null
            console.log(result);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    const handleCourseClick = async (courseId) => {
    try {
        // Fetch details of the clicked course using the courseId
        const res = await fetch(`http://localhost:8000/api/courses/${courseId}`);
        const result = await res.json();

        // Do something with the result, like navigating to a new page or displaying the course data
        console.log(result);
        // Navigate to the course detail page
        navigate(`/courses/${courseId}`);
    } catch (error) {
        console.error("Error fetching course details:", error);
    }
    };

    useEffect(() => {
        fetchCourses();
    }, []);  // Empty array ensures this runs only once, when component mounts

    return (
        <>
            {/* Category Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-5">
                        <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: 5 }}>Subjects</h5>
                        <h1>Explore Top Subjects</h1>
                    </div>
                    <div className="row">
                        {courses && courses.length > 0 ? (
                            courses.map((course) => (
                                <div key={course.id} className="col-lg-3 col-md-6 mb-4">
                                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                        <img className="img-fluid" src="assets/frontend/img/cat-1.jpg" alt={course.name} />
                                        <a className="cat-overlay text-white text-decoration-none" href="#" onClick={(e) => {
                                                e.preventDefault();  // Prevent default anchor behavior
                                                handleCourseClick(course.id);  // Call the API when clicked
                                            }}>
                                            <h4 className="text-white font-weight-medium">{course.name}</h4>
                                            <span>100 Courses</span>
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No courses available</p>
                        )}
                    </div>
                </div>
            </div>
            {/* Category End */}
        </>
    );
};

export default Subject;

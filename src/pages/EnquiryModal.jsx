import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const EnquiryModal = ({ isOpen, onClose}) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
  const [courses, setCourses] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const fetchCourses = async () => {
    const res = await fetch('http://localhost:8000/api/getCourseLists');
    const result = await res.json();
    setCourses(result.data);
    console.log(result);

  }

  const onSubmit = async (data) => {
    const { name, email, course_mode, course_id } = data;
    console.log(data);
    try {
      const response = await fetch('http://localhost:8000/api/saveEnquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, course_mode , course_id}),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Enquiry saved:', result);
      // Optionally close the modal or reset form here
      onClose();
      // Enable scrolling after closing the modal
      document.body.style.overflow = ''; // Restore scrolling
    } catch (error) {
      console.error('Error saving enquiry:', error);
    }
  }

  useEffect(() => {
    fetchCourses();
  },[])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = ''; // Restore scrolling
    }
    return () => {
      document.body.classList.remove('modal-open'); // Clean up
      document.body.style.overflow = ''; // Restore scrolling
    };
  }, [isOpen]);

  return (
    <div>
        {isOpen && <div className="modal-backdrop" onClick={onClose}></div>}
    <div className={`modal fade ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none', 'position' : 'fixed', 'display' : 'block', 'top' : '30%' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!isOpen} >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Enquiry</h5>
            {/* <button type="button" className="close" onClick={onClose} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> */}
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  {...register('name', { required: true })}
                />
                {errors.name && <span className="text-danger">Name is required</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  {...register('email', { required: true })}
                />
                {errors.email && <span className="text-danger">Email is required</span>}
              </div>
              <div className="form-group">
                <select className="custom-select" {...register('course_mode', { required: true })}>
                <option value="" disabled selected>Select Course Mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
                {errors.course && <span className="text-danger">Course Mode is required</span>}
              </div>
              <div className="form-group">
                <select className="custom-select" {...register('course_id', { required: true })}>
                <option value="" disabled selected>Select a course</option>
                    {
                        courses && courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.name}
                            </option>
                        ))
                    }
                </select>
                {errors.course && <span className="text-danger">Course is required</span>}
              </div>
              <button className="btn btn-primary btn-block" type="submit">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1040; /* Make sure it's behind the modal but above other content */
        }
      `}</style>
    </div>
  );
};

export default EnquiryModal;

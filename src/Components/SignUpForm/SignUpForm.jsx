import React from 'react'
import './SignUpForm.css'
import image from '../../assets/Img-1.png'
import { useState } from 'react'
const SignupForm = () => {

    const [FormData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        role: '',
        bio: '',
        resume: '',
        certifications: '',
        identity: ''
    });

    const [Errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...FormData,
            [name]: files ? files[0] : value
        });
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = "";

        if (name === "username" && !value.trim()) {
            error = "username is required";
        }
        if (name === "email") {
            if (!value.trim()) {
                error = "email is required";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = "email is not valid";
            }
        }
        if (name === "password") {
            if (!value.trim()) {
                error = "password is required";
            } else if (value.length < 6) {
                error = "password should be at least 6 char";
            }
        }
        if (name === "phone") {
            if (!value.trim()) {
                error = "Phone number is required";
            } else if (!/^\d{10}$/.test(value)) {
                error = "Phone number must be 10 digits";
            }
        }
        if (name === "role" && !value.trim()) {
            error = "Please select a role";
        }
        if (name === "bio" && !value.trim()) {
            error = "Qualification/Bio is required";
        }
        if (name === "resume") {
            if (!FormData.resume) {
                error = "Please upload your resume/CV";
            } else if (FormData.resume.type !== "application/pdf") {
                error = "Resume must be a PDF file";
            }
        }
        if (name === "certifications" && !FormData.certifications) {
            error = "Please upload your certifications";
        }
        if (name === "identity" && !FormData.identity) {
            error = "Please upload your government issued ID card";
        }

        setErrors({
            ...Errors,
            [name]: error
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ValidationErrors = {};

        if (!FormData.username.trim()) {
            ValidationErrors.username = "username is required";
        }
        if (!FormData.email.trim()) {
            ValidationErrors.email = "email is required";
        } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
            ValidationErrors.email = "email is not valid";
        }
        if (!FormData.password.trim()) {
            ValidationErrors.password = "password is required";
        } else if (FormData.password.length < 6) {
            ValidationErrors.password = "password should be at least 6 char";
        }
        if (!FormData.phone.trim()) {
            ValidationErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(FormData.phone)) {
            ValidationErrors.phone = "Phone number must be 10 digits";
        }
        if (!FormData.role.trim()) {
            ValidationErrors.role = "Please select a role";
        }
        if (!FormData.bio.trim()) {
            ValidationErrors.bio = "Qualification/Bio is required";
        }
        if (!FormData.resume) {
            ValidationErrors.resume = "Please upload your resume/CV";
        } else if (FormData.resume.type !== "application/pdf") {
            ValidationErrors.resume = "Resume must be a PDF file";
        }
        if (!FormData.certifications) {
            ValidationErrors.certifications = "Please upload your certifications";
        }
        if (!FormData.identity) {
            ValidationErrors.identity = "Please upload your government issued ID card";
        }

        setErrors(ValidationErrors);

        if (Object.keys(ValidationErrors).length === 0) {
            alert("Form Submitted successfully");
        }
    };



    return (
        <div className='form-container'>


            <form onSubmit={handleSubmit}>
                <div className="header">
                    <h2>Registration Form</h2>
                    <p>Fill out the required fields to register yourself!</p>
                </div>

                <div className="input-row-1">
                    <label>
                        <input type="text" placeholder="Your Full Name" name='username' required onChange={handleChange}
                            onBlur={handleBlur} />
                        {Errors.username && <span className="error">{Errors.username}</span>}
                    </label>


                    <label>
                        <input type="email" placeholder="Email Address" name='email' required onChange={handleChange}
                            onBlur={handleBlur} />
                        {Errors.email && <span className="error">{Errors.email}</span>}
                    </label>
                </div>

                <div className="input-row-2">
                    <label>
                        <input type='password' placeholder='Password' name='password' required onChange={handleChange}
                            onBlur={handleBlur} />
                        {Errors.password && <span className="error">{Errors.password}</span>}
                    </label>

                    <label>
                        <input type='text' placeholder='Contact Number' name='phone' required onChange={handleChange}
                            onBlur={handleBlur} />
                        {Errors.phone && <span className="error">{Errors.phone}</span>}
                    </label>
                </div>

                <div className="input-row-3">

                    <select name='role' required onChange={handleChange}
                        onBlur={handleBlur}>
                        <option value="" disabled selected>Role Applying For</option>
                        <option value="educator">Educator</option>
                        <option value="mentor">Mentor</option>
                        <option value="counselor">Counselor</option>
                    </select>

                </div>
                {Errors.role && <span className="error">{Errors.role}</span>}

                <div className="input-row-4">
                    <textarea placeholder="Qualification/Bio" rows="1" name='bio' required onChange={handleChange}
                        onBlur={handleBlur} />
                </div>
                {Errors.bio && <span className="error">{Errors.bio}</span>}
                <div className="input-row-5">
                    <div className="input-col">
                        <label>Upload Resume/CV</label>
                        <input
                            type="file"
                            name="resume"
                            accept="application/pdf" onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {Errors.resume && <span className="error">{Errors.resume}</span>}
                    </div>

                    <div className="input-col">
                        <label>Upload Certifications</label>
                        <input
                            type="file"
                            name="certifications"
                            accept=".pdf,.png,.jpg,.jpeg" onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {Errors.certifications && <span className="error">{Errors.certifications}</span>}
                    </div>
                </div>

                <div className="input-row-6">
                    <label>Upload ID/Personal Identification</label>
                    <div className="row-6-input">
                        <input
                            type='file'
                            accept=".pdf,.png,.jpg,.jpeg"
                            name='identity'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {Errors.identity && <span className="error">{Errors.identity}</span>}
                    </div>

                </div>

                <div className='have-account'>
                    Already Have An Account?<span>Login In</span>
                </div>

                <div className="btn">
                    <button type="submit">Sign Up</button>
                </div>
            </form>

            <div className="form-img">
                <img src={image} alt="Form illustration" />
            </div>

        </div>
    )
}

export default SignupForm
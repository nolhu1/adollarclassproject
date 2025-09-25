import React, { useState } from 'react'
import './SignUpForm.css'
import educatorImg from './Image/educator.jpg';

const SignUpForm = () => {
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
        <form onSubmit={handleSubmit}>
            <div className='main-container'>
                <div className='container'>
                    <div className='header'>
                        <div className='text'>Register</div>
                        <div className='underline'></div>
                    </div>

                    <div className='inputs'>
                        <label>Your Full Name </label>
                        <input
                            name='username'
                            type='text'
                            placeholder='Full Name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                        {Errors.username && <span className="error">{Errors.username}</span>}
                        <label>Your Email Address</label>
                        <input
                            name='email'
                            type='email'
                            placeholder='Email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {Errors.email && <span className="error">{Errors.email}</span>}

                        <label>Your Password</label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Password'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {Errors.password && <span className="error">{Errors.password}</span>}

                        <label>Phone Number</label>
                        <input
                            name='phone'
                            type='text'
                            placeholder='Phone Number'
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {Errors.phone && <span className="error">{Errors.phone}</span>}

                        <div className='dropdown'>
                            <label>Role Applying For</label>
                            <select
                                name='role'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="">-- Select Role --</option>
                                <option value="educator">Educator</option>
                                <option value="mentor">Mentor</option>
                                <option value="counselor">Counselor</option>
                            </select>

                        </div>
                        {Errors.role && <span className="error">{Errors.role}</span>}
                        <div className='bio'>
                            <label>Your Qualification/Bio</label>
                            <textarea
                                name='bio'
                                rows="2"
                                placeholder="Enter your qualification details"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />

                        </div>
                        {Errors.bio && <span className="error">{Errors.bio}</span>}

                        <div className='resume'>
                            <label>Upload Resume/CV</label>
                            <div className='resume-input'>
                                <input
                                    type='file'
                                    name='resume'
                                    accept='application/pdf'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                            </div>
                        </div>
                        {Errors.resume && <span className="error">{Errors.resume}</span>}

                        <div className="certifications">
                            <label>Upload Certifications</label>
                            <div className='certification-input'>
                                <input
                                    type='file'
                                    accept=".pdf,.png,.jpg,.jpeg"
                                    name='certifications'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                            </div>
                        </div>
                        {Errors.certifications && <span className="error">{Errors.certifications}</span>}

                        <div className="identity">
                            <label>Upload ID/Personal Identification</label>
                            <div className='id-card-input'>
                                <input
                                    type='file'
                                    accept=".pdf,.png,.jpg,.jpeg"
                                    name='identity'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                            </div>
                        </div>
                        {Errors.identity && <span className="error">{Errors.identity}</span>}

                        <div className='have-account'>
                            Already Have An Account? <span>Login In</span>
                        </div>

                        <button type="submit" className='btn'>Sign Up</button>
                    </div>
                </div>

                <div className="right-pic">
                    <img src={educatorImg} alt="Educator" />
                </div>
            </div>
        </form>
    )
}

export default SignUpForm;

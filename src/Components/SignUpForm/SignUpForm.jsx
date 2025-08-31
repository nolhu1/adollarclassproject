import React, { useState } from 'react'
import './SignUpForm.css'

const SignUpForm = () => {

    const [FormData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
        bio: '',
        resume: '',
    })

    const [Errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value, file } = e.target;
        setFormData({
            ...FormData,
            [name]: file ? file[0] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const ValidationErrors = {}
        if (!FormData.username.trim()) {
            ValidationErrors.username = "username is required"
        }

        if (!FormData.email.trim()) {
            ValidationErrors.email = "email is required"
        } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
            ValidationErrors.email = "email is not valid"
        }

        if (!FormData.password.trim()) {
            ValidationErrors.password = "password is required"
        } else if (FormData.password.length < 6) {
            ValidationErrors.password = "password should be at least 6 char"
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



        setErrors(ValidationErrors)

        if (Object.keys(ValidationErrors).length === 0) {
            alert("Form Submitted successfully")
        }

        console.log("Submitted Form Data:", FormData);
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className='header'>
                    <div className='text'>Register</div>
                    <div className='underline'></div>
                </div>

                <div className='inputs'>

                    <label>Your Full Name</label>
                    <input name='username' type='text' placeholder='Full Name' required onChange={handleChange} />

                    <label>Your Email Address</label>
                    <input name='email' type='email' placeholder='Email' required onChange={handleChange} />

                    <label>Your Password</label>
                    <input name='password' type='password' placeholder='Password' required onChange={handleChange} />

                    <label>Phone Number</label>
                    <input name='phone' type='text' placeholder='Phone Number' required onChange={handleChange} />

                    <div className='dropdown'>
                        <label>Role Applying For</label>
                        <select name='role' required onChange={handleChange} >
                            <option value="">-- Select Role --</option>
                            <option value="educator">Educator</option>
                            <option value="mentor">Mentor</option>
                            <option value="counselor">Counselor</option>
                        </select>
                    </div>

                    <div className='bio'>
                        <label>Your Qualification/Bio</label>

                        <textarea
                            name='qualification-bio'
                            rows="3"
                            placeholder="Enter your qualification details"
                            required
                            onChange={handleChange}
                        />
                    </div>


                    <div className='resume'>
                        <label>Upload Resume/CV</label>
                        <div className='resume-input'>
                            <input type='file' name='resume' accept='application/pdf' required onChange={handleChange} />
                        </div>
                    </div>

                    <div className='have-account'>Already Have An Account? <span>Login In</span></div>

                    <button type="submit" className='btn'>Sign Up</button>

                </div>

            </div>
        </form>
    )
}

export default SignUpForm;

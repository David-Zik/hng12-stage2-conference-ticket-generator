import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name: "", email: ""});
    const [errors, setErrors] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false); // Image loading state

    const validateForm = () => {
        let newErrors = {};

        // if (!formData.avatar) {
        //     newErrors.avatar = "Upload is required"
        // }

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no error
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            navigate("/third"); // Go to second page if the form is valid
        }
    };

    // Function to display image
    const  handleImageChange = async(e) => {
        const file = e.target.files[0]; // Get the first selected files

        // if (file) {
        //     console.log(file)
        //     setSelectedImage(URL.createObjectURL(file)); //Create preview URL
        // }
        setLoading(true);

        const data = new FormData()
        data.append("file", file);
        data.append("upload_preset", "cr8tivedav_cloud");
        data.append("cloud_name", "dhcq9c3r5");

        const res = await fetch("https://api.cloudinary.com/v1_1/dhcq9c3r5/image/upload", {
            method: "POST",
            body: data
        });

        const uploadedImageURL = await res.json()
        if (file) {
            setSelectedImage(uploadedImageURL.url)
        }
        console.log(uploadedImageURL.url);
        setLoading(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit} >

            <h2 className="main-title">Attendee Details</h2>
            <h3>Step 1/3</h3>
            <section className="first-section">
                <p>Upload Profile Photo</p>

                <div className="avatar-container">
                    <div className="avatar-el">

                    <div>
                    <img src="src/assets/cloud-download.png" alt="upload" />
                    </div>

                    <label htmlFor="avatar-input">Drag & drop or click to <span style={{display: "block"}}>upload</span></label>

                    <input type="file" id="avatar-input" accept="image/*" onChange={handleImageChange} required/>
                    </div>
                    {
                        loading ? "Uploading..." : <img src={selectedImage} className="uploaded-image" />
                    }
                    
                    
                </div>
                
 

            </section>

            <hr className="line"/>

                <div className="input-container">
                <label  htmlFor="name">Enter your name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} id="name" name="name" required/>
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
                </div>

                <div className="input-container">
                <label  htmlFor="email">Enter your email *</label>

                <div className="email-container">
                <img src="src/assets/envelope.png" alt="envelope" style={{width: "24px"}} />
                <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} id="email" name="email" required/>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </div>

                </div>

                <div className="input-container">
                <label  htmlFor="about">About the project</label>
                <textarea name="about" id="about" placeholder="Textarea" cols="50" rows="4"></textarea>
                </div>

                <button type="submit" className="next-btn">Get My Free Ticket</button>
            </form>
        </>
    )
}

export default Form;


import React, {useState} from 'react'
import '../styles/GeneralForm.css'

export default function Generalform() {
    const [generalInfo, setGeneralInfo] = useState({
        firstName: "Braxton",
        lastName: "Zand",
        email: "Zand.Braxton@gmail.com",
        phoneNumber: "210-426-2358",
        IsPreview: false
    })

    const onSubmit = () => {
       setGeneralInfo(prevState => ({
            ...prevState,
            IsPreview: !generalInfo.IsPreview
        }))
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        console.log(target)
        console.log(value)
        console.log(name)
        setGeneralInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    if(generalInfo.IsPreview === true) {
        return (
            <div className="general-container">
                <div className="form-preview">
                    <h1 className="full-name">{generalInfo.firstName} {generalInfo.lastName}</h1>
                    <h2 className="info-title">Personal Info</h2>
                    <section className="personal-info">
                        <span className="info-label">Email</span>
                        <p className="info-content">{generalInfo.email}</p>
                        <span className="info-label">Contact Number</span>
                        <p className="info-content">{generalInfo.phoneNumber}</p>
                    </section>
                    <button
                        className="edit" 
                        type="button" 
                        onClick={onSubmit}
                    >Edit</button>
                </div>
            </div>
        )
    } else {
        return (
    <div className="general-container">
        <form 
        className="general-form"
        onSubmit={onSubmit}>
            <label>
                First Name
            </label>
            <input 
                type='text'
                name="firstName"
                value={generalInfo.firstName}
                onChange={handleChange}
            ></input>
            <label>
                Last Name
            </label>
            <input 
                type='text'
                name="lastName"
                value={generalInfo.lastName}
                onChange={handleChange}
            ></input>
            <label>
                Email
            </label>
            <input 
                type='email'
                name="email"
                value={generalInfo.email}
                onChange={handleChange}
            ></input>
            <label>
                Phone Number
            </label>
            <input 
                type='tel'
                name="phoneNumber"
                value={generalInfo.phoneNumber}
                onChange={handleChange}
            ></input>
            <input
            className="submit" 
            type="submit" 
            value="Submit"
            ></input>
        </form>
    </div>
        )
    }
}
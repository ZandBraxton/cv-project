import React, {useState} from 'react'
// import uniqid from 'uniqid'
import '../styles/EduExp.css'

export default function EducationalInput(props) {
    const [educationalInput, setEducationalInput] = useState({
            DegreesEarned: '',
            SchoolName: '',
            City: '',
            State: '',
            GPA: '',
            StartDate: '',
            EndDate: '',
            IsPresent: false
    })

    const [preview, setPreview] = useState(false)


    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        setEducationalInput(prevState => ({
            ...prevState,
            [name]: value
        }))    
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setPreview(!preview)
}


const handlePresent = (e) => {
    setEducationalInput(prevState => ({
        ...prevState,
        IsPresent: !educationalInput.IsPresent
    }))    
}

    if(preview === true) {
        return (
            <div className="edu-exp-input-container">
                        <div className="edu-exp-preview">
                            <p className="degree">{educationalInput.DegreesEarned}</p>
                            <div className="edu-exp-info">
                                <p>{educationalInput.SchoolName}, {educationalInput.City}, {educationalInput.State}</p>
                                <p>GPA: {educationalInput.GPA}</p>
                                <p>{educationalInput.StartDate} - {educationalInput.IsPresent ? "Present" : educationalInput.EndDate}</p>
                            </div>
                            <button
                                className="edu-exp-edit" 
                                type="button" 
                                onClick={onSubmit}
                            >Edit</button>
                            <button
                                className="edu-exp-edit" 
                                type="button"
                                value={props.id}
                                onClick={() => props.handleDelete(props.id)} 
                            >Delete</button>
                        </div>
                    </div>
        )
    } else {
        return (
            <div className="edu-exp-input-container">
                <form
                    className="edu-exp-form"
                    onSubmit={onSubmit}
                    >
                    <div className="edu-exp-input-group">
                        <label>
                            Degree
                        </label>
                        <input 
                        type='text'
                        name="DegreesEarned"
                        placeholder="Degree"
                        value={educationalInput.DegreesEarned}
                        onChange={handleChange}
                        required
                        ></input>
                    </div>

                    <div className="edu-exp-input-group">
                        <label>
                            School Name
                        </label>
                        <input
                        type='text'
                        name="SchoolName"
                        placeholder="School Name"
                        value={educationalInput.SchoolName}
                        onChange={handleChange}
                        required></input>
                    </div>
                    <div className="edu-exp-input-group">
                    <label>
                        City and State of institution
                    </label>
                        <div className="city-state">
                        <input
                        type='text'
                        name="City"
                        placeholder="City"
                        value={educationalInput.City}
                        onChange={handleChange}
                        required
                        ></input>
                        <input
                        type='text'
                        name="State"
                        placeholder="State"
                        value={educationalInput.State}
                        onChange={handleChange}
                        required
                        ></input>
                        </div>
                    </div>
                    <div className="edu-exp-input-group">
                        <label>
                            GPA
                        </label>
                        <input
                        type='number'
                        name="GPA"
                        placeholder="GPA"
                        value={educationalInput.GPA}
                        onChange={handleChange}
                        required
                        ></input>
                    </div>
                    <div className="edu-exp-input-group">
                        <label>
                            Starting date
                        </label>
                        <input
                        type='date'
                        name="StartDate"
                        value={educationalInput.StartDate}
                        onChange={handleChange}
                        required
                        ></input>
                    </div>
                    <div className="edu-exp-input-group">
                        <label>
                            End date
                        </label>
                        <input
                        type='date'
                        name="EndDate"
                        value={educationalInput.EndDate}
                        onChange={handleChange}
                        disabled={educationalInput.IsPresent}
                        required
                        ></input>
                        <div className="checkbox">
                            <label>To Present?</label>
                            <input
                            type="checkbox"
                            onClick={handlePresent}></input>
                        </div>
                    </div>
                    <button
                    className="edu-exp-submit"
                    >Submit</button>
                </form>
            </div>
        )
    }
        
}





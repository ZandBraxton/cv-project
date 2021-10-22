import React, {useState} from 'react'
import '../styles/EduExp.css'

export default function ExperienceInput(props) {

    const [experienceInput, setExperienceInput] = useState({
            PositionTitle: '',
            CompanyName: '',
            City: '',
            State: '',
            StartDate: '',
            EndDate: '',
            Tasks: '',
            IsPresent: false,
    })

    const [preview, setPreview] = useState(false)
    

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name
        setExperienceInput(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setPreview(!preview)
}


    const handlePresent = (e) => {
        setExperienceInput(prevState => ({
            ...prevState,
            IsPresent: !experienceInput.IsPresent
        }))    
    }


        if(preview === true) {
            return (
                <div className="edu-exp-input-container">
                        <div className="edu-exp-preview">
                            <p className="position-title">{experienceInput.PositionTitle}</p>
                            <div className="edu-exp-info">
                                <p>{experienceInput.CompanyName}, {experienceInput.City}, {experienceInput.State}</p>
                                <p>{experienceInput.StartDate} - {experienceInput.IsPresent ? "Present" : experienceInput.EndDate}</p>
                            </div>
                            <p className="tasks">Responsibilities: {experienceInput.Tasks}</p>
                            <button
                                className="edu-exp-edit" 
                                type="button" 
                                onClick={onSubmit}
                            >Edit</button>
                            <button
                                className="edu-exp-edit"
                                value={props.id}
                                onClick={() => props.handleDelete(props.id)} 
                                type="button" 
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
                                    Position Title
                                </label>
                                <input 
                                type='text'
                                name="PositionTitle"
                                placeholder="Position Title"
                                value={experienceInput.PositionTitle}
                                onChange={handleChange}
                                required
                                ></input>
                            </div>

                            <div className="edu-exp-input-group">
                                <label>
                                    Company Name
                                </label>
                                <input
                                type='text'
                                name="CompanyName"
                                placeholder="Company Name"
                                value={experienceInput.CompanyName}
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
                                value={experienceInput.City}
                                onChange={handleChange}
                                required
                                ></input>
                                <input
                                type='text'
                                name="State"
                                placeholder="State"
                                value={experienceInput.State}
                                onChange={handleChange}
                                required
                                ></input>
                                </div>
                          </div>
                            <div className="edu-exp-input-group">
                                <label>
                                    Starting date
                                </label>
                                <input
                                type='date'
                                name="StartDate"
                                value={experienceInput.StartDate}
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
                                value={experienceInput.EndDate}
                                onChange={handleChange}
                                disabled={experienceInput.IsPresent}
                                required
                                ></input>
                                <div className="checkbox">
                                <label>To Present?</label>
                                <input
                                type="checkbox"
                                onClick={handlePresent}></input>
                                </div>
                            </div>
                            <div>
                                <label>Tasks</label>
                                <textarea
                                name="Tasks"
                                value={experienceInput.Tasks}
                                onChange={handleChange}>
                                </textarea>
                            </div>
                            <button
                            className="edu-exp-submit"
                            >Submit</button>
                        </form>
                </div>
            )
        }
    }



import React, {useState} from 'react'
import EducationalInput from './EducationalInput';
import uniqid from 'uniqid'
import '../styles/EduExp.css'

export default function EducationalInfo() {
    const [educationalInfo, setEducationalInfo] = useState([])

   const handleAddEducation = (e) => {
        e.preventDefault()
        setEducationalInfo((prevState) => [...prevState, uniqid()])
    }

    console.log(educationalInfo)

   const handleDelete = (id) => {
        setEducationalInfo((prevState) => {
            let eduArray = prevState.filter((key) => key !== id);
            return eduArray
        })
    }

    const educationalComponents = educationalInfo.map((id) => (
        <EducationalInput key={id} id={id} handleDelete={handleDelete}/>
    ))

    

    
        return (
                <div className="edu-exp-container">
                    <div className="title">
                        <h1>Education</h1>
                        <button
                        className="add-edu-exp material-icons"
                        type="button"
                        onClick={handleAddEducation}
                        >add_circle</button>     
                    </div>
                    {educationalComponents}
                </div>
        )
}
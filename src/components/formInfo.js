import React from 'react'
import GeneralForm from './GeneralInfo';    
import EducationalInfo from './EducationalInfo';
import ExperienceInfo from './ExperienceInfo';
import CvRender from './cvRender';





class FormInfo extends React.Component {
    constructor(props) {
      super(props)
        this.state = {
                GeneralInfo: {
                  firstName: {
                    data: ''
                  },
                  lastName: {
                    data: ''
                  },
                  email: {
                    data: ''
                  },
                  phoneNumber: {
                    data: ''
                  }
                },
                EducationalInfo: {
                  School: "Something"
                },
                CVdata: []
               
        }
  
      
    }

    handleGeneralChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name

        this.setState(prevState => ({
          GeneralInfo: {
            ...prevState.GeneralInfo,
            [name]: {
              ...prevState.GeneralInfo[name],
              data: value
            }
          }
        }))
    }

    handleSubmit = (event) => {
      event.preventDefault()
      console.log(this.state.GeneralInfo)
      console.log("You clicked submit")
    }

  


    render() {
        console.log(this.state)
      return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <GeneralForm 
          handleGeneralChange={this.handleGeneralChange.bind(this)}
          data={this.state.GeneralInfo}>
        </GeneralForm>
        <EducationalInfo></EducationalInfo>
        <ExperienceInfo></ExperienceInfo>
        <input type="submit" value="Submit"></input>
        </form>
        <CvRender data={this.state}></CvRender>
      </div>
      )
    }
   
  }

  export default FormInfo
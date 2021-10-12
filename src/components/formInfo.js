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

  


    render() {
        console.log(this.state)
      return (
      <div>
        <GeneralForm 
          handleGeneralChange={this.handleGeneralChange.bind(this)}
          data={this.state.GeneralInfo}>
        </GeneralForm>
        {/* <EducationalInfo></EducationalInfo>
        <ExperienceInfo></ExperienceInfo> */}
      </div>
      )
    }
   
  }

  export default FormInfo
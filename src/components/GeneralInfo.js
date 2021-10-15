import React from 'react'
import '../styles/GeneralForm.css'

class GeneralForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            IsPreview: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.IsPreview === true) {
            this.setState({
                IsPreview: false
            })
        } else {
            this.setState({
                IsPreview: true
        })
    }
}

    render() {
        const {data} = this.props
        return (
            <div className="general-container">
                {this.state.IsPreview ? (
                    <div className="form-preview">
                        <h1 className="full-name">{data.firstName.data} {data.lastName.data}</h1>
                        <h2 className="info-title">Personal Info</h2>
                        <section className="personal-info">
                            <span className="info-label">Email</span>
                            <p className="info-content">{data.email.data}</p>
                            <span className="info-label">Contact Number</span>
                            <p className="info-content">{data.phoneNumber.data}</p>
                        </section>
                        <button
                            className="edit" 
                            type="button" 
                            onClick={this.onSubmit}
                        >Edit</button>
                    </div>
                ) : (
                    <form 
                    className="general-form"
                    onSubmit={this.onSubmit}>
                         <label>
                             First Name
                         </label>
                         <input 
                             type='text'
                             name="firstName"
                             value={data.firstName.data}
                             onChange={this.props.handleGeneralChange}
                         ></input>
                         <label>
                             Last Name
                         </label>
                         <input 
                             type='text'
                             name="lastName"
                             value={data.lastName.data}
                             onChange={this.props.handleGeneralChange}
                         ></input>
                         <label>
                             Email
                         </label>
                         <input 
                             type='email'
                             name="email"
                             value={data.email.data}
                             onChange={this.props.handleGeneralChange}
                         ></input>
                         <label>
                             Phone Number
                         </label>
                         <input 
                             type='tel'
                             name="phoneNumber"
                             value={data.phoneNumber.data}
                             onChange={this.props.handleGeneralChange}
                         ></input>
                         <input
                         className="submit" 
                         type="submit" 
                         value="Submit"
                         ></input>
                         </form>
                )}
            </div>
        )
    } 
}


export default GeneralForm
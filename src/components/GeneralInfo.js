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
        console.log(this.state.IsPreview)
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
            <div>
                {this.state.IsPreview ? (
                    <div>
                        <p>{data.firstName.data}</p>
                        <p>{data.lastName.data}</p>
                        <p>{data.email.data}</p>
                        <p>{data.phoneNumber.data}</p>
                        <button type="button" onClick={this.onSubmit}>Edit</button>
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
                         <input type="submit" value="Submit"></input>
                         </form>
                )}
            </div>
        )
    } 
}


export default GeneralForm
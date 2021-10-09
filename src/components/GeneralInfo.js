import React from 'react'


class GeneralForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        }
        
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
    }


    handleChange = () => {
        console.log(this)
        this.props.onGeneralInfo(this.state)
    }

    render() {
        console.log(this)
        return (
                <form>
                    <label>
                        First Name
                    </label>
                    <input 
                        type='text'
                        name="firstName"
                        onChange={this.handleInputChange}
                    ></input>
                    <label>
                        Last Name
                    </label>
                    <input 
                        type='text'
                        name="lastName"
                        onChange={this.handleInputChange}
                    ></input>
                    <label>
                        Email
                    </label>
                    <input 
                        type='email'
                        name="email"
                        onChange={this.handleInputChange}
                    ></input>
                    <label>
                        Phone Number
                    </label>
                    <input 
                        type='tel'
                        name="phoneNumber"
                        onChange={this.handleInputChange}
                    ></input>
                </form>
        )
    }
}

export default GeneralForm
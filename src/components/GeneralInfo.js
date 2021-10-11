import React from 'react'


class GeneralForm extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     firstName: '',
        //     lastName: '',
        //     email: '',
        //     phoneNumber: ''
        // }
        
        // this.handleInputChange = this.handleInputChange.bind(this)
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name
    //     console.log(event)

    //     this.setState({
    //         [name]: value
    //     })
    // }


    render() {
        return (
                <form>
                    <label>
                        First Name
                    </label>
                    <input 
                        type='text'
                        name="firstName"
                        onChange={this.props.handleGeneralChange}
                    ></input>
                    <label>
                        Last Name
                    </label>
                    <input 
                        type='text'
                        name="lastName"
                        onChange={this.props.handleGeneralChange}
                    ></input>
                    <label>
                        Email
                    </label>
                    <input 
                        type='email'
                        name="email"
                        onChange={this.props.handleGeneralChange}
                    ></input>
                    <label>
                        Phone Number
                    </label>
                    <input 
                        type='tel'
                        name="phoneNumber"
                        onChange={this.props.handleGeneralChange}
                    ></input>
                </form>
        )
    }
}

export default GeneralForm
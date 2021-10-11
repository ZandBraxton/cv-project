import React from 'react'

const GeneralForm = (props) => {
    const {data} = props
    console.log(props)
        return (
               <div>
                    <label>
                        First Name
                    </label>
                    <input 
                        type='text'
                        name="firstName"
                        value={data.firstName.data}
                        onChange={props.handleGeneralChange}
                    ></input>
                    <label>
                        Last Name
                    </label>
                    <input 
                        type='text'
                        name="lastName"
                        value={data.lastName.data}
                        onChange={props.handleGeneralChange}
                    ></input>
                    <label>
                        Email
                    </label>
                    <input 
                        type='email'
                        name="email"
                        value={data.email.data}
                        onChange={props.handleGeneralChange}
                    ></input>
                    <label>
                        Phone Number
                    </label>
                    <input 
                        type='tel'
                        name="phoneNumber"
                        value={data.phoneNumber.data}
                        onChange={props.handleGeneralChange}
                    ></input>
                    </div>
        )
}


export default GeneralForm
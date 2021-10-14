import React from 'react'
import '../styles/EducationalForm.css'

class EducationalInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            DegreesEarned: 'Degree',
            SchoolName: 'Southern New Hampshire University',
            City: 'Manchester',
            State: 'New Hampshire',
            GPA: '3.98',
            StartDate: '2016-01-04',
            EndDate: '2021-01-20',
            IsPreview: false
        }
    }

    handleGeneralChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
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
    console.log(this.state)
}


    render() {
        console.log(this.props)
        console.log(this.state.DegreesEarned)
        return (
                <div className="educational-container">
                    {this.state.IsPreview ? (
                        <div className="educational-preview">
                            <p className="degree">{this.state.DegreesEarned}</p>
                            <div className="educational-info">
                                <p>{this.state.SchoolName}</p>
                                <p>{this.state.City}, {this.state.State}</p>
                                <p>GPA: {this.state.GPA}</p>
                                <p>{this.state.StartDate} - {this.state.EndDate}</p>
                            </div>
                            <button
                                className="edit" 
                                type="button" 
                                onClick={this.onSubmit}
                            >Edit</button>
                        </div>
                    ) : (
                        <form
                        className="educational-form"
                        onSubmit={this.onSubmit}
                        >
                            <label>
                                Degrees earned
                            </label>
                            <input 
                            type='text'
                            name="DegreesEarned"
                            value={this.state.DegreesEarned}
                            onChange={this.handleGeneralChange}
                            ></input>
                            <label>
                                School Name
                            </label>
                            <input
                            type='text'
                            name="SchoolName"
                            value={this.state.SchoolName}
                            onChange={this.handleGeneralChange}></input>
                            <label>
                                City and State of institution
                            </label>
                            <input
                            type='text'
                            name="City"
                            value={this.state.City}
                            onChange={this.handleGeneralChange}></input>
                            <input
                            type='text'
                            name="State"
                            value={this.state.State}
                            onChange={this.handleGeneralChange}></input>
                            <label>
                                GPA
                            </label>
                            <input
                            type='number'
                            name="GPA"
                            value={this.state.GPA}
                            onChange={this.handleGeneralChange}></input>
                            <label>
                                Starting date
                            </label>
                            <input
                            type='date'
                            name="StartDate"
                            value={this.state.StartDate}
                            onChange={this.handleGeneralChange}></input>
                            <label>
                                End date
                            </label>
                            <input
                            type='date'
                            name="EndDate"
                            value={this.state.EndDate}
                            onChange={this.handleGeneralChange}></input>
                            <input type="submit" value="Submit"></input>
                        </form>
                    )} 
                </div>
        )
    }
}



export default EducationalInput
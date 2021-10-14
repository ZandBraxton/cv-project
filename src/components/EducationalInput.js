import React from 'react'
import '../styles/EducationalForm.css'

class EducationalInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            DegreesEarned: 'AA in Business Adminsistration',
            SchoolName: 'Southern New Hampshire University',
            City: 'New Hampshire',
            State: 'Manchester',
            GPA: '3.98',
            StartDate: '2021-01-16',
            EndDate: '2021-04-22',
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
                <div className="educational-input-container">
                    {this.state.IsPreview ? (
                        <div className="educational-preview">
                            <p className="degree">{this.state.DegreesEarned}</p>
                            <div className="educational-info">
                                <p>{this.state.SchoolName}, {this.state.City}, {this.state.State}</p>
                                <p>GPA: {this.state.GPA}</p>
                                <p>{this.state.StartDate} - {this.state.EndDate}</p>
                            </div>
                            <button
                                className="education-edit" 
                                type="button" 
                                onClick={this.onSubmit}
                            >Edit</button>
                            <button
                                className="education-edit" 
                                type="button" 
                            >Delete</button>
                        </div>
                    ) : (
                        <form
                        className="educational-form"
                        onSubmit={this.onSubmit}
                        >
                            <div className="educational-input-group">
                                <label>
                                    Degree
                                </label>
                                <input 
                                type='text'
                                name="DegreesEarned"
                                placeholder="Degree"
                                value={this.state.DegreesEarned}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>

                            <div className="educational-input-group">
                                <label>
                                    School Name
                                </label>
                                <input
                                type='text'
                                name="SchoolName"
                                placeholder="School Name"
                                value={this.state.SchoolName}
                                onChange={this.handleGeneralChange}
                                required></input>
                            </div>
                          <div className="educational-input-group">
                            <label>
                                City and State of institution
                            </label>
                                <div className="city-state">
                                <input
                                type='text'
                                name="City"
                                placeholder="City"
                                value={this.state.City}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                                <input
                                type='text'
                                name="State"
                                placeholder="State"
                                value={this.state.State}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                                </div>
                          </div>
                            <div className="educational-input-group">
                                <label>
                                    GPA
                                </label>
                                <input
                                type='number'
                                name="GPA"
                                placeholder="GPA"
                                value={this.state.GPA}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>
                            <div className="educational-input-group">
                                <label>
                                    Starting date
                                </label>
                                <input
                                type='date'
                                name="StartDate"
                                value={this.state.StartDate}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>
                            <div className="educational-input-group">
                                <label>
                                    End date
                                </label>
                                <input
                                type='date'
                                name="EndDate"
                                value={this.state.EndDate}
                                onChange={this.handleGeneralChange}
                                required
                                ></input>
                            </div>
                            <button
                            className="education-submit"
                            >Submit</button>
                        </form>
                    )} 
                </div>
        )
    }
}



export default EducationalInput
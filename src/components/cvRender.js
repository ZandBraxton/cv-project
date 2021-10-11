import React from 'react'



// class CvRender extends React.Component {
//     constructor(props) {
//         super(props);
        
//     }

//     render() {
//         return (
//             <div>
//                 <p>Hi</p>
//                 <p></p>
//             </div>
//         )
//     }
// }



const CvRender = (props) => {
    const {data} = props
    console.log(data.GeneralInfo.firstName.data)

    return (
        <div>
            <p>{data.GeneralInfo.firstName.data}</p>
            <p>{data.GeneralInfo.lastName.data}</p>
            <p>{data.GeneralInfo.email.data}</p>
            <p>{data.GeneralInfo.phoneNumber.data}</p>
        </div>
    )
}



export default CvRender
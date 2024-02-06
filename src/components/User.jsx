import React from 'react'


function User(props) {
    // console.log(props.value);
  return (
    <div className='container'>
        <div className="userdetails">
            <img src="" alt="" />
            <span>Name : </span><h1>{props.value.name.first} <span>{props.value.name.last}</span></h1>
            <div className="age"><span>Age : </span><h2>{props.value.dob.age}</h2></div>
            <div className="location"> <span>Location : </span> <h2>{props.value.location.city}</h2><h2>{props.value.location.country}</h2></div>
            <div className="phone"><span>Phone No. : </span> <h3>{props.value.phone}</h3></div>
            <div className="email"> <span>Email : </span> <h3>{props.value.email}</h3></div>
            <div className="gender"> <span>Gender : </span> <h3>{props.value.gender}</h3></div>
        </div>
    </div>
  )
}

export default User
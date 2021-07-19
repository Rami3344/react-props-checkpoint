import React from 'react'
import jack from '../jackie.jpg'
const Profile = ({fullname , bio , profession , children , func}) => {
    return (
        <div>
            <h1> {fullname} </h1>
            <h2> {bio} </h2>
            <h3> {profession} </h3>
            {children}
            <br></br>
            <button onClick = {() => func(fullname)}>click here</button>
        </div>
    )
}
Profile.defaultProps ={
    fullname : 'jackie chan',
    bio : 'Real name Fang Shilong, known professionally as Jackie Chan, is a Hong Kong actor, director and martial artist known for his slapstick acrobatic fighting style, comic timing, and innovative stunts, which he typically performs himself.',
    profession : "Actor",
    children : <img src = {jack}></img>,
    func : (name) => alert(`my name is ${name}`)
}
export default Profile

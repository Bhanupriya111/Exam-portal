import React from "react";
import BlueButton from "./BlueButton";
import { Link } from "react-router-dom";
import "./HomeScreen.css";
export default function HomeScreen() {
    const [role,setRole]=React.useState("");
    function roleToFaculty(){
        setRole("Faculty")
    }
    function roleToStudent(){
        setRole("Student")
    }
    return (       
        <div className="homes">
            <Link to="/signup" state={{role:"Faculty"}}><div onClick={roleToFaculty}><BlueButton title="Faculty Login" /></div></Link>
            <Link to="/signup" state={{role:"Student"}}><div onClick={roleToStudent}><BlueButton title="Student Login" /></div></Link>
        </div>
 
    )
}
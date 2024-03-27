import React, { useState } from "react";
import { api_url } from "../Api/Apiurl";
import axios from "axios";

function Register(){
        const [companyName,setcompanyName] = useState("");
        const [ownerName,setownername]=useState("");
        const [rollno,setrollno]=useState("");
        const [ownerEmail,setownerEmail]=useState("");
        const [accessCode,setaccessCode]=useState("");

        const postdata = async(e) =>{
            e.preventDefault();
            try{
            await axios.post(api_url, {companyName,ownerName,rollno,ownerEmail,accessCode});
            console.log("Data successfully sent");
            }
            catch(error){
                console.log('error' , error);
            }
        }
  
    return(
        <div>
            <form>
                <label>Company Name</label>
                <input type='text' value={companyName} onChange={event=>setcompanyName(event.target.value)} placeholder="Enter Company Name"/>
                <label>Owner Name</label>
                <input type='text' value={ownerName} onChange={event=>setownername(event.target.value)} placeholder="Enter Owner Name"/>
                <label>Rollno</label>
                <input type='text' value={rollno} onChange={event=>setrollno(event.target.value)} placeholder="Enter rollno"/>
                <label>Owner Email</label>
                <input type='email' value={ownerEmail} onChange={event=>setownerEmail(event.target.value)} placeholder="Enter Owner email"/>
                <label>Access Code</label>
                <input type='text' value={accessCode} onChange={event=>setaccessCode(event.target.value)} placeholder="Enter Accesscode"/>
                <button type= 'submit' onClick={(event) => postdata(event)}>Register</button>
            </form>
        </div>
    )
}
export default Register;
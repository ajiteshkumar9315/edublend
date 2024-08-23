import React, {useState} from 'react'
import './RegisterForm.css'

const RegisterForm = () => {
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    city:"",
    Phone:"",
  });
  
  let name, value;
  const getUserData = (event) => {
    name=event.target.name;
    value=event.target.value;
    
    setUser({ ...user, [name]:value});
  };

  const postData = async(e) => {
    e.preventDefault();
    
    //object destructuring
    const {firstName,lastName,email,city,Phone} = user;

    if (firstName && lastName && email && city && Phone){

   
    
    //connection,define content-type,change json to string for body
    // while adding the url you have to define the name of database with extension of .json.
    // define method,header.
    const res = await fetch(
      "https://fir-tut1-e5ca0-default-rtdb.firebaseio.com/tutDatabase.json",{
        method: "POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify({
          firstName,
          lastName,
          email,
          city,
          Phone,
        }),
      }
    );

    if(res){
      setUser({
        firstName:"",
        lastName:"",
        email:"",
        city:"",
        Phone:"",
      });

      alert("Data Store Sucessfully");
    }
  }
  else{
    alert("Please Enter The Data");
  }
  };

  return (
    <div className='contan '>
      <form className="row " method='POST'>
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefault01" className="form-label fw-bolder p-3">First name</label>
    <input type="text" className="form-control" id="validationDefault01" name="firstName" value={user.firstName} onChange={getUserData} autoComplete='off' placeholder='Enter The FirstName' required/>
  </div>
  <div className="col-md-5 m-3">
    <label htmlFor="validationDefault02" className="form-label fw-bolder p-3">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" name="lastName" value={user.lastName} onChange={getUserData} autoComplete='off' placeholder='Enter The LastName' required/>
  </div>
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefaultUsername" className="form-label fw-bolder p-3">Email</label>
    <div className="input-group">
      <input type="email" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" name='email' value={user.email} onChange={getUserData} autoComplete='off' placeholder='Enter The Email' required/>
    </div>
  </div>
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefault03" className="form-label fw-bolder p-3">City</label>
    <input type="text" className="form-control" id="validationDefault03" name='city' value={user.city} onChange={getUserData} autoComplete='off' placeholder='Enter The city' required/>
  </div>
  {/* <div className="col-md-3">
    <label htmlFor="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" >
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  <div className="col-md-5 m-3 mx-4">
    <label htmlFor="validationDefault05" className="form-label fw-bolder p-3">Mobile Number</label>
    <input type="text" className="form-control" id="validationDefault05" name='Phone' value={user.Phone} onChange={getUserData} autoComplete='off' placeholder='Enter The Mobile Number' required/>
  </div>
 
  <div className="col-12 m-5">
    <button className="btn btn-dark fw-bolder w-25 h-100 rounded-pill " type="submit" onClick={postData}>Submit </button>
  </div>
</form>
    </div>
  )
}

export default RegisterForm

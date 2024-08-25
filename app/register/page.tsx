import React, { useState } from "react";
import "./RegisterForm.css";

// Define a type for the user state
interface User {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  Phone: string;
}

const RegisterForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    Phone: "",
  });

  // Event handler for input changes
  const getUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  // Function to post data to the server
  const postData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Destructuring the user object
    const { firstName, lastName, email, city, Phone } = user;

    // Check if all fields are filled
    if (firstName && lastName && email && city && Phone) {
      // Make a POST request to Firebase
      const res = await fetch(
        "https://fir-tut1-e5ca0-default-rtdb.firebaseio.com/tutDatabase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            city,
            Phone,
          }),
        }
      );

      if (res.ok) {
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          city: "",
          Phone: "",
        });

        alert("Data Stored Successfully");
      } else {
        alert("Failed to store data");
      }
    } else {
      alert("Please Enter The Data");
    }
  };

  return (
    <div className="contan">
      <form className="row" method="POST" onSubmit={postData}>
        <div className="col-md-5 m-3 mx-4">
          <label htmlFor="validationDefault01" className="form-label fw-bolder p-3">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            name="firstName"
            value={user.firstName}
            onChange={getUserData}
            autoComplete="off"
            placeholder="Enter The FirstName"
            required
          />
        </div>
        <div className="col-md-5 m-3">
          <label htmlFor="validationDefault02" className="form-label fw-bolder p-3">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            name="lastName"
            value={user.lastName}
            onChange={getUserData}
            autoComplete="off"
            placeholder="Enter The LastName"
            required
          />
        </div>
        <div className="col-md-5 m-3 mx-4">
          <label htmlFor="validationDefaultUsername" className="form-label fw-bolder p-3">
            Email
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              name="email"
              value={user.email}
              onChange={getUserData}
              autoComplete="off"
              placeholder="Enter The Email"
              required
            />
          </div>
        </div>
        <div className="col-md-5 m-3 mx-4">
          <label htmlFor="validationDefault03" className="form-label fw-bolder p-3">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            name="city"
            value={user.city}
            onChange={getUserData}
            autoComplete="off"
            placeholder="Enter The city"
            required
          />
        </div>
        <div className="col-md-5 m-3 mx-4">
          <label htmlFor="validationDefault05" className="form-label fw-bolder p-3">
            Mobile Number
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            name="Phone"
            value={user.Phone}
            onChange={getUserData}
            autoComplete="off"
            placeholder="Enter The Mobile Number"
            required
          />
        </div>
        <div className="col-12 m-5">
          <button
            className="btn btn-dark fw-bolder w-25 h-100 rounded-pill"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

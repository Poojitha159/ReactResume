import { useRef,useState } from "react";

function App() {
//   const formRef=useRef()
  
//   const [email, setEmail] = useState("poojitha@gmail.com");
//  // const emailInput=formRef.current.querySelector("input[id=y")
//   const [password, setPassword] = useState("1223");
//   const [address, setAddress] = useState("mathukumalli");
//   const [address2, setAddress2] = useState("vinukonda");
//   const [city, setCity] = useState("guntur");
//   const [state, setState] = useState("");
//   const [zip, setZip] = useState("");
//   const [checked, setChecked] = useState(false);




//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//       // email,
//       // password,
//       // address,
//       // address2,
//       // city,
//       // state,
//       // zip,
//       //checked,
//       
//   };

//   console.log(

//   )

// //   const handleSubmit1=(e)=>{
// //     console.log(formRef)
// //   }

 

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Address 2</label>
//           <input
//             type="text"
//             className="form-control"
//             value={address2}
//             onChange={(e) => setAddress2(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">City</label>
//           <input
//             type="text"
//             className="form-control"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">State</label>
//           <select
//             className="form-control"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           >
//             <option value="">Choose...</option>
//             <option value="State1">State1</option>
//             <option value="State2">State2</option>
//           </select>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Zip</label>
//           <input
//             type="text"
//             className="form-control"
//             value={zip}
//             onChange={(e) => setZip(e.target.value)}
//           />
//         </div>
//         <div className="form-check mb-3">
//           <input
//             className="form-check-input"
//             type="checkbox"
//             checked={checked}
//             onChange={(e) => setChecked(e.target.checked)}
//           />
//           <label className="form-check-label">Check me out</label>
//         </div>

        
// Email:{email} <br/>
// Password:{password}<br/>
// Addreess:{address}<br/>
// Address2:{address2}<br/>
// City:{city}<br/>
// State:{state}<br/>
// Zip:{zip}<br/>

//         <button type="submit" className="btn btn-primary">
//           Sign in
//         </button>




//       </form>

//      
//     </>
//   );



// const formRef = useRef(null);

//   const [submittedData, setSubmittedData] = useState({});

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const email = formRef.current.querySelector("#inputEmail4").value;
//     const password = formRef.current.querySelector("#inputPassword4").value;
//     const address = formRef.current.querySelector("#inputAddress").value;
//     const address2 = formRef.current.querySelector("#inputAddress2").value;
//     const city = formRef.current.querySelector("#inputCity").value;
//     const state = formRef.current.querySelector("#inputState").value;
//     const zip = formRef.current.querySelector("#inputZip").value;
//     const checked = formRef.current.querySelector("#gridCheck").checked;

//     setSubmittedData({
//       email,
//       password,
//       address,
//       address2,
//       city,
//       state,
//       zip,
//       checked,
//     });
//   };

  // return (
  //   <>
  //     <form ref={formRef}>
  //       <div className="form-row">
  //         <div className="form-group col-md-6">
  //           <label htmlFor="inputEmail4">Email</label>
  //           <input
  //             type="email"
  //             className="form-control"
  //             id="inputEmail4"
  //             placeholder="Email"
  //           />
  //         </div>
  //         <div className="form-group col-md-6">
  //           <label htmlFor="inputPassword4">Password</label>
  //           <input
  //             type="password"
  //             className="form-control"
  //             id="inputPassword4"
  //             placeholder="Password"
  //           />
  //         </div>
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="inputAddress">Address</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           id="inputAddress"
  //           placeholder="1234 Main St"
  //         />
  //       </div>
  //       <div className="form-group">
  //         <label htmlFor="inputAddress2">Address 2</label>
  //         <input
  //           type="text"
  //           className="form-control"
  //           id="inputAddress2"
  //           placeholder="Apartment, studio, or floor"
  //         />
  //       </div>
  //       <div className="form-row">
  //         <div className="form-group col-md-6">
  //           <label htmlFor="inputCity">City</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="inputCity"
  //           />
  //         </div>
  //         <div className="form-group col-md-4">
  //           <label htmlFor="inputState">State</label>
  //           <select
  //             id="inputState"
  //             className="form-control"
  //           >
  //             <option value="">Choose...</option>
  //             <option value="State1">State1</option>
  //             <option value="State2">State2</option>
  //           </select>
  //         </div>
  //         <div className="form-group col-md-2">
  //           <label htmlFor="inputZip">Zip</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="inputZip"
  //           />
  //         </div>
  //       </div>
  //       <div className="form-group">
  //         <div className="form-check">
  //           <input
  //             className="form-check-input"
  //             type="checkbox"
  //             id="gridCheck"
  //           />
  //           <label className="form-check-label" htmlFor="gridCheck">
  //             Check me out
  //           </label>
  //         </div>
  //       </div>
  //       <button
  //         type="submit"
  //         className="btn btn-primary"
  //         onClick={handleSubmit}
  //       >
  //         Sign in
  //       </button>
  //     </form>

  //     {/* Display the input data below the form */}
  //     <div className="mt-4">
  //       <h3>Entered Data:</h3>
  //       <p><strong>Email:</strong> {submittedData.email}</p>
  //       <p><strong>Password:</strong> {submittedData.password}</p>
  //       <p><strong>Address:</strong> {submittedData.address}</p>
  //       <p><strong>Address 2:</strong> {submittedData.address2}</p>
  //       <p><strong>City:</strong> {submittedData.city}</p>
  //       <p><strong>State:</strong> {submittedData.state}</p>
  //       <p><strong>Zip:</strong> {submittedData.zip}</p>
  //       <p><strong>Checked:</strong> {submittedData.checked ? "Yes" : "No"}</p>
  //     </div>
  //  </>
  // );

//   return (
//     <>
        
//   <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

// </>
// }

// export default App;


//   const [form, setForm] = useState({checkBox: true, email: "", password: "",address: "", address2: "", city: "",state: "", zip: "", });
//   const validateForm = () => {
//     if (!form.email.includes("@")) {
//       alert("Please enter a valid email address.");
//       return false;
//     }
//     if (form.password.length < 6) {
//       alert("Password must be at least 6 characters long.");
//       return false;
//     }
//     if (form.address === "") {
//       alert("Address cannot be empty.");
//       return false;
//     }
//     if (form.address2=== "") {
//       alert("Address2 cannot be empty.");
//       return false;
//     }
//     if (form.city === "") {
//       alert("City cannot be empty.");
//       return false;
//     }
//     if (form.state === "") {
//       alert("Please select a state.");
//       return false;
//     }
//     if (!/^\d{6}$/.test(form.zip)) {
//       alert("Zip code must be 6 digits.");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       console.log("Form data: ", form);
      
//     }
//   };

//   const formRef = useRef();

//   return (
//     <>
//       <form ref={formRef}>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="inputEmail4">Email</label>
//             <input type="email" className="form-control" id="inputEmail4" placeholder="Email"
//              onChange={(e) => 
//               setForm({ ...form, email: e.target.value })}
//               value={form.email}
//             />
//           </div>
//           <div className="form-group col-md-6">
//             <label htmlFor="inputPassword4">Password</label>
//             <input type="password" className="form-control" id="inputPassword4" placeholder="Password"
//               onChange={(e) => 
//             setForm({ ...form, password: e.target.value })}
//               value={form.password}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputAddress">Address</label>
//           <input
//             type="text" className="form-control"  id="inputAddress" placeholder="Address"
//           onChange={(e) => 
//             setForm({ ...form, address: e.target.value })}
//             value={form.address}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="inputAddress2">Address 2</label>
//           <input type="text"  className="form-control" id="inputAddress2" placeholder="Address 2"
//           onChange={(e) =>
//            setForm({ ...form, address2: e.target.value })}
//            value={form.address2}
//           />
//         </div>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="inputCity">City</label>
//             <input  type="text"  className="form-control" id="inputCity"
//             onChange={(e) => 
//               setForm({ ...form, city: e.target.value })}
//               value={form.city}
//             />
//           </div>
//           <div className="form-group col-md-4">
//             <label htmlFor="inputState">State</label>
//             <select  id="inputState" className="form-control"
//              onChange={(e) => 
//               setForm({ ...form, state: e.target.value })}
//               value={form.state}
//             >
//               <option value="" disabled>
//               </option>
//               <option>Andhra Pradesh</option>
//               <option>Telangana</option>
//               <option>Kerala</option>
//             </select>
//           </div>
//           <div className="form-group col-md-2">
//             <label htmlFor="inputZip">Zip</label>
//             <input  type="text"  className="form-control" id="inputZip"
//              onChange={(e) => setForm({ ...form, zip: e.target.value })}
//               value={form.zip}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <div className="form-check">
//             <input type="checkbox" className="form-check-input"  id="gridCheck" checked={form.checkBox}
//             onChange={(e) =>
// setForm({ ...form, checkBox: e.target.checked })
//               }
//             />
//             <label className="form-check-label" htmlFor="gridCheck">
//               Check me out
//             </label>
//           </div>
//         </div>
//         {form.checkBox && <button  type="submit" className="btn btn-primary"  onClick={handleSubmit}> Sign in</button>}
//         <br />
//         <div>
//           <p>Email: {form.email}</p>
//           <p>Password: {form.password}</p>
//           <p>Address: {form.address}</p>
//           <p>Address 2: {form.address2}</p>
//           <p>City: {form.city}</p>
//           <p>State: {form.state}</p>
//           <p>Zip: {form.zip}</p>
//         </div>
//       </form>
//     </>
//   );
// }

// export default App;



const formRef = useRef();

  const validateForm = () => {
    const formElements = formRef.current.elements;
    const email = formElements.inputEmail4.value;
    const password = formElements.inputPassword4.value;
    const address = formElements.inputAddress.value;
    const address2 = formElements.inputAddress2.value;
    const city = formElements.inputCity.value;
    const state = formElements.inputState.value;
    const zip = formElements.inputZip.value;

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
    if (address === "") {
      alert("Address cannot be empty.");
      return false;
    }
    if (address2 === "") {
      alert("Address2 cannot be empty.");
      return false;
    }
    if (city === "") {
      alert("City cannot be empty.");
      return false;
    }
    if (state === "") {
      alert("Please select a state.");
      return false;
    }
    if (!/^\d{6}$/.test(zip)) {
      alert("Zip code must be 6 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formElements = formRef.current.elements;
      const formData = {
        email: formElements.inputEmail4.value,
        password: formElements.inputPassword4.value,
        address: formElements.inputAddress.value,
        address2: formElements.inputAddress2.value,
        city: formElements.inputCity.value,
        state: formElements.inputState.value,
        zip: formElements.inputZip.value,
        checkBox: formElements.gridCheck.checked,
      };

      console.log("Form data: ", formData);
    }
  };

  return (
    <>
      <form ref={formRef}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="Address" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Address 2</label>
          <input type="text" className="form-control" id="inputAddress2" placeholder="Address 2" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control">
              <option value="" disabled></option>
              <option>Andhra Pradesh</option>
              <option>Telangana</option>
              <option>Kerala</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign in</button>
        <br />
      </form>
    </>
  );
}

export default App;
import React, {useState} from "react"

function Contact() {
  const [data ,setData]= useState({
    FullName : "",
    Phone: "",
    Email: "",
    Message: ""
  });
  const InputEvent= (event)=>{
    const {name, value}= event.target;
    setData((preVal)=>{
      return{
        ... preVal,
        [name]:value,
      };
    });
  };
  const FormSubmit=(e)=>{
    e.preventDefault();
    alert(`My name is ${data.FullName} . My contact number is ${data.Phone} and email is ${data.Email}. Here is message:"${data.Message}" ` )

  }
    return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Full Name</label>
                <input type="text" name="FullName" value={data.FullName} onChange={InputEvent} className="form-control mt-3" id="exampleFormControlInput1" placeholder="Full Name" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput2">Phone</label>
                <input type="number" name="Phone" value={data.Phone} onChange={InputEvent} className="form-control mt-3" id="exampleFormControlInput2" placeholder="Number" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlInput3">Email address</label>
                <input type="email" name="Email" value={data.Email} onChange={InputEvent} className="form-control mt-3" id="exampleFormControlInput3" placeholder="name@example.com" />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control mt-3" name="Message" value={data.Message} onChange={InputEvent} id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
              </div>
              <button type="submit" className="btn btn-primary mt-3 mb-2">Submit</button>
            </form>
          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;

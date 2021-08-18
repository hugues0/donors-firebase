import React, { useState, useEffect } from "react";
import fireDb from '../firebase'
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";

const AddEdit = () => {
  const values = {
    name: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [initialState, setState] = useState(values);
  const { name, mobile, email, address } = initialState;
  const history = useHistory()
  const handleInputChange = (e) => {
      let {name,value} = e.target
      setState({
          ...initialState,
          [name]:value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fireDb.child("contacts").push(initialState,(err) =>{
        if(err) {
            console.log(err)
        }
    })
    history.push('/')
  };

  return (
    <div>
      <div className="container mt-5 text-center">
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="bmd-label-floating">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="bmd-label-floating">Mobile</label>
                <input
                  type="number"
                  className="form-control"
                  value={mobile}
                  name="mobile"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="bmd-label-floating">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label className="bmd-label-floating">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  name="address"
                  onChange={handleInputChange}
                />
              </div>
              <button className="btn btn-default">Cancel</button>
              <button type="submit" className="btn btn-success btn-raised">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEdit;

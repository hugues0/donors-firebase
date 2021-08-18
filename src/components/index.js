import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";

const ListRecord = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        snapshot({});
      }
    });
  }, []);

  const onDelete = (id) => {
      if(window.confirm("Are you sure you want to delete this record")) {
          fireDb.child(`contacts/${id}`).remove((err) => {
              if(err) {
                  console.log(err);
              }
          })
      }
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="jumbotron">
            <h2 className="display-2 text-center">Contacts management system</h2>
          </div>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id, index) => {
                return (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{data[id].name}</td>
                    <td>{data[id].mobile}</td>
                    <td>{data[id].email}</td>
                    <td>{data[id].address}</td>
                    <td className="text-center">
                      <Link to={"/update/${id}"}>
                        <a className="btn text-primary">
                          <i className="fas fa-pencil-alt" />
                        </a>
                      </Link>

                      <a className="btn text-danger" onClick={() => onDelete(id)}>
                        <i className="fas fa-trash-alt" />
                      </a>

                      <Link to={"/view/${id}"}>
                        <a className="btn text-info">
                          <i className="fas fa-eye" />
                        </a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListRecord;

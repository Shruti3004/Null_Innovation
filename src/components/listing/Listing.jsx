import React, { useState } from "react";
import List from "./List";
import { Link } from "react-router-dom";

function Listing() {
  const data = JSON.parse(localStorage.getItem("mobileInfo"));
  const [search, setSearch] = useState("");
  const filteredItems = data.filter((product) => {
    return product.brand.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <div className="container">
        <input
          type="text"
          className="form-control text-blue my-4"
          placeholder="Search the product with brand"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="row">
          {data ? (
            filteredItems.length > 0 ? (
              filteredItems.map((info, index) => {
                return <List data={info} key={index} />;
              })
            ) : (
              <h4 className="text-center text-danger font-weight-bold mt-4 px-3 pb-5 w-100">
                No items matched your search
              </h4>
            )
          ) : (
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 center">
              <div>
                <h3 className="text-blue text-center font-weight-bold mb-3">
                  Currently you have not added any product
                </h3>
                <Link to="/" className="d-flex justify-content-center">
                  <button
                    className="bg-primaryColor text-white font-weight-bold py-2 px-5"
                    style={{ border: "none" }}
                  >
                    Add Details
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Listing;

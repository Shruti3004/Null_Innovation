import React from "react";

function List({ data }) {
  const { name, brand, price, color, ram, rom } = data;
  return (
    <>
      <div className="col-lg-4 col-md-4 col-sm-12 col-12 my-3">
        <div className="card p-3">
          <div className="bg-primaryColor text-white font-weight-bold text-center py-2 mb-3">
            {name}
          </div>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="font-weight-bold text-blue">Brand:</span> {brand}
            </li>
            <li className="list-group-item">
              <span className="font-weight-bold text-blue">Price:</span> {price}
            </li>
            <li className="list-group-item">
              <span className="font-weight-bold text-blue">Color:</span> {color}
            </li>
            <li className="list-group-item">
              <span className="font-weight-bold text-blue">RAM:</span> {ram}
            </li>
            <li className="list-group-item">
              <span className="font-weight-bold text-blue">ROM:</span> {rom}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;

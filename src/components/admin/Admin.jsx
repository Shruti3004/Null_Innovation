import React, { useState } from "react";
import swal from "sweetalert";

function Admin() {
  const initialState = {
    name: "",
    brand: "",
    price: "",
    color: "",
    ram: "",
    rom: "",
  };
  const [info, setInfo] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      info.name &&
      info.brand &&
      info.price &&
      info.color &&
      info.ram &&
      info.rom
    ) {
      let data = [];
      data = JSON.parse(localStorage.getItem("mobileInfo")) || data;
      data.push(info);
      localStorage.setItem("mobileInfo", JSON.stringify(data));
      swal("Your information is added!", "", "success");
      setInfo(initialState);
    } else {
      swal({
        title: "Please fill in all the details",
        icon: "warning",
        dangerMode: true,
      });
    }
  };
  return (
    <div id="details">
      <div className="container">
        <div className="row center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="card px-4 pb-5 pt-4">
              <h2 className="text-blue font-weight-bold text-center mb-4">
                Add your details
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    value={info.name}
                    className="form-control"
                    placeholder="Mobile name"
                    onChange={(e) => {
                      setInfo({ ...info, name: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={info.brand}
                    className="form-control"
                    placeholder="Brand"
                    onChange={(e) =>
                      setInfo({ ...info, brand: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={info.price}
                    className="form-control"
                    placeholder="Price"
                    onChange={(e) =>
                      setInfo({ ...info, price: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={info.color}
                    className="form-control"
                    placeholder="Color"
                    onChange={(e) =>
                      setInfo({ ...info, color: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={info.ram}
                    className="form-control"
                    placeholder="RAM"
                    onChange={(e) => setInfo({ ...info, ram: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={info.rom}
                    className="form-control"
                    placeholder="ROM"
                    onChange={(e) => setInfo({ ...info, rom: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primaryColor text-white font-weight-bold py-2 w-100"
                  style={{ border: "none" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;

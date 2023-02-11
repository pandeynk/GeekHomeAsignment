import { Link } from "react-router-dom";

const ClaimForm = function ({ setCurrentStep }) {
  return (
    <div id="stepOne">
      <form>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="row mt-3">
              <div className="col">
                <h5>Claim Pre-Qualification</h5>
              </div>
              <div className="col" style={{ textAlign: "right" }}>
                <Link className="">Claims History & Status</Link>
              </div>
            </div>

            <hr></hr>

            <div className="row">
              <div className="col">
                <p>
                  To get started with the claim process please answer the
                  following questions.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>
                  <strong>Do you still have pocession of devices?</strong>
                </p>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="flexRadioDefault11"
                  />
                  <label className="form-check-label" for="flexRadioDefault11">
                    Yes, I have the device
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault1"
                    id="flexRadioDefault12"
                  />
                  <label className="form-check-label" for="flexRadioDefault12">
                    No, I do not have the device
                  </label>
                </div>
              </div>
            </div>

            <hr />

            <div className="row mt-4">
              <div className="col">
                <p>
                  <strong>Is your device damaged in some way?</strong>
                </p>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault21"
                  />
                  <label className="form-check-label" for="flexRadioDefault21">
                    Yes, I have the device
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault2"
                    id="flexRadioDefault22"
                  />
                  <label className="form-check-label" for="flexRadioDefault22">
                    No, I do not have the device
                  </label>
                </div>
              </div>
            </div>

            <hr />

            <div className="row mt-4">
              <div className="col">
                <p>
                  <strong>
                    Confirm the device Category, Brand and Model or select this
                    information below.
                  </strong>
                </p>

                <div className="mt-3">
                  <label htmlFor="deviceType">Device Type</label>
                  <select className="form-control" name="" id="deviceType">
                    <option value="Laptop">Laptop</option>
                    <option value="Desktop">Desktop</option>
                  </select>
                </div>

                <div className="mt-3">
                  <label htmlFor="brand">Brand</label>
                  <input type="text" className="form-control" id="brand" />
                </div>

                <div className="mt-3">
                  <label htmlFor="Model">Model</label>
                  <input type="text" className="form-control" id="Model" />
                </div>

                <div className="mt-3">
                  <label htmlFor="DeviceNickname">Device Nickname</label>
                  <input
                    type="text"
                    className="form-control"
                    id="DeviceNickname"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="PurchasePrice">Purchase Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="PurchasePrice"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="SerialNumber">Serial Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="SerialNumber"
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="PurchaseDate">Purchase Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="PurchaseDate"
                  />
                </div>

                <p className="mt-3">
                  <small>
                    Upon confirmation you will be redirected to our Assurant
                    claim site.
                  </small>
                </p>

                <button
                  className="btn btn-primary mb-5"
                  onClick={() => setCurrentStep(2)}
                >
                  Start a claim
                </button>
              </div>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </form>
    </div>
  );
};

export default ClaimForm;

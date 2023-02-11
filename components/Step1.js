import LaptopImg from "./../images/laptop.png";

const Step1 = function ({ setCurrentStep }) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="card mb-5">
          <div className="card-header">
            <h4 className="card-title">
              <strong>Incident Information</strong>
            </h4>

            <div className="row mt-3 mb-2">
              <div className="col">
                <small>Step 1/4</small>
                <small style={{ float: "right" }}>Next: Service Options</small>
                <div className="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "0%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Step 1
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="form">
              <div className="row">
                <div className="col">
                  <p>
                    <strong>Please tell us what happened</strong>
                  </p>
                  <div className="mt-3">
                    <label htmlFor="doi">Date of incident</label>
                    <input type="date" className="form-control" id="doi" />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="reason">
                      Describe the issue or reason for the incident
                    </label>
                    <textarea
                      name=""
                      id="reason"
                      cols="30"
                      rows="3"
                      className="form-control"
                    ></textarea>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="selectReason">
                      Select the reason for your claim/request.
                    </label>
                    <select name="" id="selectReason" className="form-control">
                      <option value="Reason 1">Reason 1</option>
                      <option value="Reason 2">Reason 2</option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                      />
                      <label class="custom-control-label" for="customCheck1">
                        &nbsp;&nbsp;Check this custom checkbox
                      </label>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-outline-primary" disabled>
                          Back
                        </button>
                      </div>
                      <div className="col">
                        <button
                          className="btn btn-primary"
                          style={{ float: "right" }}
                          onClick={() => setCurrentStep(2)}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                <img src={LaptopImg} style={{ height: "50px" }} />
              </div>
              <div className="col-10">
                <h5 class="card-title">Diane's Macbook</h5>
                <h6 class="card-subtitle mb-2 text-muted">Macbook Pro</h6>
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-4">Policy Number</div>
              <div className="col-8" style={{ textAlign: "right" }}>
                KJBH-DHSH-2324-JHSH
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-4">Serial Number</div>
              <div className="col-8" style={{ textAlign: "right" }}>
                KJBH-DHSH-2324-JHSH
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-5">Policy Start Date</div>
              <div className="col-7" style={{ textAlign: "right" }}>
                01/01/1990
              </div>
            </div>
            <hr />

            <div className="row">
              <div className="col-5">Policy End Date</div>
              <div className="col-7" style={{ textAlign: "right" }}>
                01/01/1990
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;

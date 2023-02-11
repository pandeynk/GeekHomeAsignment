import LaptopImg from "./../images/laptop.png";

const Step4 = function ({ setCurrentStep }) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="card mb-5">
          <div className="card-header">
            <h4 className="card-title">
              <strong>Summary</strong>
            </h4>

            <div className="row mt-3 mb-2">
              <div className="col">
                <small>Step 4/4</small>
                <small style={{ float: "right" }}>Next: Confirmation</small>
                <div className="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Step 3
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="form">
              <div className="row">
                <div className="col">
                  <div className="row mt-3">
                    <div className="col">
                      <strong>Claim Details</strong>
                      <small style={{ float: "right" }}>Edit</small>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <small>Date of incident</small>
                      <small style={{ float: "right" }}>01/01/1990</small>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <small>Reason for claim</small>
                      <small style={{ float: "right" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <small>Description</small>
                      <small style={{ float: "right" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <strong>Fulfilment information</strong>
                      <small style={{ float: "right" }}>
                        Need a different repair option
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">Send to us</div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <small>Delivery Address</small>
                    </div>
                    <div className="col">
                      <div style={{ textAlign: "right" }}>
                        <div>
                          <small>123 Main Street</small>
                        </div>
                        <div>
                          <small>Atlantis, Georgia, 30031</small>
                        </div>
                        <div>
                          <small>United States</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      <strong>Personal information</strong>
                      <small style={{ float: "right" }}>Edit</small>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <small>Full Name</small>
                      <small style={{ float: "right" }}>Steve Smith</small>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <small>Delivery Address</small>
                    </div>
                    <div className="col">
                      <div style={{ textAlign: "right" }}>
                        <div>
                          <small>123 Main Street</small>
                        </div>
                        <div>
                          <small>Atlantis, Georgia, 30031</small>
                        </div>
                        <div>
                          <small>United States</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col">
                      <small>Email Adress</small>
                      <small style={{ float: "right" }}>
                        steve.smith@email.com
                      </small>
                    </div>
                  </div>
                  <hr />

                  <div className="row mb-2">
                    <div className="col">
                      <small>Contact Number</small>
                      <small style={{ float: "right" }}>+19876543210</small>
                    </div>
                  </div>
                  <hr />

                  <div className="mt-3">
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => setCurrentStep(3)}
                        >
                          Back
                        </button>
                      </div>
                      <div className="col">
                        <button
                          className="btn btn-primary"
                          style={{ float: "right" }}
                          onClick={() => setCurrentStep(5)}
                        >
                          Submit
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

export default Step4;

import LaptopImg from "./../images/laptop.png";

const Step3 = function ({ setCurrentStep }) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="card mb-5">
          <div className="card-header">
            <h4 className="card-title">
              <strong>Service Fulfilment</strong>
            </h4>

            <div className="row mt-3 mb-2">
              <div className="col">
                <small>Step 3/4</small>
                <small style={{ float: "right" }}>Next: Summary</small>
                <div className="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "50%" }}
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
                  <p>
                    <strong>Mail in Repair</strong>
                  </p>

                  <div className="row mt-3">
                    <div className="col">
                      <p>
                        Once your product is repaired, it will be shipped to the
                        address provided below via
                        <button className="btn btn-link">
                          standard shipping
                        </button>{" "}
                        (1 business day)
                      </p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Same as policy
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          New address
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3 mb-2">
                    <div className="col">
                      <strong>Steve Smith</strong>
                      <div>123 Main street</div>
                      <div>Atlanta, Georgia, 30031</div>
                      <div>United States</div>
                      <div>steve.smith@email.com</div>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => setCurrentStep(2)}
                        >
                          Back
                        </button>
                      </div>
                      <div className="col">
                        <button
                          className="btn btn-primary"
                          style={{ float: "right" }}
                          onClick={() => setCurrentStep(4)}
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

export default Step3;

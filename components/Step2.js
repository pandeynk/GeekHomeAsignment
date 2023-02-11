import LaptopImg from "./../images/laptop.png";

import "./Step2.css";

const Step2 = function ({ setCurrentStep }) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="card mb-5">
          <div className="card-header">
            <h4 className="card-title">
              <strong>Service Options</strong>
            </h4>

            <div className="row mt-3 mb-2">
              <div className="col">
                <small>Step 2/4</small>
                <small style={{ float: "right" }}>
                  Next: Service Fulfilment
                </small>
                <div className="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    Step 2
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
                    <strong>
                      Select how would you like your product to be serviced
                    </strong>
                  </p>

                  <div className="alert alert-info">
                    <p>Service option(s) are for your product located at</p>
                    <p>
                      <strong>
                        1113, Pinceton Valley, Summer bay, Florida
                      </strong>
                    </p>
                    <hr />
                    <p>
                      Not your product location?{" "}
                      <button className="btn btn-link">
                        Enter a new address
                      </button>
                    </p>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="card card-select card-active">
                        <div className="card-body">
                          <h5 className="card-title">Mail in repair</h5>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Assumenda laboriosam maiores a, magnam error
                            quibusdam aliquid, reiciendis quaerat, voluptatem
                            placeat sunt quae! Soluta vitae placeat
                            reprehenderit voluptatem? Itaque, vitae autem.
                          </p>
                          <strong>Deductible</strong>
                          <strong style={{ float: "right" }}>50$</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card card-select">
                        <div className="card-body">
                          <h5 className="card-title">In store repair</h5>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Assumenda laboriosam maiores a, magnam error
                            quibusdam aliquid, reiciendis quaerat, voluptatem
                            placeat sunt quae! Soluta vitae placeat
                            reprehenderit voluptatem? Itaque, vitae autem.
                          </p>
                          <strong>Deductible</strong>
                          <strong style={{ float: "right" }}>50$</strong>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <div className="card card-select">
                        <div className="card-body">
                          <h5 className="card-title">Reimburshment</h5>
                          <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Assumenda laboriosam maiores a, magnam error
                            quibusdam aliquid, reiciendis quaerat, voluptatem
                            placeat sunt quae! Soluta vitae placeat
                            reprehenderit voluptatem? Itaque, vitae autem.
                          </p>
                          <strong>Deductible</strong>
                          <strong style={{ float: "right" }}>50$</strong>
                        </div>
                      </div>
                    </div>
                    <div className="col"></div>
                  </div>

                  <div className="mt-3">
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => setCurrentStep(1)}
                        >
                          Back
                        </button>
                      </div>
                      <div className="col">
                        <button
                          className="btn btn-primary"
                          style={{ float: "right" }}
                          onClick={() => setCurrentStep(3)}
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

export default Step2;

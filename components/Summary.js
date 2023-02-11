import { Link } from "react-router-dom";
import LaptopImg from "./../images/laptop.png";
import PaymentImg from "./../images/payment.png";

const Summary = function ({ setRootStep }) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="card mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <strong>Claim number : DX12345DSW</strong>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
                  nihil doloremque, temporibus sit maiores cumque dolor officia
                  nesciunt possimus, beatae nostrum quod in quos itaque quis
                  eveniet mollitia laboriosam velit.
                </p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque ad necessitatibus animi voluptas odio nam nobis. Magni,
                  ea dolores? Error autem nulla vitae doloremque dolorem
                  necessitatibus eveniet deserunt. Quidem, impedit?
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col" style={{ textAlign: "center" }}>
                <strong className="text-danger">
                  Thank you - your payment details have been confirmed.
                </strong>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col" style={{ textAlign: "center" }}>
                <img src={PaymentImg} />
              </div>
            </div>

            <p className="mt-3">
              <small>
                In that event you are unable to successfully submit your
                deductible payment.{" "}
                <Link className="btn-link">Please contact us</Link>
              </small>
            </p>

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

                  <div className="row">
                    <div className="col">
                      <strong>Claim history</strong>
                      <div>
                        <small>Claim submitted</small>
                      </div>
                      <div>
                        <small>Date reported : 01/01/1990</small>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div className="mt-3">
                    <div className="row">
                      <div className="col">
                        <Link className="btn btn-primary" onClick={() => setRootStep(1)}>
                          Go to claim dashboard
                        </Link>
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

export default Summary;

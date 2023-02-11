import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Account from "./pages/Account";
import MyDevices from "./pages/MyDevices";
import TechServices from "./pages/TechServices";
import FileAClaim from "./pages/FIleAClaim";

import FooterLogo from "./images/assurant-footer-logo.png";
import SSLLogo from "./images/ssl-logo.jpeg";
import PCILogo from "./images/pci-logo.jpeg";

import "./App.css";

const App = function () {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col">
          <div className="alert alert-primary">
            <h5 className="text-white" style={{ paddingLeft: "4rem" }}>
              File A Claim
            </h5>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <Switch>
          <Route path="/">
            <FileAClaim />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/my-devices">
            <MyDevices />
          </Route>
          <Route path="/tech-services">
            <TechServices />
          </Route>
          <Route path="/file-a-claim">
            <FileAClaim />
          </Route>
        </Switch>
      </div>

      <div className="alert alert-primary">
        <div className="row">
          <div className="col pt-2">
            <img src={FooterLogo} />
            <p className="text-white mt-2">
              <small>© 2023 Assurant Inc. All rights reserved</small>
            </p>
          </div>
          <div className="col pt-2" style={{ textAlign: "right" }}>
            <img src={SSLLogo} />
            <img style={{ marginLeft: "0.5rem" }} src={PCILogo} />
            <p className="text-white mt-2">
              <small style={{ marginLeft: "0.5rem" }}>
                <Link className="text-white">Support Details</Link>
              </small>
              <small style={{ marginLeft: "0.5rem" }}>
                <Link className="text-white">Privacy Policy</Link>
              </small>
              <small style={{ marginLeft: "0.5rem" }}>
                <Link className="text-white">Terms of Service</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

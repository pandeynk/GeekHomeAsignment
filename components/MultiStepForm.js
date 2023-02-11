import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Summary from "./Summary";

const MultiStepForm = function ({ setRootStep }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="container">
      {currentStep === 1 && <Step1 setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <Step2 setCurrentStep={setCurrentStep} />}
      {currentStep === 3 && <Step3 setCurrentStep={setCurrentStep} />}
      {currentStep === 4 && <Step4 setCurrentStep={setCurrentStep} />}
      {currentStep === 5 && <Summary setRootStep={setRootStep} />}
    </div>
  );
};

export default MultiStepForm;

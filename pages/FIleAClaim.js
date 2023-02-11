import { useState } from "react";

import ClaimForm from "../components/ClaimForm";
import MultiStepForm from "../components/MultiStepForm";


const FileAClaim = function () {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      {currentStep === 1 && <ClaimForm setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <MultiStepForm setRootStep={setCurrentStep} />}
    </>
  );
};

export default FileAClaim;

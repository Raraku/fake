import React from "react";
import Button from "@material-ui/core/Button";
import Signup from "./SignUp";
import Profile from "./Profile";

const SignStepper = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(1);
  };
  if (activeStep === 0) {
    return (
      <div>
        <Signup next={handleNext} {...props} />
      </div>
    );
  }
  if (activeStep === 1) {
    return <Profile {...props} />;
  }
};
export default SignStepper;

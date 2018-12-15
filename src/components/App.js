import React from "react";
import BottomNavigation from "./navigation/BottomNavigation";
import FirstStep from "./steps/FirstStep"
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep"
import FourthStep from "./steps/FourthStep"
import Final from "./steps/Final"
import { validate } from "./Validation"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentStep: 0,
      values: {
        name: "",
        email: "",
        country: "",
        avatar: ""
      }, 
      errors: {
        name: "",
        email: "",
        country: "",
        avatar: ""
      }
    }
  };

  nextStep = () => {
    const currentErrors = validate(this.state.values, this.state.currentStep);
    if (Object.keys(currentErrors).length === 0) {
      const { currentStep } = this.state;
      const newCurrentStep = currentStep + 1;
      this.setState(prevState =>({
          ...prevState,
          currentStep: newCurrentStep,
      }));
  } else {
      this.setState(prevState => ({
          ...prevState,
          errors: currentErrors
      }));
  }
  };

  prevStep = () => {
    const newCurrentStep = this.state.currentStep - 1;
    this.setState(prevState =>({
      ...prevState,
      currentStep: newCurrentStep
      }));
  };


  onChange = event => {
    const newValues = {
        ...this.state.values,
        [event.target.name]: event.target.value
    };

    const newErrors = {
      ...this.state.errors,
      [event.target.name]: false
    };

    this.setState(prevState => ({
        ...prevState,
        values: newValues,
        errors: newErrors
    }));
  };

  onChangeAvatar = event => {
    const newValues = {
      ...this.state.values,
      avatar: event.target.name
    };

    const newErrors = {
      ...this.state.errors,
      avatar: false
    };

    this.setState(prevState => ({
      ...prevState,
      values: newValues,
      errors: newErrors
    }))
  }

  render() {
    const {currentStep, values, errors} = this.state;
    return (
      <div className="form_container">
              <form className="form card-body">
                {(currentStep === 0) && <FirstStep onChange={this.onChange} values={values} errors={errors}/>}
                {(currentStep === 1) && <SecondStep onChange={this.onChange} values={values} errors={errors}/>}
                {(currentStep === 2) && <ThirdStep onChange={this.onChange} values={values} errors={errors}/>}
                {(currentStep === 3) && <FourthStep onChangeAvatar={this.onChangeAvatar} errors={errors}/>}
                {(currentStep === 4) && <Final values={values}/>}
                <BottomNavigation nextStep={this.nextStep} prevStep={this.prevStep} currentStep={currentStep}/>
              </form>
            </div>
    );
  }
}

export default App;

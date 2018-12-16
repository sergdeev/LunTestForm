import React from "react";
import BottomNavigation from "./navigation/BottomNavigation";
import TopNavigation from "./navigation/TopNavigation";
import FirstStep from "./steps/FirstStep"
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep"
import FourthStep from "./steps/FourthStep"
import Final from "./steps/Final"
import { validate } from "./Validation"
import cities from "../data/cities";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentStep: 0,
      values: {
        name: "",
        email: "",
        country: "",
        city: "",
        avatar: "",
        fbIsChecked: false,
        twitIsChecked: false,
        vkIsChecked: false,
        okIsChecked: false,
        fbValue: "",
        vkValue: "",
        twitValue: "",
        okValue: "",
      }, 
      errors: {
        name: "",
        email: "",
        country: "",
        avatar: "",
        fbIsChecked: "",
        tweetIsChecked: "",
        vkIsChecked: "",
        okIsChecked: ""
      },
      steps: [
        {
            id: 0,
            isActive: true,
            isCompleted: false
        },
        {
            id: 1,
            isActive: false,
            isCompleted: false
        },
        {
            id: 2,
            isActive: false,
            isCompleted: false
        },
        {
            id: 3,
            isActive: false,
            isCompleted: false
        }
      ],
      allCities: []
    }
  };

  nextStep = () => {
    const currentErrors = validate(this.state.values, this.state.currentStep);
    if (Object.keys(currentErrors).length === 0) {
      const { currentStep, steps } = this.state;
      const newCurrentStep = currentStep + 1;
      if(currentStep === 3){
        this.setState(prevState =>({
          ...prevState,
          currentStep: newCurrentStep
        }));
      }else{
        const newSteps = [...steps];
        newSteps[currentStep].isCompleted = true;
        newSteps[currentStep].isActive = false;
        newSteps[newCurrentStep].isActive = true;
        this.setState(prevState =>({
            ...prevState,
            currentStep: newCurrentStep,
            steps: newSteps
        }));
      }
  } else {
      this.setState(prevState => ({
          ...prevState,
          errors: currentErrors
      }));
  }
  };

  prevStep = () => {
    const { currentStep, steps } = this.state;
    const newSteps = [...steps];
    const newCurrentStep = currentStep - 1;
    newSteps[currentStep].isActive = false;
    newSteps[newCurrentStep].isActive = true;
    this.setState(prevState =>({
        ...prevState,
        currentStep: newCurrentStep,
        steps: newSteps
    }));
  };

  changeStep = event => {
    const newStep = +event.target.name;
    const { steps } = this.state;
    
    console.log(newStep);
    console.log(this.state.currentStep);
    console.log(steps[newStep].isCompleted);
    if(steps[newStep].isCompleted){
      this.setState({currentStep: newStep})
    }
  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const newValues = {
      ...this.state.values,
      [name]: value
    };

    const newErrors = {
      ...this.state.errors,
      [name]: false
    };

    this.setState(prevState => ({
      ...prevState,
      values: newValues,
      errors: newErrors
    }));
    if(name === "country"){
      this.selectCity(value);
    }
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

  onChangeSocial = event => {
    const name = event.target.name;
    const value = !this.state.values[name];
    const errorName = event.target.id;
    const newValues = {
      ...this.state.values,
      [name]: value
    };

    const newErrors = {
      ...this.state.errors,
      [errorName]: false
    };

    this.setState(prevState => ({
      ...prevState,
      values: newValues,
      errors: newErrors
    }));
  }


  selectCity = (countryCode) =>{
    const allCities = [];
    for(let key in cities){
      if(cities[key].country == countryCode){
        allCities.push({
          id: key,
          name: cities[key].name
        })
      }
    }
    this.setState(prevState=>({
      ...prevState,
      allCities: allCities
    }))
  };


  render() {
    const {currentStep, values, errors, steps, allCities } = this.state;
    return (
      <div className="form_container">
        <TopNavigation currentStep={currentStep} steps={steps} changeStep={this.changeStep}/>
        {(currentStep === 0) && <FirstStep onChange={this.onChange} values={values} errors={errors}/>}
        {(currentStep === 1) && <SecondStep onChange={this.onChange} values={values} errors={errors} allCities={allCities}/>}
        {(currentStep === 2) && <ThirdStep onChangeSocial={this.onChangeSocial} onChange={this.onChange} values={values} errors={errors}/>}
        {(currentStep === 3) && <FourthStep onChangeAvatar={this.onChangeAvatar} errors={errors}/>}
        {(currentStep === 4) && <Final values={values}/>}
        <BottomNavigation nextStep={this.nextStep} prevStep={this.prevStep} currentStep={currentStep}/>
      </div>
    );
  }
}

export default App;

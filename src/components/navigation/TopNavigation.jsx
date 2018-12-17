import React from "react";


export default function TopNavigation(props) {
    const getClassName = (step) => {
        let value = "top_button";
        if(step.isActive){
            value += " isActive";
        } else if(step.isCompleted){
            value += " isCompleted";
        }
        return value
    }

    const { steps, changeStep, currentStep } = props;
    return (
        <div className="buttons_container">
            {(currentStep !== 4) &&  
            <div>
                    {steps.map(step => (
                        <button
                            key={step.id}
                            name={step.id}
                            type="button"
                            className={getClassName(step)}
                            onClick={changeStep}
                            >
                            {step.id + 1}
                        </button>
                    ))}
            </div>
            }
        </div>
    );
}

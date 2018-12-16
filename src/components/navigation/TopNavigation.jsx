import React from "react";


export default class TopNavigation extends React.Component {

    getClassName = (step) => {
        let value = "top_button";
        if(step.isActive){
            value += " isActive";
        } else if(step.isCompleted){
            value += " isCompleted";
        }
        return value
    }

    render() {
        const { steps, changeStep, currentStep } = this.props;
        return (
            <div className="buttons_container">
                    {steps.map(step => (
                        <button
                            key={step.id}
                            name={step.id}
                            type="button"
                            className={this.getClassName(step)}
                            onClick={changeStep}
                            >
                            {step.id + 1}
                        </button>
                    ))}
            </div>
        );
    }
}

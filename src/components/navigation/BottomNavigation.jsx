import React from "react";


export default class BottomNavigation extends React.Component{
    render(){
        const { prevStep, nextStep, currentStep } = this.props;
        return(
            <div>
                {(currentStep !== 4)? (
                    <div>
                        <button
                            type="button"
                            className="btn"
                            onClick={prevStep}
                            disabled = {currentStep === 0}
                            >
                            Prev
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={nextStep}
                            >
                            {(currentStep === 3)? "Complete": "Next"}
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                            type="button"
                            className="btn"
                            onClick={()=>{
                                window.location.reload();
                            }}
                            >
                            Reset
                        </button>
                    </div>
                )
                }
            </div>
        );
    }
};


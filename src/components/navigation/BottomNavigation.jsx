import React from "react";


export default class BottomNavigation extends React.Component{
    render(){
        const { prevStep, nextStep, currentStep } = this.props;
        return(
            <div className="bottomButtons_container">
                {(currentStep !== 4)? (
                    <div>
                        <button
                            type="button"
                            className="btn"
                            onClick={prevStep}
                            disabled = {currentStep === 0}
                            >
                            Предыдущий
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={nextStep}
                            >
                            {(currentStep === 3)? "Завершить": "Следующий"}
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                            type="button"
                            className="special_btn"
                            onClick={()=>{
                                window.location.reload();
                            }}
                            >
                            Пройти заново
                        </button>
                    </div>
                )
                }
            </div>
        );
    }
};


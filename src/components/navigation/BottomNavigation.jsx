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
                        {(currentStep === 3)?
                        <button
                            type="button"
                            className="btn btn_special"
                            onClick={nextStep}
                        >
                            Завершить
                        </button> : 
                        <button
                            type="button"
                            className="btn"
                            onClick={nextStep}
                        >
                            Следующий
                        </button>
                        }
                    </div>
                ) : (
                    <div>
                        <button
                            type="button"
                            className="reset_btn btn_special"
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


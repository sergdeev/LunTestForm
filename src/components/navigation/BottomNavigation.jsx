import React from "react";

export default function BottomNavigation(props){
    const { prevStep, nextStep, currentStep } = props;
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
                            &lsaquo;  Предыдущий 
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
                            Следующий  &rsaquo;
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


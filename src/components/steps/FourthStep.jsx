import React from "react";
import cat1 from "../../images/cat1.jpg";
import cat2 from "../../images/cat2.jpg";
import cat3 from "../../images/cat3.jpg";
import dog4 from "../../images/dog4.jpg";

export default function FourthStep(props){
    const getActiveClass = value => {
        let className = "";
        if(props.values.avatar === value){
            className += "imgActive";
        }
        return className
    }

    const { onChangeAvatar, errors, values } = props;
    return(
        <div className="fourthStep_container">
            <div className="img_container">
                <div className={getActiveClass(cat1)} style={{'backgroundImage':`url(${cat1})`}} title={cat1} onClick={onChangeAvatar}></div>
                <div className={getActiveClass(cat2)} style={{'backgroundImage':`url(${cat2})`}} title={cat2} onClick={onChangeAvatar}></div>
                <div className={getActiveClass(cat3)} style={{'backgroundImage':`url(${cat3})`}} title={cat3} onClick={onChangeAvatar}></div>
                <div className={getActiveClass(dog4)} style={{'backgroundImage':`url(${dog4})`}} title={dog4} onClick={onChangeAvatar}></div>
            </div>
            {errors.avatar ? <div className="error">{errors.avatar}</div> : null}
        </div>  
    );
};


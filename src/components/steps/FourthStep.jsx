import React from "react";
import cat1 from "../../images/cat1.jpg";
import cat2 from "../../images/cat2.jpg";
import cat3 from "../../images/cat3.jpg";
import dog4 from "../../images/dog4.jpg";

export default class FourthStep extends React.Component{
    render(){
        const { onChangeAvatar, errors} = this.props;
        return(
            <div>
                <div className="img_container">
                    <img className="img" src={cat1} value="{cat1}" onClick={onChangeAvatar}/>
                    <img className="img" src={cat2} value={"cat2"} onClick={onChangeAvatar}/>
                    <img className="img" src={cat3} value={"cat3"} onClick={onChangeAvatar}/>
                    <img className="img" src={dog4} value={"dog4"} onClick={onChangeAvatar}/>
                </div>
                {errors.avatar ? <div>{errors.avatar}</div> : null}
            </div>  
        );
    }
};


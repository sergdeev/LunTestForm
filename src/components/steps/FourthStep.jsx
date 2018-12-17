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
                <p>4. Выберите любимого котика</p>
                <div className="img_container">
                    <img className="img" src={cat1} name={cat1} onClick={onChangeAvatar}/>
                    <img className="img" src={cat2} name={cat2} onClick={onChangeAvatar}/>
                    <img className="img" src={cat3} name={cat3} onClick={onChangeAvatar}/>
                    <img className="img" src={dog4} name={dog4} onClick={onChangeAvatar}/>
                </div>
                {errors.avatar ? <div className="error">{errors.avatar}</div> : null}
            </div>  
        );
    }
};

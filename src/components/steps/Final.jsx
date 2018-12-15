import React from "react";


export default class ThirdStep extends React.Component{
    render(){
        const { name, email, country, avatar } = this.props.values;
        return(
            <div>
               <div>
                   <span>{name}</span>
                   <span>{email}</span>
                   <span>{country}</span>
               </div>
               <img className="img" src={avatar}/>
            </div>
        );
    }
};


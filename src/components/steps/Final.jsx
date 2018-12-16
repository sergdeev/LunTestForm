import React from "react";
import countries from "../../data/countries.json";

export default class ThirdStep extends React.Component{
    render(){
        const { name, email, country, city, avatar, fbValue, vkValue, twitValue, okValue } = this.props.values;
        return(
            <div className="final_container">
               <div>
                   <h1>{name}</h1>
                   <span>{email}</span>
                   <span>{country}</span>
                   <span>{city}</span>
                   <span>{fbValue? `Facebook: ${fbValue}`: ""}</span>
                   <span>{vkValue? `Вконтакте: ${vkValue}`: ""}</span>
                   <span>{twitValue? `Twitter: ${twitValue}`: ""}</span>
                   <span>{okValue? `Одноклассники: ${okValue}`: ""}</span> 
               </div>
               <img className="img" src={avatar}/>
            </div>
        );
    }
};


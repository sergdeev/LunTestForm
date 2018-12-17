import React from "react";
import countries from "../../data/countries.json";

export default function ThirdStep(props){
    const { values: {name, email, country, city, avatar, fbValue, vkValue, twitValue, okValue}, allCities } = props;
    const cityName = allCities.find(item => item.id === city).name;
    const countryName = countries[country];
    return(
        <div className="final_container">
            <div className="final_data">
                <div className="final_title">{name}</div>
                <div>{email}</div>
                <br/>
                <div>{cityName}, {countryName}</div>
                <br/>
                <div>{fbValue? `Facebook: ${fbValue}`: ""}</div>
                <div>{vkValue? `Вконтакте: ${vkValue}`: ""}</div>
                <div>{twitValue? `Twitter: ${twitValue}`: ""}</div>
                <div>{okValue? `Одноклассники: ${okValue}`: ""}</div> 
            </div>
            <div className="final_image">
                <img src={avatar}/>
            </div>
        </div>
    );
};


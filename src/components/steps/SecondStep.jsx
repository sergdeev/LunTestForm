import React from "react";
import countries from "../../data/countries.json";


export default function SecondStep(props){

    const getOptionsCountry = items => {
        //const countries = JSON.stringify(items);
        const countries = [];
        for (var key in items) {
            countries.push({
                id: key,
                name: items[key]
            })
          }
          return getOptionsItems(countries);
    };

    const getOptionsItems = items => {
        return items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    }

    const addErrorClass = (error) => (error? 'invalid' : 'valid');

    const {values, onChange, errors, allCities} = props;
    return(
        <div className="country_container">
            <p>2. Выберете страну и город</p>
            <select
                id="country"
                name="country"
                value={values.country}
                onChange={onChange}
                className={`${addErrorClass(errors.country)}`}
                >
                <option>
                    Выберите страну
                </option>
                {getOptionsCountry(countries)}
            </select>
            {errors.country ? <div className="error">{errors.country}</div> : null}
            <select
                id="city"
                name="city"
                value={values.city}
                onChange={onChange}
                className={`${addErrorClass(errors.city)}`}
                >
                <option>
                    Выберите город
                </option>
                {getOptionsItems(allCities)}
            </select>
            {errors.country ? <div className="error">{errors.country}</div> : null}
        </div>
    );
};


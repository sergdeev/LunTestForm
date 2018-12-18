import React from "react";
import countries from "../../data/countries.json";
console.log(countries);
const countryUrl = "../../data/countries.json";

export default function SecondStep(props){

    const getOptionsCountry = items => {
       // const countryList = JSON.parse(items);
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
            <div className="input-group">
                <select
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    className={`${addErrorClass(errors.country)}`}
                    >
                    <option>
                        Страна
                    </option>
                    {getOptionsCountry(countries)}
                </select>
                {errors.country ? <div className="error">{errors.country}</div> : null}
            </div>
            <div className="input-group">
                <select
                        id="city"
                        name="city"
                        value={values.city}
                        onChange={onChange}
                        className={`${addErrorClass(errors.city)}`}
                        >
                        <option>
                            Город
                        </option>
                        {getOptionsItems(allCities)}
                    </select>
                    {errors.country ? <div className="error">{errors.country}</div> : null}
            </div>
        </div>
    );
};


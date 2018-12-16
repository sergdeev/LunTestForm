import React from "react";
import countries from "../../data/countries.json";


export default class SecondStep extends React.Component{

    getOptionsCountry = items => {
        //const countries = JSON.stringify(items);
        const countries = [];
        for (var key in items) {
            countries.push({
                id: key,
                name: items[key]
            })
          }
          return this.getOptionsItems(countries);
    };

    getOptionsItems = items => {
        return items.map(item => (
            <option key={item.id} value={item.id}>
                {item.name}
            </option>
        ));
    }


    render(){
        const {values, onChange, errors, allCities} = this.props;
        return(
           <div>
                <p>2. Выберете страну и город</p>
                <select
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    >
                    <option>
                        Выберите страну
                    </option>
                    {this.getOptionsCountry(countries)}
                </select>
                {errors.country ? <div className="error">{errors.country}</div> : null}
                <select
                    id="city"
                    name="city"
                    value={values.city}
                    onChange={onChange}
                    >
                    <option>
                        Выберите город
                    </option>
                    {this.getOptionsItems(allCities)}
                </select>
                {errors.country ? <div className="error">{errors.country}</div> : null}
            </div>
        );
    }
};


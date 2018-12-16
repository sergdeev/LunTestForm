import React from "react";
import countries from "../../data/countries.json";
import cities from "../../data/cities";

export default class SecondStep extends React.Component{

    getOptionsItems = items => {
        const countries = [];
        for (var key in JSON.stringify(items)) {
            countries.push({
                id: key,
                name: items[key]
            })
          }
        return countries.map(item => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
        ));
    };

    render(){
        const {values, onChange, errors} = this.props;
        return(
           <div>
                <p>2. Выберете страну и город</p>
                <select
                    id="country"
                    name="country"
                    value={values.country}
                    onChange={onChange}
                    >
                    {this.getOptionsItems(countries)}
                </select>
                {errors.country ? <div>{errors.country}</div> : null}
            </div>
        );
    }
};


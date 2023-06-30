import React from "react";
import Select from 'react-select';
import './BaseCurrencySelector.css'

const BaseCurrencySelector = ({rates, selectChange}) =>{
    const baseCurrencies = Object.keys(rates);
    const options = [];
    baseCurrencies.forEach(item =>{
        const el={};
        el.value = item;
        el.label = item;
        options.push(el);
    })
    const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: state.isSelected 
                ? "#250143" 
                : "#250143",
          backgroundColor: state.isSelected 
          ? "#f3a4f9" 
          :state.isFocused
          ? "#f3a4f9"
          : "#e2d4f8",
          fontWeight:state.isSelected
          ?"bold"
          :"normal",
          cursor:"pointer"
        }),
    
        control: (defaultStyles, state) => ({
            ...defaultStyles,
            backgroundColor: "#e2d4f8",
            padding: "4px 6px",
            width: "8rem",
            border: "2px solid #250143",
            boxShadow: "none",
            "&:hover": {
                borderColor: "#250143"
              }
          }),
        
        dropdownIndicator:(defaultStyles) =>({
          ...defaultStyles,
          color: "#250143",
          "&:hover": {
            cursor: "pointer",
            color: "#250143"
          }
        }),
        indicatorSeparator:(defaultStyles) =>({
            ...defaultStyles,
            backgroundColor: "#250143",
            width: "2px"
        }),
        menu: (defaultStyles) => ({
            ...defaultStyles,
            // kill the gap
            marginTop: "2px"
          }),
        menuList: (defaultStyles) => ({
            ...defaultStyles,
            // kill the white space on first and last option
            padding: 0
          }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#250143" }),
      };
    return(
        <div className="Base-currency-selector">
            <div id="Label-base-curr">Select base currency:</div>
            <Select 
                options={options}
                defaultValue={options[0]}
                styles={customStyles}
                onChange={selectChange}
            />
        </div>   
    );    
}

export default BaseCurrencySelector;
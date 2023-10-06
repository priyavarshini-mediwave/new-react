import React from "react";



function Input({label,name,type,placeholder,onChange,value}){
 


    return(
        <div className="inputdiv">
        <label>{label}</label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    )
    
}
export default Input;
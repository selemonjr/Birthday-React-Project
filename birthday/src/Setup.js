import { remove } from "@vue/shared";
import React,{useState} from "react";
import {data} from "./data"
const Setup = () => {
    const [value,SetValue] = useState(data);
    const remove = (id) => {
       let newPerson = value.filter((person) => person.id !== id);
       SetValue(newPerson)
    };
    const clear = () => {
        SetValue([])
    }
    return (
        <div>
            {value.map((person) => {
                const {id,name,img,age} = person;
                return (
                    <div className="container">
                    <div key={id} className="row">
                    <img src={img} alt=""/>
                    <h2 className="names">{name}</h2>
                    <h3 className="flex">{age}</h3>
                    <button className="btn" onClick={() => remove(id)}>Delete Item</button>
                    </div>
                    </div>
                )
            })};
            <div className="buttons">
                <button className="button" type="button" onClick={clear}>Clear Items</button>
            </div>
        </div>
    )
}

export default Setup

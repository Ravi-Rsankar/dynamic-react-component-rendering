import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
    const [numChildren, setNumChildren] = useState(0);
    const [radioButtonStates, setRadioButtonStates] = useState({});

    const handleAddChild = () => {
        setNumChildren(numChildren + 1);
    };

    const handleSave = (id, name, value, textInputValue) => {
        setRadioButtonStates((prevState) => {
            return {
                ...prevState,
                [id]: {
                    option1: prevState[id]?.option1 || "",
                    option2: prevState[id]?.option2 || "",
                    option3: prevState[id]?.option3 || "",
                    textInputValue: textInputValue || "",
                    [name]: value,
                },
            };
        });
    };

    const handleSaveAll = () => {
        console.log(radioButtonStates);
    };

    const renderChildren = () => {
        let children = [];
        for (let i = 0; i < numChildren; i++) {
            children.push(
                <Child key={i} id={i} handleSave={handleSave} />
            );
        }
        return children;
    };

    return (
        <div>
            <div className="button-container">
                <button onClick={handleAddChild}>Add</button>
                <button onClick={handleSaveAll}>Save</button>
            </div>
            <div className="radio-group-container">{renderChildren()}</div>
        </div>
    );
}

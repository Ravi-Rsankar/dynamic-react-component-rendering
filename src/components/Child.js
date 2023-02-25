import React, { useState } from "react";

export default function Child(props) {
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [selectedOption3, setSelectedOption3] = useState("");
    const [textInput, setTextInput] = useState("");

    const handleOption1Change = (event) => {
        setSelectedOption1(event.target.value);
        props.handleSave(props.id, "option1", event.target.value, textInput);
    };

    const handleOption2Change = (event) => {
        setSelectedOption2(event.target.value);
        props.handleSave(props.id, "option2", event.target.value, textInput);
    };

    const handleOption3Change = (event) => {
        setSelectedOption3(event.target.value);
        props.handleSave(props.id, "option3", event.target.value, textInput);
    };

    const handleTextInputChange = (event) => {
        setTextInput(event.target.value);
    };

    return (
        <div className="component-group">
            <div className="child-title">Child</div>
            <div className="radio-group">
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption1 === "option1"}
                            onChange={handleOption1Change}
                        />
                        Option 1
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="option2"
                            checked={selectedOption2 === "option2"}
                            onChange={handleOption2Change}
                        />
                        Option 2
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                            type="radio"
                            value="option3"
                            checked={selectedOption3 === "option3"}
                            onChange={handleOption3Change}
                        />
                        Option 3
                    </label>
                </div>
            </div>
            <div className="text-input">
                <label>
                    Text Input:
                    <input type="text" value={textInput} onChange={handleTextInputChange} />
                </label>
            </div>
        </div>
    );
}

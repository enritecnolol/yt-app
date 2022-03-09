import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'arabic',
        value: 'ar'
    },
    {
        label: 'English',
        value: 'en'
    }

];
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input
                        type="text"
                        onChange={e => setText(e.target.value)}
                        value={text}
                    />
                </div>
            </div>
            <Dropdown
                label="Select language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate;
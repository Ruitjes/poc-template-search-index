import React, {useState} from 'react';

function Checkbox(props) {
    const [rangeval, setRangeval] = useState(1);

    function handleChange(event) {
        setRangeval(event.target.value);
    }

    return (
        <div>
            Min Rating = {rangeval} <input type="range" min="1" max="10" className="slider" id="myRange" value={rangeval} onChange={handleChange} />
        </div>
    );
}

export default Checkbox;
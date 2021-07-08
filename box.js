import React, { useState} from 'react';

export const Box = (props) => {

    const [contain, setBox] = useState([]);
    const [onShow, setView] = useState(false);

    const setHover = (bool) =>{
        setView(bool )
    }

    const createBox = () =>{
        setBox(old => [...old, {type: "box"} ])
        // contain.push({type: "box"})
    }

    const createInput = () => {
        setBox(old => [...old, {type: "inp"} ])
    }

    const Inp = () => (
        <div className='inp'>
            <input type="color" className="Add"></input>
        </div>
    )

    return  (
        <div className="box">
            {contain.map((element) => element.type === 'box' ? <Box /> : <Inp />)}

            <div className="rel"
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}
            >
                {onShow && (
                    <div className="onMouse">
                        <button className="eventBtn" onClick={ createInput } type="button">Box</button>
                        <button className="eventBtn" onClick={ createBox } type="button" >Container</button>
                    </div>
                )}
                <button className="addBtn">Add</button>
            </div>
        </div>
    )
}

export default  Box ;
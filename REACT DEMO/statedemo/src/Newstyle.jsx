import { useState } from "react";

function Newstyle() {
    const [lightswitch, setswitch] = useState('grey');
    const [opacity, setOpacity] = useState(1);

    const increaseOpacity = () => {
        if (opacity < 1) setOpacity(opacity + 0.1);
    };

    const decreaseOpacity = () => {
        if (opacity > 0.1) setOpacity(opacity - 0.1);
    };

    return (
        <div>
            <div
                className="light"
                style={{
                    backgroundColor: lightswitch,
                    opacity: opacity,
                    transition: 'opacity 0.3s ease'
                }}
            ></div>
            <button onClick={() => setswitch('red')}>Red</button>
            <button onClick={() => setswitch('green')}>Green</button>
            <button onClick={() => setswitch('blue')}>Blue</button>
            <button onClick={() => setswitch('grey')}>Off</button>
            <button onClick={() => setswitch('yellow')}>on</button>
            <br /><br />
            <button onClick={increaseOpacity}>+</button>
            <button onClick={decreaseOpacity}>-</button>
        </div>
    );
}

export default Newstyle;






import { useState } from "react";

const  FunctionalComponent = ({nama = 'user'}) => {

    const [value, setValue] = useState(0);

    const handlePlus = () => {
        setValue(value + 1);
    }
    const handleMinus = () => {
        if(value > 0) {
            setValue(value - 1);
        }
    }

    return (
        <div>
            <h1>Membuat komponen dengan Functional Component</h1>
            <h1>Selamat Belajar {nama} </h1>
            <button onClick={handleMinus}>-</button>
            <span>{" "} {value} {" "}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

// FunctionalComponent.defaultProps = {
//     nama: 'user'
// };

export default FunctionalComponent;
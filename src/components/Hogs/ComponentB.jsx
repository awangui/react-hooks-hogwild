import { useState } from "react";

function ComponentB(props) {
    const {setHogs, hogs} = props;
    const [hogName, setHogName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState(false);
    const [weight, setWeight] = useState(0);
    const [medal, setMedal] = useState("");
    const [image, setImage] = useState("");
    const addHog = () => {
        const newHog = {
            name: hogName,
            specialty,
            greased,
            weight,
            "highest medal achieved": medal,
            image,
        };

        hogs.push(newHog);
        console.log(newHog);
        setHogs([...hogs]);
    }

    return (
        <div>
            <p>
                <label>Enter hog name:</label>
                <input
                    type="text"
                    value={hogName}
                    onChange={(e) => setHogName(e.target.value)}
                />
            </p>
            <p>
                <label>Enter hog specialty:</label>
                <input
                    type="text"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                />
            </p>
            <p>
                <label>Is the hog greased?</label>
                <input
                    type="checkbox"
                    checked={greased}
                    onChange={(e) => setGreased(e.target.checked)}
                />
            </p>
            <p>
                <label>Enter hog weight:</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(parseFloat(e.target.value))}
                />
            </p>
            <p>
                <label>Enter hog medal:</label>
               <select value={medal} onChange={
                     (e) => setMedal(e.target.value)
               }>
                <option value="bronze">Bronze</option>
                <option value="silver">Silver</option>
                <option value="gold">Gold</option>
                <option value="platinum">Platinum</option>

               </select>
            </p>
            <p>
                <label>Enter hog image URL:</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </p>
            <button onClick={addHog}style={
{backgroundColor: "#F5A9BC",
                color: "white",
                padding: "10px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",}
            }>Add Hog</button>   
        </div>
    );
}

export default ComponentB;
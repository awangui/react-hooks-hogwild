import { useState } from 'react';

function ComponentD() {
  const [showHog, setShowHog] = useState(false);
  const hog = {
    name: "Babe",
    specialty: "Being incredibly cute",
    greased: false,
    weight: 2.0,
    "highest medal achieved": "bronze",
    image:
      "https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-hogwild/master/public/images/babe.jpg",
  };

  return (
    <div
      onClick={() => setShowHog(!showHog)}
      style={{
        margin: "20px",
        border: "solid 1px black",
        width: "300px",
        borderRadius: "4px",
        padding: "20px",
      }}
    >
      <div>
        <img
          src={hog.image}
          alt={hog.name}
          style={{ width: "300px", margin: "20px" }}
        />
      </div>
      {showHog && (
        <>
          <p>
            Name <b>{hog.name}</b>
          </p>
          <p>
            Specialty <b>{hog.specialty}</b>
          </p>
          <p>
            Greased <b>{hog.greased ? "Yes" : "No"}</b>
          </p>
          <p>
            Weight <b>{hog.weight}</b>
          </p>
          <p>
            Highest Medal Achieved <b>{hog["highest medal achieved"]}</b>
          </p>
        </>
      )}
    </div>
  );
}

export default ComponentD;
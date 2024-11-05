import { useState } from 'react';

function ComponentD(props) {
  const { hog, style } = props;
  const [showHog, setShowHog] = useState(false);

  return (
    <div style={style}>
      <div onClick={() => setShowHog(!showHog)}>
        <img
          src={hog.image}
          alt={hog.name}
          style={{ width: "250px", height: "250px", objectFit: "cover" }}
        />
        <p>
          Name <b>{hog.name}</b>
        </p>
      </div>
      {showHog && (
        <>
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

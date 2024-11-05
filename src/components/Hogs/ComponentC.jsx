import { useState } from "react";
import ComponentD from "./ComponentD";

function ComponentC(props) {
  const { hogs } = props;
  
  // State for filter and sorting
  const [onlyGreased, setOnlyGreased] = useState(false);
  const [sortOption, setSortOption] = useState("");

  // Filter hogs based on greased status
  const filteredHogs = onlyGreased ? hogs.filter(hog => hog.greased) : hogs;

  // Sort hogs based on selected option
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "weight") {
      return a.weight - b.weight;
    }
    return 0;
  });

  return (
    <div>
      {/* Filter checkbox */}
      <label>
        Show only greased hogs
        <input
          type="checkbox"
          checked={onlyGreased}
          onChange={(e) => setOnlyGreased(e.target.checked)}
        />
      </label>

      {/* Sort dropdown */}
      <label>
        Sort by:
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>

      {/* Display sorted and filtered hogs */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {sortedHogs.map((hog, index) => (
          <ComponentD
            key={index}
            hog={hog}
            style={{
              margin: "20px",
              border: "solid 1px black",
              width: "250px",
              borderRadius: "4px",
    
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ComponentC;

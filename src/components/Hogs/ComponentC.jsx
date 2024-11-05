import ComponentD from "./ComponentD";

function ComponentC(props) {
  const { hogs } = props;

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {hogs.map((hog, index) => (
        <ComponentD
          key={index}
          hog={hog}
          style={{
            margin: "20px",
            border: "solid 1px black",
            width: "300px",
            borderRadius: "4px",
   
          }}
        />
      ))}
    </div>
  );
}

export default ComponentC;

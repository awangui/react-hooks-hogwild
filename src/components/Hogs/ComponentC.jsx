import componentD from "./ComponentD";
function componentC(props) {
    const {hogs} = props;
  return <div>
    <componentD/>
  </div>;
}
export default componentC;
import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("clicked")}>
      <h1>Children</h1>
    </Child>
  );
};

export default Parent;

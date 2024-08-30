import React, { useState } from "react";
// import ParentOne from "./ParentOne";
// import ChildOne from "./ChildOne";
import {MemorizedParentTwo} from "./ParentTwo";

const GrandParent = () => {
  const [newCount, SetNewCount] = useState(0);
  console.log("Grand Parent render");
  return (
    <>
      <button onClick={() => SetNewCount(newCount + 5)}>
        count increase by 5 - {newCount}
      </button>

      {/* <ParentOne newCount={newCount}>
        <ChildOne />
      </ParentOne> */}
      <MemorizedParentTwo />
    </>
  );
};


export default GrandParent;

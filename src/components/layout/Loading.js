import React from "react";
import LoadingGif from "../../img/loading.gif";

const Loading = () => {
  return (
    <div className="d-flex flex-center" style={{ margin: "150px 0" }}>
      <img src={LoadingGif} alt="Loading" />
    </div>
  );
};

export default Loading;

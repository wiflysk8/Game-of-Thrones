import React from "react";
import loadingGif from "../../assets/images/loading.gif";
import "./Loading.scss";

const Loading = ({isLoading}) => {
  return isLoading && <div className="c-loading"><img className="c-loading__gif" src={loadingGif} alt="loading" /></div>
  
  
};

export default Loading;

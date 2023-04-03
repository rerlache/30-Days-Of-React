import React, { useState, useEffect } from "react";
import loadingGif from "../../assets/images/loading.gif";

const LoadingContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <img src={loadingGif} alt="Loading..." />
      ) : (
        <div>All Data is fetched now!</div>
      )}
    </div>
  );
};

export default LoadingContent;

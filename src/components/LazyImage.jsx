import React, { Suspense, lazy, useEffect } from "react";
// import Image from "./Image";

const Image = lazy(() => import("./Image"));

const LazyImage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Image />
      </Suspense>
    </>
  );
};

export default LazyImage;

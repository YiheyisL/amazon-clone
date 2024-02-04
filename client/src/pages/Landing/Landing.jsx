import React from "react";

import CarouselEffect from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import LayOut from "../../components/LayOut/LayOut";

function Landing() {
  return (
    <LayOut>
      <CarouselEffect />
      <Category />
    </LayOut>
  );
}

export default Landing;

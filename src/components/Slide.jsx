import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";

const SlideDiv = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient(122.64deg, #90e0ef -22.07%, #caf0f8 76.17%);
  margin: 10px auto;
  overflow: auto;
`;

const Slide = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SlideDiv>Slide 1</SlideDiv>
      </SwiperSlide>
      <SwiperSlide>
        <SlideDiv>Slide 2</SlideDiv>
      </SwiperSlide>
      <SwiperSlide>
        <SlideDiv>Slide 3</SlideDiv>
      </SwiperSlide>
      <SwiperSlide>
        <SlideDiv>Slide 4</SlideDiv>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slide;

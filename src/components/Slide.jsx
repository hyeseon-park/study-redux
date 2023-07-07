import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const SlideDiv = styled.div`
  width: 70%;
  height: 200px;
  background: linear-gradient(122.64deg, #90e0ef -22.07%, #caf0f8 76.17%);
  margin: 10px auto;
  overflow: auto;
`;

const SwiperStyle = styled.div`
  .swiper {
    padding-bottom: 20px;
    .swiper-pagination {
      &-bullet {
        background: #caf0f8;
        &-active {
          background: #90e0ef;
        }
      }
    }
  }
`;

const Slide = () => {
  return (
    <SwiperStyle>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
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
        <SwiperSlide>
          <SlideDiv>Slide 5</SlideDiv>
        </SwiperSlide>
        <SwiperSlide>
          <SlideDiv>Slide 6</SlideDiv>
        </SwiperSlide>
      </Swiper>
    </SwiperStyle>
  );
};

export default Slide;

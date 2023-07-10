import React, { useState } from "react";
import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";
import CloseStrok from "../images/Close_Stroke_24.svg";

const AddressBtn = styled.button`
  margin-top: 12px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid black;
`;

const AddressInput = styled.input`
  display: block;
  margin: 12px auto;
  height: 30px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 4px;
`;

const Dim = styled.div`
  display: ${(props) => (props.$display ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 600px;
  width: 90%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const CloseBox = styled.div`
  width: 100.1%;
  padding: 13px;
  background-color: #d4d4d4;
  text-align: right;
`;

const Close = styled.button``;

const CloseIcon = styled.img``;

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const handleComplete = (data) => {
    const { address, addressType, bname, buildingName, zonecode } = data;
    let fullAddress = address;
    let extraAddress = "";

    if (addressType === "R") {
      if (bname !== "") {
        extraAddress += bname;
      }
      if (buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setZipCode(zonecode);
    setAddress(fullAddress);
    setIsModalOpen(false);
  };

  return (
    <>
      <AddressBtn onClick={() => setIsModalOpen(true)}>주소 검색</AddressBtn>
      <AddressInput
        type="text"
        placeholder="우편번호를 입력해주세요."
        defaultValue={zipCode}
        disabled
      />
      <AddressInput
        type="text"
        placeholder="주소를 입력해주세요."
        defaultValue={address}
        disabled
      />

      <Dim $display={isModalOpen}>
        <Content>
          <CloseBox>
            <Close onClick={() => setIsModalOpen(false)}>
              <CloseIcon src={CloseStrok} alt="닫기" />
            </Close>
          </CloseBox>
          <DaumPostcode
            onComplete={handleComplete}
            style={{ width: "100%", height: "50vh" }}
            // autoClose={false}
          />
        </Content>
      </Dim>
    </>
  );
};

export default Address;

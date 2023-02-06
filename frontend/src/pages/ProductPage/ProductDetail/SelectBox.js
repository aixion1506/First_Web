import React from "react";
import styled from 'styled-components';
import icon from '../../../assets/images/selectbox-down-icon.png';

const Select = ({options}) => {
  return (
    <SelectBox>
      <option>SIZE SELECT</option>
      {
        options.map((option, idx) => {
          return (
            <OptionBox key={idx} value={option}>
              {option.toUpperCase()}
            </OptionBox>
          )
        })
      }
    </SelectBox>
  )
}

const SelectBox = styled.select`
  width: 100%;
  height: 50px;
  margin: 50px 0;
  padding: 0 10px;
  border: 2px solid #d9d9d9;
  font-size: 18px;
  box-sizing: border-box;
  cursor: pointer;

  -webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  background-size: 10px;
`

const OptionBox = styled.option`
  &:hover {
    background-color: #000;
    color: #fff;
  }
`

export default Select;
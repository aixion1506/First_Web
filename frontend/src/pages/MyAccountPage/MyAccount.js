import React, { useEffect, useState } from "react";
import {
  MyAccountWrapper,
  AccountNavWrapper,
  GotoMyDetails,
  GotoOrderHistory,
} from "./myaccount-styled";
import { Link } from "react-router-dom";
import axios from "axios";

const MyAccount = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8001/api/users/account", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Handle success.
        setUserId(response.data._id);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  });

  return (
    <MyAccountWrapper>
      <AccountNavWrapper>
        <h1>MY ACCOUNT</h1>
        <GotoMyDetails>
          <Link to={`./mydetails`}>MY DETAILS</Link>
        </GotoMyDetails>
        <GotoOrderHistory>
          <Link to={`./orderhistory`}>ORDER HISTORY</Link>
        </GotoOrderHistory>
      </AccountNavWrapper>
    </MyAccountWrapper>
  );
};

export default MyAccount;

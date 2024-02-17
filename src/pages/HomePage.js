import axios from "axios";
import React, { useEffect } from "react";
import Layout from "./../Components/Layout";
const HomePage = () => {
  //login userdata
  const getUserdata = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserdata();
  }, []);
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};

export default HomePage;

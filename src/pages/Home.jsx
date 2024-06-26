import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Landing, MilanInfoBanner } from "../components/private/index.js";
import { Footer, Navbar } from "../components/shared";
import { toggleUserLogin, updateUserData } from "../redux/slice/userSlice.js";
import { successCallback } from "../service/MilanApi.js";
import { showErrorToast, showSuccessToast } from "../utils/Toasts.js";

const Home = () => {
  const dispatch = useDispatch();
  const handleToken = async () => {
    const authData = await successCallback();

    if (authData?.status === 200) {
      showSuccessToast(authData?.data?.message);
      dispatch(updateUserData(authData.data.user));
      dispatch(toggleUserLogin());
    } else {
      showErrorToast(authData?.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (Cookies.get("OAuthLoginInitiated")) {
      handleToken();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>EmpowerLink</title>
        <link rel="canonical" href="/" />
      </Helmet>

      <ToastContainer />
      <Navbar />

      <Landing />
      <MilanInfoBanner />
      <Footer />
    </>
  );
};

export default Home;

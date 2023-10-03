import axios from "axios";
import SignContext from "../Context/SignContext";
import React from "react";


export const SignState = (props) => {
  const url = `${process.env.REACT_APP_BASE_URL}`;
  console.log(url)

  // create customer
  const createCustomer = async (customerInfo) => {
    try {
      const response = await axios.post(
        `${url}/customer/register`,
        customerInfo
      );
      return response.data;
    } catch (error) {
      console.error("Error", error);
      return {
        success: false,
        msg: "An error occurred while adding the category.",
      };
    }
  };

  // login customer
  const loginCustomer = async (CustomerInfo) => {
    try {
      const response = await axios.post(`${url}/customer/login`, {
        CustomerInfo
      });
      return response.data;
    } catch (error) {
      console.error("Error during API call:", error);
      // return ({ success: false, msg: "server Error" })
    }
  };

  //Forgot Password
  const forgotCustomerPassword = async (CustomerInfo) => {
    try {
      const response = await axios.post(`${url}/customer/forgotpassword`, CustomerInfo);

      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  //Reset Password
  const resetCustomerPassword = async (resetToken, password) => {
    try {
      const response = await axios.put(
        `${url}/customer/resetpassword/${resetToken}`,
        { password: password }
      );
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // LoggedIn User
  const getLoggedInCustomer = async (Token) => {
    try {
      const response = await axios.post(`${url}/customer/getloggedincustomer`, {
        token: Token,
      });
      return response.data;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // Get Specific Customer
  const GetSpecificCustomer = async (customerId) => {
    try {
      const response = await axios.post(
        `${url}/customer/getSpecificCustomer/${customerId}`,
        {}
      );
      return response;
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  // Update Customer
  const UpdateCustomer = async (customerInfo) => {
    try {
      const response = await axios.post(`${url}/customer/updatecustomer`, {
        id: customerInfo._id,
        customerInfo,
      });
      return response;
    } catch (error) {
      console.error("Error", error);
      return { success: false, msg: "An error occurred" };
    }
  };

  // Update Password
  const changePassword = async (CustomerInfo, id ,Token) => {
    try {
      const response = await axios.post(`${url}/customer/updatecustomerpassword/${id}`, {
        ...CustomerInfo,
        token: Token,
      });
      return response;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // Get Categories
  const getCategories = async () => {
    try {
      const response = await axios.post(`${url}/api/getcategories`);
      return response.data;
    } catch (error) {
      return ({ success: false, msg: "server Error" })
    }
  };

  // Get Products
  const getProducts = async () => {
    try {
      const response = await axios.post(`${url}/api/getallproducts`);
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };

  // GetSpecific Product
  const getSpecificProduct = async (ProductId) => {
    try {
      const response = await axios.post(`${url}/api/getspecificproduct`, {
        id: ProductId,
      });
      return response.data;
    } catch (error) {
      return ({ success: false, msg: "server Error" })
    }
  };

  // specific Sub-categories
  const getSpecificSubcategories = async (categoryId) => {
    try {
      const response = await axios.post(`${url}/api/${categoryId}/subcategories`);
      return response.data;
    } catch (error) {
      return { success: false, msg: "server Error" };
    }
  };


  return (
    <SignContext.Provider
      value={{
        createCustomer,
        loginCustomer,
        forgotCustomerPassword,
        resetCustomerPassword,
        getLoggedInCustomer,
        GetSpecificCustomer,
        UpdateCustomer,
        changePassword,
        getProducts,
        getCategories,
        getSpecificProduct,
        getSpecificSubcategories,
      }}
    >
      {props.children}
    </SignContext.Provider>
  );
};
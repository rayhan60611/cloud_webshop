import React, { useContext, useRef } from "react";
import useCart from "../hooks/useCart";
import { Link, redirect, useNavigate } from "react-router-dom";
import { Button } from "../button";
import { Input } from "../input";
import { FaPaypal } from "react-icons/fa6";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { AuthContext } from "@/providers/AuthProviders";
import { Bounce, toast } from "react-toastify";

const Checkout = () => {
  const {
    filterData,
    error,
    loading,
    totalCartItemCount,
    subtotal,
    shippingFee,
    taxFee,
    totalPrice,
  } = useCart();
  //getting user name
  const { user } = useContext(AuthContext);

  // Initialize useNavigate for redirection
  const navigate = useNavigate();

  // Format the date as a readable string
  const date = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  // Create pdf Document Component
  const styles = StyleSheet.create({
    page: {
      padding: 20,
      backgroundColor: "#ffffff",
    },
    section: {
      margin: 10,
      padding: 10,
      border: "1px solid #ddd",
      borderRadius: 4,
    },
    title: {
      fontSize: 24,
      marginTop: 15,
      marginBottom: 15,
      textAlign: "center",
    },
    text: {
      fontSize: 12,
      textAlign: "center",
      marginBottom: 2,
    },
    list: {
      marginTop: 10,
      marginBottom: 10,
    },
    listItem: {
      fontSize: 9,
      borderBottom: "1px solid #ddd",
      marginBottom: 4,
    },
    message: {
      fontSize: 12,
      textAlign: "center",
    },
    logo: {
      width: 40,
      height: 40,
      margin: "auto",
    },
    table: {
      display: "table",
      width: "auto",
      margin: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableCol: {
      width: "25%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: {
      margin: 5,
      fontSize: 10,
    },
  });

  const checkoutData = {
    orderId: `LT-${Math.floor(Math.random() * 10000)}`,
    customerName: "John Doe",
    items: filterData,
    total: totalPrice,
    message: "Thank you for your purchase!",
  };

  const MyDocument = ({ checkoutData }) => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Image
            style={styles.logo}
            src="../../../../public/logtech-black.png"
          ></Image>
          <Text style={styles.title}>LowTech GmbH Invoice</Text>
          <Text style={styles.text}>Order ID: {checkoutData.orderId}</Text>
          <Text style={styles.text}>Customer Name: {user.displayName}</Text>
          <Text style={styles.text}>{date}</Text>
          <Text style={styles.title}>Total Items:</Text>
          {/* <View style={styles.list}>
            {checkoutData.items.map((item, index) => (
              <Text key={index} style={styles.listItem}>
                {index + 1} | {item.name}: ${item.price.toFixed(2)}
              </Text>
            ))}
          </View> */}
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Header 1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Header 2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Header 3</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Header 4</Text>
              </View>
            </View>
            {/* Table Row */}
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row 1 Col 1</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row 1 Col 2</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row 1 Col 3</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Row 1 Col 4</Text>
              </View>
            </View>
            {/* Additional rows can be added similarly */}
          </View>
          <Text style={styles.text}>
            Total: ${checkoutData.total.toFixed(2)}
          </Text>
          <Text style={styles.message}>{checkoutData.message}</Text>
        </View>
      </Page>
    </Document>
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.userName.value;
    const password = form.password.value;
    if (!username) {
      return toast.warn("Invaild User Name", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    if (!password) {
      return toast.warn("Invaild Password", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    if (username || password) {
      // Redirect to final confirmation page
      navigate("/final-Confirmation");
    }
  };

  return (
    <div className="container">
      {/* page tiltle */}
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-center mt-8 font-bold text-xl">Checkout</h1>
        <hr className="border-2 w-4/5 " />
      </div>
      {/* pdf download button */}
      <div className="my-6 flex justify-end mr-10">
        <PDFDownloadLink
          className=" bg-[#0F172A] text-white hover:bg-lime-500 hover:text-black hover:shadow-xl duration-500 text-sm p-2"
          document={<MyDocument checkoutData={checkoutData} />}
          fileName="LowTech GmbH Invoice.pdf"
        >
          {({ blob, url, loading }) =>
            loading ? "Generating PDF..." : "Download Invoice"
          }
        </PDFDownloadLink>
      </div>
      {/* order summary */}
      <div className="bg-white shadow-md rounded-lg p-6 ">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Order Summary
        </h2>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Total Product</span>
            <span>{totalCartItemCount}</span>
          </div>
          <div className=" flex justify-between text-gray-700 mb-2">
            <span>Subtotal</span>
            <span>€ {subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span className="flex items-center">
              Shipping estimate
              <span className="ml-1"></span>
            </span>
            <span>€ {shippingFee}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-2">
            <span className="flex items-center">
              Tax estimate
              <span className="ml-1"></span>
            </span>
            <span>€ {taxFee}</span>
          </div>
          <div className="flex justify-between text-gray-700 font-semibold pt-4 border-t border-gray-200 mt-4">
            <span>Order total</span>
            <span>€ {totalPrice}</span>
          </div>
        </div>
      </div>

      <div className="my-20">
        <div className="flex gap-2 justify-center items-center text-xl font-bold my-4">
          <h1>Pay with Paypal</h1>
          <FaPaypal className="text-blue-700" />
        </div>
        <div className="flex gap-2 justify-center items-center mt-2 mb-10">
          <hr className="border-2 w-4/5" />
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col text-sm gap-2 justify-start items-start">
              <label className="font-semibold" htmlFor="">
                Paypal User Name or Email
              </label>
              <Input
                type="email"
                name="userName"
                placeholder="Paypal User Name or Email"
              ></Input>
            </div>

            <div className="flex flex-col text-sm gap-2 justify-start items-start">
              <label className="font-semibold" htmlFor="">
                Paypal User Password
              </label>
              <Input
                type="password"
                name="password"
                placeholder="Paypal Password"
              ></Input>
            </div>

            <Button className="w-full p-6 rounded-lg mt-6 flex items-center gap-2 ">
              <span> Confirm Peyment</span> <FaPaypal />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

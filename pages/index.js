import { Navbar } from "../components/Navbar"
import { ProductsAll } from "../components/ProductsAll"
import Head from "next/head"
import { useState, useContext } from "react";
import { Cart } from "../components/Cart";
import { proxy, useSnapshot } from "valtio";
import { CartContext } from "../context/CartContext";
import { CartProvider } from "../context/CartContext";
import React from "react";
import PropTypes from 'prop-types';

export default function Home() {



  return (
    <>
    <Head>
    <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta httpEquiv="Pragma" content="no-cache" />
    <meta httpEquiv="Expires" content="0" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>

    </Head>
    <ProductsAll/>

    </>
  )
}
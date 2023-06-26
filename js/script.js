// Copyright (c) 2020 Mr.Coxall All rights reserved
//
// Created by: Ryan Duffett
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  const TAX = 1.13
  const delivery = 15
  const size = parseFloat(document.getElementById("size").value)
  const flavour = parseFloat(document.getElementById("toppings").value)
  const pickUpOrDelivery = document.getElementById("pick-up-or-delivery").value

  const basePriceNoTAX = size + flavour
  const basePrice = basePriceNoTAX * TAX
  const deliveryOnly = (basePriceNoTAX + delivery) * TAX

  const subtotal = calculateSubtotal(
    pickUpOrDelivery,
    basePrice,
    deliveryOnly,
    TAX
  )
  const tax = calculateTax(
    subtotal,
    pickUpOrDelivery,
    basePrice,
    deliveryOnly,
    TAX
  )

  document.getElementById("subtotal").innerHTML =
    "Subtotal: $" + subtotal.toFixed(2)
  document.getElementById("tax").innerHTML = "Tax: $" + tax.toFixed(2)
  document.getElementById("total").innerHTML =
    "Total: $" + (subtotal + tax).toFixed(2) + " including tax."
}

function calculateSubtotal(
  pickUpOrDelivery,
  basePrice,
  deliveryOnly,
  TAX
) {
  if ( pickUpOrDelivery == "delivery") {
    return deliveryOnly / TAX
  } else {
    return basePrice / TAX
  }
}

function calculateTax(
  subtotal,
  pickUpOrDelivery,
  basePrice,
  deliveryOnly,
  TAX
) {
  if ( pickUpOrDelivery == "delivery") {
    return deliveryOnly - subtotal
  } else {
    return basePrice - subtotal
  }
}

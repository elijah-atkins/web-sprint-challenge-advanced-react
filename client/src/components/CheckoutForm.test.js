import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
  //Arrange
  const { getByTestId } = render(<CheckoutForm />);
  const testFirstName = "Hello";
  const testLastName = "World";
  const testAddress = "123 Pine Drive";
  const testState = "CO";
  const testZip = "80909";

  const firstName = getByTestId("firstName");
  const lastName = getByTestId("lastName");
  const address = getByTestId("address");
  const state = getByTestId("state");
  const zip = getByTestId("zip");
  const button = getByTestId("checkout");

  //Act

  fireEvent.change(firstName, { target: { value: testFirstName } });
  fireEvent.change(lastName, { target: { value: testLastName } });
  fireEvent.change(address, { target: { value: testAddress } });
  fireEvent.change(state, { target: { value: testState } });
  fireEvent.change(zip, { target: { value: testZip } });
  fireEvent.click(button);

  //Assert
  expect(firstName.value).toBe(testFirstName);
  expect(lastName.value).toBe(testLastName);
  expect(address.value).toBe(testAddress);
  expect(state.value).toBe(testState);
  expect(zip.value).toBe(testZip);
  await waitFor(() => getByTestId("successMessage"));
});

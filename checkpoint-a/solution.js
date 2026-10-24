// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";

// TODO: export the five functions spec.md asks for:
//   loadOrders()        async
//   myOrders(orders)
//   summarize(orders)
//   describeOrder(id)   async, and must never throw
//   toJsonLines(orders)
//
// Nothing is started for you this time. Everything you need is in modules
// 00 to 08.
// Function 1: Load all orders
export async function loadOrders() {
  return await findAllOrders();
}

// Function 2: Filter Cairo cancelled orders
export function myOrders(orders) {
  return orders.filter(order =>
    order.city === "Cairo" &&
    order.status === "cancelled"
  );
}

// Function 3: Find the highest single price
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map(order => order.price));
}

// Function 4: Describe an order by ID
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);

    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

// Function 5: Convert selected fields into JSON
export function toJsonLines(orders) {
  const result = orders.map(order => ({
    student: order.student,
    city: order.city
  }));

  return JSON.stringify(result);
}

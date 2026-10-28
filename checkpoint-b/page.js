// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.
//
// The data is given to you:
import { items } from "./items.js";

// Export renderItems(list), matching() and start(), as the spec describes.
// Nothing is started for you. Everything you need is in modules 00 to 13.

// Function 1: Display products on the page
export function renderItems(list) {
  const container = document.querySelector("#list");

  // Remove previously displayed products
  container.replaceChildren();

  // Create a list item for each product
  list.forEach(item => {
    const li = document.createElement("li");

    li.classList.add("product");
    li.textContent = `${item.name} (${item.category})`;

    container.appendChild(li);
  });
}

// Function 2: Keep only bags
export function matching() {
  return items.filter(item => item.category === "bags");
}

// Function 3: Set up the page
export function start() {
  // Show every product first
  renderItems(items);

  // Show only bags when the button is clicked
  const button = document.querySelector("#show-some");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

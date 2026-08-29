// COLOQUE AQUI O WHATSAPP DA EMPRESA COM DDI + DDD + NÚMERO.
// Exemplo fictício: 5513999999999
const WHATSAPP_NUMBER = "5513974223354";

const form = document.getElementById("quote-form");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const year = document.getElementById("year");
const phoneDisplay = document.getElementById("phone-display");

year.textContent = new Date().getFullYear();

if (WHATSAPP_NUMBER) {
  phoneDisplay.textContent = "(13) 97422-3354";
}

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!WHATSAPP_NUMBER) {
    alert("Antes de publicar, abra o arquivo script.js e adicione o número do WhatsApp da empresa na variável WHATSAPP_NUMBER.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  const text = [
    "Olá! Vim pelo site da Technos Construção e gostaria de solicitar um orçamento.",
    "",
    `Nome: ${name}`,
    `Telefone: ${phone}`,
    `Serviço: ${service}`,
    `Detalhes: ${message}`
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

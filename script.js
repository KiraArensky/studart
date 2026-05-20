const guests = document.querySelector("#guests");
const hours = document.querySelector("#hours");
const guestsValue = document.querySelector("#guestsValue");
const hoursValue = document.querySelector("#hoursValue");
const totalPrice = document.querySelector("#totalPrice");
const toggles = ["host", "photo", "decor", "animation", "tech", "student"].map((id) =>
  document.querySelector(`#${id}`)
);

function formatRub(value) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

function calculate() {
  const guestCount = Number(guests.value);
  const hourCount = Number(hours.value);
  let total = 6000 + guestCount * 170 + hourCount * 1700;

  if (document.querySelector("#host").checked) total += 4000;
  if (document.querySelector("#photo").checked) total += 4500;
  if (document.querySelector("#decor").checked) total += 5000;
  if (document.querySelector("#animation").checked) total += 3500;
  if (document.querySelector("#tech").checked) total += 3500;
  if (document.querySelector("#student").checked) total *= 0.9;

  guestsValue.textContent = guestCount;
  hoursValue.textContent = hourCount;
  totalPrice.textContent = formatRub(Math.round(total / 100) * 100);
}

[guests, hours, ...toggles].forEach((element) => {
  element.addEventListener("input", calculate);
  element.addEventListener("change", calculate);
});

document.querySelector(".lead-form").addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Заявка сохранена в прототипе. Для реального сайта форму нужно подключить к Telegram, CRM или почте.");
});

calculate();

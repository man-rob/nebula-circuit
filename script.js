const facts = [
  "Circuits are the nervous system of technology.",
  "Electricity travels at nearly the speed of light.",
  "Space probes rely on intricate circuit boards.",
  "The first integrated circuit was built in 1958.",
  "Without circuits, there would be no modern computing."
];

document.getElementById("factBtn").addEventListener("click", () => {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("fact").textContent = facts[random];
});

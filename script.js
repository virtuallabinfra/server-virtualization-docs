document.querySelectorAll("section").forEach(section => {
  section.addEventListener("input", () => {
    console.log(`Updated content in ${section.id}`);
    // You could add localStorage or backend sync here
  });
});

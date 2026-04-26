const fs = require("fs");

const data = [
  { name: "Auto servis Maki", address: "Mostar", email: "maki@gmail.com" },
  { name: "Pizzeria Gusar", address: "Mostar", email: "gusar@gmail.com" }
];

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildHTML(b) {
  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${b.name}</title>
</head>
<body>

<h1>${b.name}</h1>

<img src="https://source.unsplash.com/800x400/?business,shop">

<p>${b.address}</p>

</body>
</html>`;
}

data.forEach(b => {
  const dir = "sites/" + slugify(b.name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dir + "/index.html", buildHTML(b));
});
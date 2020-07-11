const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
  isHandsome: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "Kimchi", fatty: false },
    { name: "Cheeseburger", fatty: true },
  ],
};

console.log(nicoInfo);

console.log(nicoInfo.favFood[0].fatty);

exports.users = (req, res) => {
  res.json({
    users: [
      {
        name: "Mithun",
        age: 25,
        email: "mithun@example.com",
      },
      {
        name: "Pandiyan",
        age: 63,
        email: "pandiyan@example.com",
      },
    ],
  });
};

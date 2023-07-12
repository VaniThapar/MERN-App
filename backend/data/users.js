import bcrypt from "bcryptjs";

const users = [
  {
    name: "Rajat",
    email: "rajatthapar1996@gmail.com",
    password: bcrypt.hashSync("taraa@2127", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

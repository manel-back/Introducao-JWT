let users = [
  { id: 1, name: "João", idade: 18 },
  { id: 2, name: "Maria", idade: 20 },
];

// Mostrar todos os usuários
export function getAllUsers(req, res) {
  res.status(200).json(users);
}

export function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json(user);
}

export function createUser(req, res) {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
}

export function updateUser(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  user.name = req.body.name;
  user.idade = req.body.idade;
  res.status(200).json(user);
}

export function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  const deletedUser = users.splice(index, 1);
  res.status(200).json({ message: "Usuário removido", user: deletedUser });
}

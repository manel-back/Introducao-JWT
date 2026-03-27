let itens = [
    { id: 1, name: 'Banana', quantidade: "10"},
    { id: 2, name: 'Laranja', quantidade: "5"}
];

export function  getAllItens(req, res) {
   res.status(200).json(itens);
}

export function getItemById(req, res) {
    const id = parseInt(req.params.id);
    const item = itens.find(i => i.id === id);
    if (!item) {
      return res.status(404).json({ message: "Item não encontrado" });
    }
    res.status(200).json(item);
  }

export function createItem(req, res) {
    const newItem = req.body;
    newItem.id = itens.length + 1;
    itens.push(newItem);
    res.status(201).json(newItem);
}

export function updateItem(req, res) {
    const updatedItem = req.body;

    const index = itens.findIndex(item => item.id === updatedItem.id);

    if (index === -1) {
        return res.status(404).json({ message: "Item não encontrado" });
    }

    itens[index] = {
        ...itens[index],
        ...updatedItem
    };

    res.status(200).json(itens[index]);
}

export function deleteItem(req, res) {
    const { id } = req.body;

    const index = itens.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Item não encontrado" });
    }

    const deletedItem = itens.splice(index, 1);

    res.status(200).json({
        message: "Item removido com sucesso",
        item: deletedItem[0]
    });
}

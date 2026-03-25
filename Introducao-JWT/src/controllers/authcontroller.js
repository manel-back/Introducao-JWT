import jwt from 'jsonwebtoken';

const SECRET = 'chave_secreta_segura'; // .env

export function login(req, res) {
    const { email, senha } = req.body;

    if (email === 'manel@gmail.com' && senha === 'manel') {
        const token = jwt.sign({ id: 1, name: 'Manel' }, SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ message: 'Credenciais inválidas' });
}
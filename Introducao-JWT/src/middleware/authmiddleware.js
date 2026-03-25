import jwt from 'jsonwebtoken';
const SECRET = 'chave_secreta_segura';

export function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorizaton'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user; // Dados do token disponíveis
        next();
    });
}
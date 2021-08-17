import jwt from 'jsonwebtoken';

export const generateToken = (user) =>
	jwt.sign(
		{
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin
		},
		process.env.JWT_SECRET || 'gotasecretcanyoukeepit',
		{
			expiresIn: '30d'
		}
	);
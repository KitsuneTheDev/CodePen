import bcrypt from 'bcryptjs';

export const createBcryptHash = async (password) => {
    console.log('HASHING...');
    const hashed = await bcrypt.hash(password, 10);
    console.log('HASH COMPLETE');
    return hashed;
}

export const compareBcryptHash = async (payload, hashedPassword) => {
    return bcrypt.compare(payload, hashedPassword);
}
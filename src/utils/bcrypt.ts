import * as bcrypt from 'bcrypt';
import 'dotenv/config';

export function encodePassword(raw: string) {
  const salt = bcrypt.genSaltSync(Number(process.env.SALT_ROUNDS));
  return bcrypt.hashSync(raw, salt);
}

export function decodePassword(raw: string, hash: string) {
  return bcrypt.compareSync(raw, hash);
}

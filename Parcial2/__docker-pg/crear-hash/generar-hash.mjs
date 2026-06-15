/*
Si quieren utilizar un hash distinto, utilizar este script.
Instalar:
 pnpm install
Ejecutar:
 pnpm run generar-hash
*/

import bcrypt from "bcryptjs";

bcrypt.hash("admin123", 10, (err, hash) => {
  console.log(hash);
});

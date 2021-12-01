import { Connection, Repository } from 'typeorm';
import { name, internet, random, date, lorem, hacker } from 'faker/locale/es';
import { Usuario } from '../entities';
import { writeFileSync } from 'fs';
import { phone } from 'faker/locale/es_MX';

const createUsuarios = async (con: Connection) => {
  const usuarios: Array<Usuario> = [];
  for (const _ of Array.from({ length: 10 })) {
    const usuaNombre = name.firstName();
    const usuaApellido = name.lastName();
    const usuaTelefono = phone.phoneNumber();
    const usuaLogin = lorem.word();
    const usuaMail = internet.email();
    const usuaPassword = internet.password();
    // const usuaFeccre = date.past();
    // const usuaFecmod = date.recent();
    const usuaEstado = random.arrayElement([1, 0]);
    const usuario: Partial<Usuario> = new Usuario(
  usuaNombre,
  usuaApellido,
  usuaMail,
  usuaTelefono,
  usuaLogin,
  usuaPassword,
  // usuaFeccre,
  // usuaFecmod,
  usuaEstado,
    );
    usuarios.push((await con.manager.save(usuario)) as Usuario);
  }
  await con.manager.save(usuarios);
};

export { createUsuarios };
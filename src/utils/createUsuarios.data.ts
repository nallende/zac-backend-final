import { Connection} from 'typeorm';
import { name, internet, random,  lorem, } from 'faker/locale/es';
import { Usuario } from '../entities';



const createUsuarios = async (con: Connection) => {
  
  for (const _ of Array.from({ length: 10 })) {
    const nombre = name.firstName();
    const apellido = name.lastName();
    const email = internet.email();
    const login = lorem.word();
    const password = internet.password();
    const estado = random.arrayElement([1, 0]);
    
    const usuario: Partial<Usuario> = new Usuario(
          nombre,
          apellido,
          email,
          login,
          password,
          estado,
    );
   await con.manager.save(usuario)
  }
 };

export { createUsuarios };
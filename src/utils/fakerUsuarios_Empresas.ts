import { Connection} from 'typeorm';
import { name, internet, random,  lorem, company, address, phone, image, datatype } from 'faker/locale/es';
import { Usuario } from '../entities';
import { Empresa } from '../entities';
import { stringify } from 'querystring';
import { min } from 'class-validator';


const createUsuarios = async (con: Connection) => {
  const usuarios: Array<Usuario> =[];
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
   usuarios.push((await con.manager.save(usuario))as Usuario);
  }

  await createEmpresas(con, usuarios);
};
const createEmpresas= async(con: Connection, usuarios: Array<Usuario>)=>{
  for (const usuario of usuarios) {

   const nombre=company.companyName();
   const direccion = address.direction();
   const telefono = parseInt(phone.phoneNumber());
   const mail = internet.email();
   const contacto = name.firstName().concat(name.lastName()); 
   const imagen=  image.imageUrl();
   const rut= datatype.number(1000000);
   const estado=  datatype.boolean();

   const empresa1= new Empresa(nombre, direccion, telefono, mail,contacto, imagen, rut, estado)

   await con.manager.save(empresa1)
  }
}


 

export { createUsuarios };
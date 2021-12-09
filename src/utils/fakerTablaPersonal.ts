import { Connection} from 'typeorm';
import { name, internet, random,  lorem, company, address, phone, image, datatype } from 'faker/locale/es';
import { Personal } from '../entities';

const createPersonal = async (con: Connection) => {
 
  for (const _ of Array.from({ length: 20 })) {
    const rut=  datatype. number().toString();
    const nombre = name.firstName();
    const apellidop = name.lastName();
    const apellidom = name.lastName();
    const direccion = address.streetAddress().concat(address.zipCode());
    const telefono= parseInt(phone.phoneNumber());
    const email = internet.email();
    const estado = random.arrayElement([1, 0]);

        const personal: Partial<Personal> = new Personal(
          rut,
          nombre,
          apellidop,
          apellidom,
          direccion,
          telefono,
          email,
          estado,
    );
   await con.manager.save(personal);
  }
 
};
export { createPersonal };
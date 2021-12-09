import { Connection} from 'typeorm';
import { name, random } from 'faker/locale/es';
import { Cargo} from '../entities';

const createCargo = async (con: Connection) => {
 
 for (const _ of Array.from({ length: 20 })) {
       const nombre = name.jobType();
       const estado = random.arrayElement([1, 0]);
       const cargo: Partial<Cargo> = new Cargo(nombre, estado);
         await con.manager.save(cargo);
            }
};
export { createCargo };
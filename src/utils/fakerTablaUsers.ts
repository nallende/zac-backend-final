import { Connection} from 'typeorm';
import { name, internet } from 'faker/locale/es';
import { Users} from '../entities';

const createUsers = async (con: Connection) => {
 
  for (const _ of Array.from({ length: 20 })) {
        const username = internet.userName();
        const password = internet.password();
        const fullname = name.firstName().concat(" "+ name.lastName());
        const users: Partial<Users> = new Users(username, password,fullname);
          await con.manager.save(users);
             }
};
export { createUsers };
import { ETableNames } from '../../seeds/ETableNames';
import Knex from 'knex';
import { User } from '../../../models/User';
import { PasswordCrypto } from '../../../services';

export const create = async (usuario: Omit<User, 'id'>): Promise<number | Error> => {

    try {

        const hashedPassword = await PasswordCrypto.hashPassword(usuario.password);

        const [result] = await Knex(ETableNames.User).insert({ ...usuario, senha: hashedPassword }).returning('id');

        if (typeof result === 'object') {
            return result.id;
        } else if (typeof result === 'number') {
            return result;
        }

        return new Error('Error ao cadastrar o registro');
    } catch (error) {
        console.log(error);
        return new Error('Error ao cadastrar o registro');
    }

};
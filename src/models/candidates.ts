import { sequelize } from '../database';

import { DataTypes, Model } from 'sequelize'


export interface CandidateInstance extends Model {
    id: number
    name: string
    bio: string
    email: string
    phone: string
    openToWork: boolean
}

export const Candidates = sequelize.define<CandidateInstance>(
    'Candidates',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        bio: DataTypes.TEXT,
        phone: DataTypes.STRING,
        openToWork: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    }


)
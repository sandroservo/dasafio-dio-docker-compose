import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database"

interface CompanyInstance extends Model {
    id: number
    name: string
    bio:string
    web: string
    email: string
}

export const Company = sequelize.define<CompanyInstance>(
    'Companies',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        bio: DataTypes.TEXT,
        website: DataTypes.STRING,
        email: DataTypes.STRING,

    }
)
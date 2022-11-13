import { Model, DataTypes, BelongsToManyAddAssociationMixin, BelongsToManyRemoveAssociationMixin, BelongsToManyCountAssociationsMixin } from "sequelize"
import { sequelize } from "../database"
import { CandidateInstance } from "./candidates"

interface JobInstance extends Model {
    id: number
    title: string
    description: string
    limitDate: Date
    companyId: number
    addCandidate: BelongsToManyAddAssociationMixin<CandidateInstance, number>
    removeCandidate: BelongsToManyRemoveAssociationMixin<CandidateInstance, number>
    countCandidates: BelongsToManyCountAssociationsMixin
}

export const Job = sequelize.define<JobInstance>(
    "Job",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        limitDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        companyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'company',
                key:'id'

            },
            onUpdate:'CASCADE',
            onDelete:'RESTRICT'
        }


    }

)
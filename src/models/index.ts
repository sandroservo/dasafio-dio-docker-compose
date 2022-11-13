import { Candidates } from "./candidates";
import { Company } from "./company";
import { Job } from "./job";

Candidates.belongsToMany(Job, {through: 'job_candidates'})

Company.hasMany(Job)

Job.belongsTo(Company)
Job.belongsToMany(Candidates, {through: 'job_candidates'})

export {
    Candidates,
    Company,
    Job,
}
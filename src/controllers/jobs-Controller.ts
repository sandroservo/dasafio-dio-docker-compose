import { Request, Response } from "express"
import { Job } from "../models"

export const jobsController = {
    //GET /Jobs
    index: async (req: Request, res: Response) => {
        try {
            const jobs = await Job.findAll({ include: 'Company' })
            res.json(jobs)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ massage: err.message })
            }
        }
    },

    //Post Create Jobs
    save: async (req: Request, res: Response) => {
        const { title, description, limitDate, companyId } = req.body

        try {
            const job = await Job.create({
                title,
                description,
                limitDate,
                companyId

            })
            return res.status(201).json(job)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ massage: err.message })
            }
        }
    },

    //GET /jobs/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            const job = await Job.findByPk(id, { include: ['Company', 'Candidates'] })
            const candidatesCount =  await job?.countCandidates()
            return res.json({...job?.get(), candidatesCount})

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ massage: err.message })
            }
        }
    },

    //PUT /jobs/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { title, description, limitDate, companyId } = req.body

        try {
            const [affectdRows, jobs] = await Job.update({
                title,
                description,
                limitDate,
                companyId
            }, {
                where: { id },
                returning: true
            }
            )
            return res.json(jobs[0])
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ massage: err.message })
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params


        try {
            await Job.destroy({ where: { id } })
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ massage: err.message })
            }
        }
    },

    //POST /jobs/:id/addCandidate
    addCandidate: async (req: Request, res: Response) => {
        const jobId  = req.params.id
        const { candidateId } = req.body

        try {
            const job = await Job.findByPk(jobId)

            if(job === null) return res.status(404).json({ massage:'Vaga de emprego não encontrada'})

            await job.addCandidate(candidateId)
            return res.status(201).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ massage: err.message })
            }
        }
    },
    //POST /jobs/:id/removeCandidate
    removeCandidate: async (req: Request, res: Response) => {
        const jobId  = req.params.id
        const { candidateId } = req.body

        try {
            const job = await Job.findByPk(jobId)

            if(job === null) return res.status(404).json({ massage:'Vaga de emprego não encontrada'})

            await job?.removeCandidate(candidateId)
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ massage: err.message })
            }
        }
    }
}
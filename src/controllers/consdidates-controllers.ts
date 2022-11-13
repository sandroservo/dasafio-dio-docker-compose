import { Request, Response } from "express"
import { Candidates } from "../models"

export const condidatesController = {
    //ROUTE LIST
    index: async (req: Request, res: Response) => {
        try {
            const candidates = await Candidates.findAll()
            return res.json(candidates)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json(err.message)
            }
        }

    },
    //ROUTE CREATED
    save: async (req: Request, res: Response) => {
        const { name, bio, email, phone, openToWork } = req.body
        try {
            const candidate = await Candidates.create({
                name,
                bio,
                email,
                phone,
                openToWork
            })
            return res.status(201).json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json(err.message)
            }
        }
    },
    //ROUTE name por id
    show: async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const candidate = await Candidates.findByPk(id)
            return res.json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json(err.message)
            }
        }
    },
    //ROUTE Atualiza por id
    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, bio, email, phone, openToWork } = req.body
        try {
            const candidate = await Candidates.findByPk(id)
            if (candidate === null) {
                return res.status(404).json({ error: "Candidato não encontrado" })
            }
            candidate.name = name
            candidate.bio = bio
            candidate.email = email
            candidate.phone = phone
            candidate.openToWork = openToWork

            await candidate.save()

            return res.status(200).json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json(err.message)
            }
        }
    },
    //DELLET
    delete: async (req: Request, res: Response) => {
        const { id } =  req.params

        try {
            await Candidates.destroy({where: { id } })

            return res.status(204).send()
            
        } catch (err) {
            if (err instanceof Error) {
            return res.status(400).json({ message: err.message  })
            }
        }
    }

}
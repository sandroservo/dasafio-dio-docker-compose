import express  from "express"
import { companiesController } from "../controllers/companies.controler"
import { condidatesController } from "../controllers/consdidates-controllers"
import { jobsController } from "../controllers/jobs-Controller"

export const router =  express.Router()

router.get('/', (req, res) => res.json({hello: 'Hello, World'}))

router.get('/candidates', condidatesController.index) 
router.get('/candidates/:id',condidatesController.show)
router.post('/candidates', condidatesController.save)
router.put('/candidates/:id', condidatesController.update)
router.delete('/candidates/:id', condidatesController.delete)

router.get('/companies', companiesController.index)
router.get('/companies/:id', companiesController.show)
router.post('/companies',companiesController.save)
router.put('/companies/:id',companiesController.update)
router.delete('/companies/:id', companiesController.delete)

router.get('/jobs', jobsController.index)
router.get('/jobs/:id', jobsController.show)
router.post('/jobs', jobsController.save)
router.put('/jobs/:id', jobsController.save)
router.delete('/jobs/:id', jobsController.index)

router.post('/jobs/:id/addCandidate', jobsController.addCandidate)
router.post('/jobs/:id/removeCandidate', jobsController.removeCandidate)

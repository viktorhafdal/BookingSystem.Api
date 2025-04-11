import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface StudentIdParam
{
  studentId: string;
}

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'This should display a list of all students'
  })
})

router.get('/:studentId', (req: Request<StudentIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display details of a specific student',
    studentId: req.params.studentId
  })
})

router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'This should display a status, wheter a student was created or not',
    //TODO: add created staffId, once db method has completed
  })
})

router.put('/:studentId', (req: Request<StudentIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display a status, whether a student was updated or not'
  })
})

router.delete('/:studentId', (req: Request<StudentIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display a status, whether a student was deleted or not'
  })
})

export { router as studentRoutes };

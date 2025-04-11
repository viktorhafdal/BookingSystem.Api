import express, { Request, Response, Router } from 'express';

const router = express.Router();

interface StaffIdParam
{
  staffId: string;
}

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'This should display a list of all staff'
  })
})

router.get('/:staffId', (req: Request<StaffIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display details of a specific member of staff',
    staffId: req.params.staffId
  })
})

router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'This should display a status, wheter a staff member was created or not',
    //TODO: add created staffId, once db method has completed
  })
})

router.put('/:staffId', (req: Request<StaffIdParam>, res:Response) => {
  res.status(200).json({
    message: 'This should display a status, whether a member of staff was updated or not'
  })
})

router.delete('/:staffId', (req: Request<StaffIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display a status, whether a member of staff was deleted or not'
  })
})

export { router as staffRoutes };

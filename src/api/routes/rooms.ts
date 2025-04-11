import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

interface RoomIdParam
{
  roomId: string;
}

router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'This should display a list of all rooms'
  })
})

router.get('/:roomId', (req: Request<RoomIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display details of a specific room',
    roomId: req.params.roomId
  })
})

router.post('/', (req: Request, res: Response) => {
  res.status(201).json({
    message: 'This should display a status, wheter a room was created or not',
    //TODO: add created roomId, once db method has completed
  })
})

router.put('/:roomId', (req: Request<RoomIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display a status, whether a room was updated or not'
  })
})

router.delete('/:roomId', (req: Request<RoomIdParam>, res: Response) => {
  res.status(200).json({
    message: 'This should display a status, whether a room was deleted or not'
  })
})

export { router as roomRoutes };

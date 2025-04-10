import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'This should display a list of all staff'
  })
})

router.get('/:staffId', (req, res) => {
  res.status(200).json({
    message: 'This should display details of a specific member of staff',
    staffId: req.params.staffId
  })
})

router.post('/', (res) => {
  res.status(201).json({
    message: 'This should display a status, wheter a staff member was created or not',
    //TODO: add created staffId, once db method has completed
  })
})

router.put('/:staffId', (res) => {
  res.status(200).json({
    message: 'This should display a status, whether a member of staff was updated or not'
  })
})

router.delete('/:staffId', (res) => {
  res.status(200).json({
    message: 'This should display a status, whether a member of staff was deleted or not'
  })
})

export { router as staffRoutes };

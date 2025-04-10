import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'This should display a list of all students'
  })
})

router.get('/:studentId', (req, res) => {
  res.status(200).json({
    message: 'This should display details of a specific student',
    staffId: req.params.staffId
  })
})

router.post('/', (res) => {
  res.status(201).json({
    message: 'This should display a status, wheter a student was created or not',
    //TODO: add created staffId, once db method has completed
  })
})

router.put('/:studentId', (res) => {
  res.status(200).json({
    message: 'This should display a status, whether a student was updated or not'
  })
})

router.delete('/:studentId', (res) => {
  res.status(200).json({
    message: 'This should display a status, whether a student was deleted or not'
  })
})

export { router as studentRoutes };

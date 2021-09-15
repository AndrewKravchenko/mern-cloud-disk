const Router = require('express')
const authMiddleware = require('../middleware/auth.middleware') // для индентификация юзера
const fileController = require('../controllers/fileController')
const router = new Router()


router.post('', authMiddleware, fileController.createDir)
router.post('/upload', authMiddleware, fileController.uploadFile)
router.get('/download', authMiddleware, fileController.downloadFile)
router.get('', authMiddleware, fileController.getFiles)
router.delete('/', authMiddleware, fileController.deleteFile)

module.exports = router

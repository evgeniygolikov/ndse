const multer = require('multer');

const storage = multer.diskStorage({
    destination(_, __, cb) {
        cb(null, 'public/img');
    },
    filename(_, file, cb) {
        const date = new Date().toISOString().replace(/:/g, '-');
        const fileName = `${date}-${file.originalname}`;

        cb(null, fileName);
    },
});

const ALLOWED_TYPES = [
    'image/png',
    'image/jpg',
    'image/jpeg',
];

const fileFilter = (req, file, cb) => {
    const allow = ALLOWED_TYPES.includes(file.mimetype);

    cb(null, allow);
};

module.exports = multer({
   fileFilter,
   storage,
});
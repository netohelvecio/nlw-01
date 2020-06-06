import { diskStorage } from 'multer';
import { extname } from 'path';

export const diskStorageConfig = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const filename = file.originalname.replace(/\.[^.]*$/, '');

    cb(null, `${filename}${Date.now()}${extname(file.originalname)}`);
  },
});

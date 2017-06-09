import express from 'express';
import cors from 'cors';

export const router = express.Router();

const {APP_WEB_BASE_PATH} = process.env;

router.get('/nav', cors(), (req, res) => {
    res.send([
        {
            "href": `${APP_WEB_BASE_PATH}/`,
            "text": "Home",
            "rel": "home"
        },
        {
            "href": `${APP_WEB_BASE_PATH}/not-found`,
            "text": "404"
        }
    ]);
});

router.get('/user', cors(), (req, res) => {
  res.send({
    id:1,
    name: 'from server XHR call 777'
  })
});

export default router;

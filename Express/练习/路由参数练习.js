
const express = require('express');
const {singers} = require('./singers.json');
const port = 5000;
// console.log(singers);

const app = express();

app.get('/other', (req, res) => {
    res.json(singers);
});

app.get('/singer/:id.html', (req, res) => {
    // console.log(req.params.id);
    // 获取URL上的参数ID
    let id = req.params.id;
    console.log(id);
    let result = singers.find(item => item.id == id);
    if (!result) {
        res.statusCode = 404;
        res.end('<h1>404 Not Fund</h1>');
        return;
    }
    console.log(result);
    res.end(`<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8" />
        <title>Title</title>
    </head>
    <body>
        <h1>${result.singer_name}</h1>
        <img src="${result.singer_pic}" alt="" />
    </body>
</html>`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
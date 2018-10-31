const express = require('express');
const router = express.Router();
const Datastore = require('nedb');

const db = new Datastore({filename: 'todo.db', autoload: true});

//가져오기
router.get('/', (req, res) => {
  db.find({}, (err, data) => {
    if(err){
      res.status('400').send();
      return;
    }
    res.send(data);
  });
});

//추가하기
router.post('/', (req, res) => {
  const {title, priority, content, date} = req.body;
  db.insert({
    title, 
    priority, 
    content, 
    date
  }, (err, data) => {
      if(err){
        res.status(400).send();
        return;
      }
      db.find({}, (err, data) => {
        if(err){
          res.status('400').send();
          return;
        }
        res.send(data);
      });
  });
});

//삭제하기
router.delete('/:_id', (req, res) => {
  const {_id} = req.params;
  
  db.remove({
    _id
  }, (err, data) => {
      if(err){
        res.status(400).send();
        return;
      }
      db.find({}, (err, data) => {
        if(err){
          res.status('400').send();
          return;
        }
        res.send(data);
      });
  });
});

//수정하기
router.put('/', (req, res) => {
  const {_id, title, priority, content} = req.body;
  
  db.update({
    _id
  },{
    $set:{
      title, priority, content
    }
  }, (err, data) => {
      if(err){
        res.status(400).send();
        return;
      }
      db.find({}, (err, data) => {
        if(err){
          res.status('400').send();
          return;
        }
        res.send(data);
      });
  });
});

module.exports = router;

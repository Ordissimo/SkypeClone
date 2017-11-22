module.exports = class {
  constructor(messageModel) {
    this.messageModel = messageModel;
  };
  massegeHistory (req, res){
  Chat.collection.findOne({participants: {$all: [req.body.sender, req.body.receiver]}}, (err, chat) => {
    if(err) {
      res.send('Error!');
    } else {
      Message.find({chatID: chat._id}, (err, message) => {
        if(err) {
          res.send('Error!');
        } else {
          res.json(message);
        }
      });
    }
  });
 }
}

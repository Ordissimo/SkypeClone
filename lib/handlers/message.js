module.exports = class {
  constructor(messageModel, chatModel) {
    this.messageModel = messageModel;
    this.chatModel = chatModel;
  };
  messageHistory (req, res){
  this.chatModel.collection.findOne({participants: {$all: [req.body.sender, req.body.receiver]}}, (err, chat) => {
    if(err) {
      res.send('Error!');
    } else {
      console.log(chat);
      this.messageModel.find({chatID: chat._id}, (err, message) => {
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

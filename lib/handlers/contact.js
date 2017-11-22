module.exports = class {
  constructor(contactModel) {
    this.contactModel = contactModel;
  };
  searchContact(req, res){
    User.find({$text:{$search:req.params.search_keyword}})
    .exec((err, contacts)=>{
      if(err){
        res.send('Error');
      }else{
        res.json(contacts);
      }
    });
   }
}
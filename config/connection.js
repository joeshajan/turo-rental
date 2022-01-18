const  MongoClient  = require('mongodb').MongoClient
const state = {
    db: null
}

module.exports.connect=function(done){
    const url='mongodb://13.232.32.220:27017'
    const dbname='turo'

    MongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        state.db=data.db(dbname)
        done()
    })
}
 



module.exports.get = function () {
    return state.db
}
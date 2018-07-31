const database = require("./database-connection");

module.exports = {
    list(){
        return database('resolution').select();
    },
    read(id){
        // return database('resolution').where('id','=',id).select().then(response => response[0]);
        return database('resolution').where('id','=',id).first();
    },
    create(resolution){
        return  database('resolution').insert(resolution).returning('*').then( record => record[0]);
        // console.log("create res: ",res);
        // let id = database('resolution').returning('id').insert(resolution)

        // return database('resolution').where('id','=',id[0]).select().then(response => response[0]);
    },
    update(id, resolution){
        return database('resolution').where('id','=',id).returning('id').update(resolution);
    },
    delete(id){
        return database('resolution').where('id','=',id).delete();
    }
};

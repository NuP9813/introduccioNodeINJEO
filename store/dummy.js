const db = {
    'user': [
        { id : '1', name : 'Elias Sánchez'}
    ]
}

const firstPosition = 0;
async function list(table){
    return db[table] || [];
}

async function get(table, id){
    let rows = await list(table);
    return rows.filter(user => user.id === id)[firstPosition] || null;
}

async function insert(table, user){
    if((!db[table])){
        db[table] = [];
    }
    db[table].push(user);
    console.log(db);
    return true;
}

async function remove(tabla, id){
    const index = db[tabla].findIndex( user => user.id === id);

    if(index >= 0){       
        db[tabla].splice(index, 1);
        return true;
    }

    return false;
}

async function query(table, filter){
    let columns = await list(table);
    let keys = Object.keys(filter);
    let value = keys[firstPosition];
    return columns.filter(user => user[value] == filter[value])[firstPosition] || null;
}

module.exports = {
    list,
    get,
    insert,
    remove,
    query,
}
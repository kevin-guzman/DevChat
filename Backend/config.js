const db_pass = 'Macakoskate54321'
const db_name = 'Devchat' //myFirstDatabase
const db_connection = `mongodb+srv://Devchat:${db_pass}@devchat.wnlqw.mongodb.net/${db_name}?retryWrites=true&w=majority` 
// `mongodb+srv://db_user_kg:${db_pass}@cluster0.9mxqf.mongodb.net/${db_name}?retryWrites=true&w=majority` 
const port = 3001 
const dev_domain = '192.168.0.9'; 
const dev_host = `http://${dev_domain}:${port}`;
const cryptPass = 'Macakiño@Override#OrtogonalMatrixInAConvoliution123$+qwerty123';
module.exports ={
    db_connection,
    port,
    dev_host,
    cryptPass
}
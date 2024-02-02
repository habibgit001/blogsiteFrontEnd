import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localSetup",
    user:"root",
    password:"MySQL@123",
    database:"blog"
})
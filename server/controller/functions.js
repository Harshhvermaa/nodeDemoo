import { pool1 } from "../database/sql.js";




export const getSqlData = (req, res) => {
    const sql = "SELECT * FROM admin "
    pool1.query(sql, (err, result) => {
        if (result) {
            res.json(result);
        } else {
            res.json(err);
        }
    });
}
import { pool1 } from "../database/sql.js";


export const getSqlData = (req, res) => {
    const sql = "SELECT * FROM admin "
    pool1.query(sql, (err, result) => {
        if (result) {
            res.json({
                success : "True",
                data : result,
                message : "Success"
            });
            
        } else {
            res.json(err);
        }
    });
}

export const postSqlData = async (req, res) => {
    const sql = "INSERT INTO admin SET ?";
    let count = 0;
    // count
    // await pool1.query('SELECT COUNT(*) AS count FROM admin', (err, rows,result) => {
    //     count = rows[0].count;
    //     res.json( result );
    //     console.log(count);
    // });
    // postData
    
    pool1.query(sql,{id: count++ ,name: req.body.name});
    if(!req.body.id && !req.body.name)
    {
        res.json({
            success : "False",
            id : count,
            data : req.body,
            message : "Not success"
        });
    }
    else
    {
        res.json({
                success : "True",
                id : count,
                data : req.body,
                message : "Success"
            });
    }
}

export const getCountOfSqlTable = (req, res) => {
    const sql = "SELECT COUNT(*) FROM admin";
    let count = JSON.parse(res)[0].count;
    pool1.query('SELECT COUNT(*) AS count FROM admin', (err, rows,result) => {
        count = rows[0].count;
        res.json( result );
        console.log(count);
    });
    
}


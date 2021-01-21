const mysql = require('mysql');
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

try {
    oracledb.initOracleClient({ libDir: 'C:\\oracle\\instantclient_12_2' });
} catch (err) {
    console.error('Oracle Instant Client não encontrado!');
    console.error(err);
    process.exit(1);
}

function getUsuario(query, params, callback) {

    oracledb.getConnection({
        user: "askint",
        password: 'askint',
        connectString: "bcprod-scan.ASKBCLDA.LOCAL/bcprod"
    },
        function (err, connection) {
            if (err) {
                console.log(err.message);
                return callback(err);
            }
            connection.execute(
                query, params,
                function (err, result) {
                    if (err) {
                        console.log(err.message);
                        return callback(err);
                    }
                    if (result.rows.length > 0) {
                        return callback(null, result.rows);
                    } else {
                        return callback(null, 0);
                    }

                }
            );
        }
    );
}
// ESTA FUNÇÃO RECEBE A QUERY DIRETAMENTE SEM PARAMETRO
function getUsuario2(query, callback) {

    oracledb.getConnection({
        user: "askint",
        password: 'askint',
        connectString: "bcprod-scan.ASKBCLDA.LOCAL/bcprod"
    },
        function (err, connection) {
            if (err) {
                console.log(err.message);
                return callback(err);
            }
            connection.execute(
                query,
                function (err, result) {
                    if (err) {
                        console.log(err.message);
                        return callback(err);
                    }
                    if (result.rows.length > 0) {
                        return callback(null, result.rows);
                    } else {
                        return callback(null, 0);
                    }

                }
            );
        }
    );
}
let pool = mysql.createPool({
    connectionLimit: 20,
    host: '10.0.2.9',
    port: 3306,
    user: 'ura',
    password: 'ask123',
    database: 'chamados'
});

exports.pool = pool;
exports.getUsuario = getUsuario;
exports.getUsuario2 = getUsuario2;


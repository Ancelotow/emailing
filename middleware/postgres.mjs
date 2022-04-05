import pg from 'pg'

const pool = new pg.Pool({
    user: "rgrbgvfo",
    host: "kashin.db.elephantsql.com",
    database: "rgrbgvfo",
    password: "u_g_SdOBHhJ8qSW5COPb8oOFhMO4T_gK",
    port: "5432"
});

export {pool}

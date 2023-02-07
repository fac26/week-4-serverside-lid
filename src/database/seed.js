const db = require("./db.js");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const seedPath = join(__dirname, "seed.sql");
const seed = readFileSync(seedPath, "utf-8");
db.exec(seed);
console.log("seed test");

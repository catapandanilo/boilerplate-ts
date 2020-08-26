module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "logging": true,
   "entities": [
      process.env.ENTITIES
   ],
   "migrations": [
      process.env.MIGRATIONS
   ],
   "cli": {
      "migrationsDir": [
         "src/database/migrations/"
      ],
      "entitiesDir": "src/entities/"
   }
}
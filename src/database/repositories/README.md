# Repositories

This layer abstracts database access. Repositories contain data-access logic and interact with models.

## Responsibilities
- Perform database queries using Sequelize.
- Return raw or structured data to services.
- Keep data-access concerns isolated.

## Benefits
- Makes it easier to change ORM or database engine.
- Encourages reuse of common queries.

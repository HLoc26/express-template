# Controllers

This folder contains route handler logic. Controllers receive requests from the routes layer and delegate business logic to services.

## Responsibilities
- Handle HTTP requests and responses.
- Validate basic inputs (optional).
- Call appropriate services.
- Return response or error to the client.

## Notes
- Keep controller logic thin.
- Avoid business rules here; move them to services.

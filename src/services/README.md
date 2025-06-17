# Services

This folder contains core business logic of the application.

## Responsibilities
- Implement application logic.
- Interact with repositories for data access.
- Enforce business rules and workflows.

## Notes
- Services are called by controllers.
- Avoid Express-related logic here.
- Can be reused across different interfaces (e.g., REST, WebSocket, CLI).

## Structure
One service per domain (e.g., `user.service.js`, `admin.service.js`).

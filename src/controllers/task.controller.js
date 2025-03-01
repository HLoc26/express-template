import TaskService from "../services/task.service.js";
import { decode } from "../utils/decodeJwt.js";
import { handleRequest } from "../utils/handleRequest.js";
const TaskController = {
	getAll: handleRequest(async () => {
		return await TaskService.getAll();
	}),
	getAssigned: handleRequest(async (req) => {
		const user = decode(req.cookies.jwt);
		if (!user) {
			throw new Error("user not found");
		}
		return await TaskService.getAssigned(user.userId);
	}),
	getCreated: handleRequest(async (req) => {
		const user = decode(req.cookies.jwt);
		return await TaskService.getCreated(user.userId);
	}),
};

export default TaskController;

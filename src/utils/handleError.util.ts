import { Response } from 'express';
import { AppError } from '@errors/app.error';

function handleError(error: AppError | Error, response: Response) {
	if (error instanceof AppError){
		return response.status(error.statusCode).send({
			status: 'SUCCESS',
			message: error.message
		});
	}

	console.error(error);
    
	return response.status(500).send({
		status: 'ERROR',
		message: 'Internal server error!'
	});
}

export { handleError };
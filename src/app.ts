import 'reflect-metadata';

import cors from 'cors';
import express from 'express';
import { router } from '@routes/index.route';

class App {

	public readonly express: express.Application;

	constructor(){
		this.express = express();
		this.middlewares();
		this.routes();
	}

	private middlewares(){
		this.express.use(cors());
		this.express.use(express.json({ limit: '5mb' }));
		this.express.use(express.urlencoded({ extended: false }));
	}

	private routes(){
		this.express.use('/api', router);
	}
}

export default new App().express;
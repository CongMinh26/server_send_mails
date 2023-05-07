import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import bulkEmailRoutes from './routes/bulkEmailRoutes';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        // Parse incoming requests with JSON payloads
        this.app.use(bodyParser.json());
        // Enable CORS
        this.app.use(cors());
    }

    private routes(): void {
        // User routes
        this.app.use('/api', bulkEmailRoutes);
    }
}

export default new App().app;

import { Router } from "express";

class CheckApp {
    router: Router;
    
    constructor() {
        this.router = Router();
        this.router();
    }

    routes() {
        this.router.get("", this.getStatus)
    }

    async getStatus(req: Request, res: Response) {
        res.status(200).send('esta app esta funcionando');
    }
}

const checkApp = new CheckApp();
export default checkApp.router;
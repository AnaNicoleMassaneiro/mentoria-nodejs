import { Router } from "express";
import CheckApp from './checkApp.route';

class IndexRoutes {
    router: Router;

    constructor() {
        this.router = Router();
        this.router();
    }

    routes() {
        this.router.use("/checkApp", CheckApp)
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
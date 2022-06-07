import express, { Application } from 'express';
import indexRoutes from "./routes/index.route";

class Server {
  app: Application;

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log('server port ', this.app.get("port"));
    })
  }

  routes() {
    this.app.use('mogly', indexRoutes)
  }
}

const server = new Server;
server.start();
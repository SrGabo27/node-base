import express,{ Application } from "express";
import 'reflect-metadata';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import helmet from "helmet";

import './controllers/index.controller';
import './controllers/user.controller';

export class App {
    private app!: Application;
    private container!: Container;
    
    constructor() {
        this.config();
    }

    private config() {
        this.container = new Container();

        let server = new InversifyExpressServer(this.container);

        server.setConfig((app) => {
            app.use(express.urlencoded({extended: true}));
            app.use(express.json());
            app.use(helmet());
        });

        this.app = server.build();

        this.app.set("port", 3000);
    }

    public start(): void {
       this.app.listen( this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`)
        })
    }
}

const APP = new App();
APP.start();
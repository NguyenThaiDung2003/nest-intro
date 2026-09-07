import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../coreModule/Database.service.js";
import { LoggerService } from "../coreModule/Logger.service.js";
@Injectable()
export class ProductService {
  constructor(private readonly loggerService: LoggerService, 
    private readonly databaseService: DatabaseService) {
  }
}
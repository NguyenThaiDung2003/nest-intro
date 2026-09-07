import { Module } from '@nestjs/common';
import { LoggerService } from './Logger.service.js';
import { DatabaseService } from './Database.service.js';

@Module({
  providers: [LoggerService, DatabaseService],
  exports: [LoggerService, DatabaseService], // Export 2 service để module khác sử dụng
})
export class CoreModule {}
import { Module } from "@nestjs/common";
import { CoreModule } from "../coreModule/core.module.js";
import { ProductService } from "./product.service.js";

@Module({
  imports: [CoreModule],
  providers: [ProductService],
})
export class ProductModule {}

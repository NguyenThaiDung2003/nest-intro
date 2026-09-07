import { Module } from "@nestjs/common";
import { CoreModule } from "../coreModule/core.module.js";
import { UserService } from "./user.service.js";


@Module({
    imports: [CoreModule],
    providers: [UserService],
})
export class UserModule {}
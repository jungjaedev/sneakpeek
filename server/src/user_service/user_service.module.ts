import { Module } from '@nestjs/common';
import { UserServiceController } from './user_service.controller';
import { UserServiceService } from './user_service.service';

@Module({
  controllers: [UserServiceController],
  providers: [UserServiceService],
})
export class UserServiceModule {}

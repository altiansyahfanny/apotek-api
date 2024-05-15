import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CommonModule } from '../common/common.module';
import { FileModule } from '../file/file.module';

@Module({
  imports: [CommonModule, FileModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

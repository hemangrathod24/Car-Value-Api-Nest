import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';

import { Report } from 'src/reports/report.entity';
import { CurretUserMiddleware } from './middlewares/current-user.middleware';


@Module({
  imports: [TypeOrmModule.forFeature([User,Report])],
  controllers: [UsersController],
  providers: [UsersService,AuthService,
    
  ],    
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(CurretUserMiddleware).forRoutes('*');
  }
}

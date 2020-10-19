import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, AuthModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}

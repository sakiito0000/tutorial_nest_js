import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "tutorial-nest",
      password: "tutorial-nest-password",
      database: "test",
      entities: ['dist/**/*.entity{.ts,.js}'],
      // テストデータなのでmigrationさせる。
      synchronize: true,
    }),
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

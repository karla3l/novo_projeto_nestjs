// import { Module } from '@nestjs/common';
// import { UsersModule } from './users/users.module';
// import { databaseProviders } from './database.providers';

// @Module({
//   providers: [...databaseProviders],
//   exports: [...databaseProviders],
//   imports: [
//     UsersModule,
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'root',
//       database: 'test',
//       entities: [],
//       synchronize: true,
//       loggig: true,

//     }),
//   ],
// })

export class DatabaseModule {}

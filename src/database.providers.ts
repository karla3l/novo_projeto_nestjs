// import { DataSource } from 'typeorm';
// import { CreateUserDto } from './users/dto/users.dto';
// import { CreateUser } from './users/entity/create.user';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'mysql',
//         host: 'localhost',
//         port: 3306,
//         username: 'root',
//         password: 'admin',
//         database: 'animals',
//         // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         entities: [CreateUser],
//         synchronize: true,
//         logging: true,
//       });

//       return dataSource.initialize();
//     },
//   },
// ];

import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { StudentEntity } from './student.entity'
import { StudentDto } from './dto/student.dto'

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([StudentEntity])],
      resolvers: [{ DTOClass: StudentDto, EntityClass: StudentEntity }],
    }),
  ]
})
export class StudentsModule {}

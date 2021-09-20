import { 
    FilterableField, 
    IDField, 
    QueryOptions, 
    PagingStrategies 
} from '@nestjs-query/query-graphql';
import { ObjectType, GraphQLTimestamp, Field, ID } from '@nestjs/graphql';

@ObjectType('Student')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET })
export class StudentDto {

    @IDField(() => ID)
    id!: number;
  
    @FilterableField()
    name!: string;
  
    @FilterableField()
    email!: string;

    @FilterableField()
    cpf!: string; 
  
    @Field(() => GraphQLTimestamp)
    created_at!: Date;
  
    @Field(() => GraphQLTimestamp)
    updated_at!: Date;

}

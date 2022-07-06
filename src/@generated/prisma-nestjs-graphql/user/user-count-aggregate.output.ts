import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    username!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @HideField()
    password!: number;

    @Field(() => Int, {nullable:false})
    img_path!: number;

    @HideField()
    hashedRefreshToken!: number;

    @HideField()
    created_at!: number;

    @HideField()
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

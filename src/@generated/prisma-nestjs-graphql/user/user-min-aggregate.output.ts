import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @HideField()
    password?: string;

    @Field(() => String, {nullable:true})
    img_path?: string;

    @HideField()
    hashedRefreshToken?: string;

    @HideField()
    created_at?: Date | string;

    @HideField()
    updated_at?: Date | string;
}

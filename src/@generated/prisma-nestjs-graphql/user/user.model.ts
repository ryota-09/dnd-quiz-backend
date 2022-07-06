import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Game } from '../game/game.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    username!: string;

    /**
     * @Validator.@IsEmail()
     */
    @Field(() => String, {nullable:false,description:'@Validator.@IsEmail()'})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:false})
    img_path!: string;

    @HideField()
    hashedRefreshToken!: string | null;

    @HideField()
    created_at!: Date;

    @HideField()
    updated_at!: Date;

    @Field(() => [Game], {nullable:true})
    game_history?: Array<Game>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

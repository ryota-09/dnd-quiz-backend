import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { GameUpdateManyWithoutUserNestedInput } from '../game/game-update-many-without-user-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    username?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    img_path?: StringFieldUpdateOperationsInput;

    @HideField()
    hashedRefreshToken?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    created_at?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => GameUpdateManyWithoutUserNestedInput, {nullable:true})
    game_history?: GameUpdateManyWithoutUserNestedInput;
}

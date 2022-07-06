import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    img_path = "img_path",
    hashedRefreshToken = "hashedRefreshToken",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

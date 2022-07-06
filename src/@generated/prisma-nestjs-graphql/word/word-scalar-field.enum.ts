import { registerEnumType } from '@nestjs/graphql';

export enum WordScalarFieldEnum {
    id = "id",
    text = "text",
    level = "level"
}


registerEnumType(WordScalarFieldEnum, { name: 'WordScalarFieldEnum', description: undefined })

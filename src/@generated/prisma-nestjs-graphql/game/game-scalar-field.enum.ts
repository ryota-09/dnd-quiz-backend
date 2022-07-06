import { registerEnumType } from '@nestjs/graphql';

export enum GameScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    trial_time = "trial_time",
    correct_count = "correct_count",
    vocabulary_point = "vocabulary_point",
    total_point = "total_point",
    created_at = "created_at"
}


registerEnumType(GameScalarFieldEnum, { name: 'GameScalarFieldEnum', description: undefined })

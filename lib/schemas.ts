import { z } from "zod"
import { USE_BIRTH_MONTH } from "./constants"

export const generateKeywordSchema = z.object({
    nickname: z
        .string()
        .min(1, "昵称不能为空")
        .max(50, "昵称不能超过50个字符"),
    gender: z.enum(["male", "female", "unknown"]),
    birthday: USE_BIRTH_MONTH
        ? z
            .string()
            .min(1, "生日不能为空")
            .regex(/^\d{4}-\d{2}-\d{2}$/, "生日格式不正确")
        : z.string().nullable().default(""),
})

export type GenerateKeywordInput = z.infer<typeof generateKeywordSchema>
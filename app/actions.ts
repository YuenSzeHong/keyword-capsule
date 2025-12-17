"use server"

import { generateKeywordSchema } from "@/lib/schemas"
import { getKeywordByNicknameAndGender } from "@/lib/keywords"
import { USE_BIRTH_MONTH } from "@/lib/constants"

export async function generateKeyword(
    prevState: any,
    formData: FormData
): Promise<{ keyword: string } | { error: string }> {
    try {
        const nickname = formData.get("nickname")
        const gender = formData.get("gender")
        let birthday = formData.get("birthday")

        // If birth month feature is disabled, set birthday to empty string
        if (!USE_BIRTH_MONTH) {
            birthday = ""
        }

        const result = generateKeywordSchema.safeParse({
            nickname,
            gender,
            birthday,
        })

        if (!result.success) {
            const errors = result.error.flatten().fieldErrors
            return { error: Object.values(errors)[0]?.[0] || "验证失败" }
        }

        const keyword = await getKeywordByNicknameAndGender(
            result.data.nickname,
            result.data.gender,
            result.data.birthday || ""
        )

        return { keyword }
    } catch (error) {
        console.error("Error generating keyword:", error)
        return { error: "生成关键词失败，请重试" }
    }
}

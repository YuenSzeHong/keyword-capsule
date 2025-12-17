import seedrandom from "seedrandom"
import { KEYWORDS, USE_BIRTH_MONTH, type Gender, type Month } from "@/lib/constants"

async function sha256(message: string): Promise<string> {
    const encoder = new TextEncoder()
    const data = encoder.encode(message)
    const hashBuffer = await crypto.subtle.digest("SHA-256", data)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

export async function getKeywordByNicknameAndGender(
    nickname: string,
    gender: Gender,
    birthday: string
): Promise<string> {
    // Create a seed from nickname + birthday hash (use first 64 bits for better distribution)
    const fullHash = await sha256(`${nickname.trim()}:${birthday}`)
    const seed = fullHash.substring(0, 16) // 16 hex chars = 64 bits

    // Create seeded random number generator
    const rng = seedrandom(seed)

    // Get keywords based on whether birth month feature is enabled
    let keywords: string[]
    if (USE_BIRTH_MONTH && birthday) {
        // Extract month from birthday (YYYY-MM-DD format)
        const month = parseInt(birthday.split("-")[1], 10) as Month
        keywords = (KEYWORDS as any)[gender][month]
    } else {
        keywords = (KEYWORDS as any)[gender]
    }

    const randomValue = rng()
    const index = Math.floor(randomValue * keywords.length)

    return keywords[index]
}
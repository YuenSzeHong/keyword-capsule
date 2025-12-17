export type Gender = "male" | "female" | "unknown"
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

// Check if birth month feature is enabled (defaults to false)
export const USE_BIRTH_MONTH = process.env.USE_BIRTH_MONTH === "true"

// Simple keyword lists (used when USE_BIRTH_MONTH is false)
const SIMPLE_KEYWORDS: Record<Gender, string[]> = {
    male: [
        "社交达人", "知识渊博", "运动健将", "艺术天才", "领导人才", "创意大师",
        "思维缜密", "热心肠", "冒险家", "完美主义", "水群机器", "史料搬运工",
        "究极变态", "苦命鸳鸯", "暖心天使", "阳光小零", "柔情小南良", "气氛担当",
        "颜值担当", "紫薇星人", "思想家", "完美主义者", "团队领导", "热血青年",
        "温暖治愈者", "幽默大王", "独行侠",
    ],
    female: [
        "温柔贤惠", "才华横溢", "独立自主", "热情洋溢", "理性思维", "创意十足",
        "热心助人", "智慧女性", "魅力四射", "和平使者", "水群机器", "史料搬运工",
        "暖心天使", "阳光小零", "柔情小南良", "苦命鸳鸯", "气氛担当", "颜值担当",
        "究极变态", "紫薇星人",
    ],
    unknown: [
        "神秘人物", "智慧之光", "创意天才", "和谐使者", "勇气化身", "学问大家",
        "热心人士", "艺术大家", "领导风范", "完美典范", "水群机器", "史料搬运工",
        "暖心天使", "阳光小零", "柔情小南良", "苦命鸳鸯", "气氛担当", "颜值担当",
        "究极变态", "紫薇星人",
    ],
}

// Monthly themed keyword lists (used when USE_BIRTH_MONTH is true)
const MONTHLY_KEYWORDS: Record<Gender, Record<Month, string[]>> = {
    male: {
        1: ["冬生勇者", "寒刃铁汉", "坚冰之心", "严冬骨架", "沉静谋划者", "冬日之魂", "冷徽分析家", "坚硬斗志"],
        2: ["严寒猎手", "春前长兄", "寒梅之心", "坚韧柱石", "冬尾男儿", "岁末领袖", "隐忍英雄", "传承舵手"],
        3: ["破冰勇者", "初春建设者", "雷鸣之力", "野性拓荒者", "生机猎手", "草根战士", "春原冒险家", "振翅雄鹰"],
        4: ["清风思者", "温春浪客", "雨润诗人", "柔和行者", "温柔剑客", "缱绻修行者", "春晖书生", "清朗独行侠"],
        5: ["力量化身", "奋进卫士", "拼搏之骄", "热血格斗者", "春夏使者", "勤奋之星", "行动猛将", "青年竞争者"],
        6: ["热情领航者", "初夏男神", "赤诚少年", "火焰男儿", "狂欢者", "激烈波澜者", "六月掌权者", "夏初英豪"],
        7: ["烈焰之体", "盛夏浪子", "火焰探险者", "酷热猛男", "无畏斗士", "热血先驱者", "烈日之身", "骄阳传奇"],
        8: ["秋意转变者", "季交铁血", "秋风斥候", "暑褪勇者", "耐热生存者", "季节掌握者", "八月坚强者", "秋初变革者"],
        9: ["秋月剑客", "成熟思考者", "丰收之王", "清月骑士", "秋水静者", "月夜智者", "秋生哲学家", "乡思浪人"],
        10: ["金秋卫护者", "金月英雄", "家国男儿", "红叶守卫者", "收获勇者", "盛世统帅", "十月建者", "山河护持者"],
        11: ["初冬隐者", "霜生武者", "深思剑豪", "季末导师", "博学睿者", "冬前猎人", "十一月智者", "寒意沉思者"],
        12: ["寒冬卫士", "岁末统帅", "冰雪战者", "雪域守护", "年尾豪杰", "极冬传奇", "十二月贤者", "冰心之王"],
    },
    female: {
        1: ["冬生冰美人", "严寒公主", "坚冰妖娆", "寒岭丽人", "寒梅娇姝", "冬月精妙", "冬心冰雪", "冷月皇妃"],
        2: ["严冬媛主", "冬末甜蜜", "春前丽质", "隐韧柔女", "岁末少妇", "坚贞圣女", "冬尾佳人", "隐忍娇娃"],
        3: ["春生青娥", "新芽清纯", "朝气小妖", "野性映月", "萌动媛媛", "生机少女", "春意靓丽", "初春仙姿"],
        4: ["春风柔姝", "温和淑女", "雨润丹青", "春溪慧眼", "柔柳卿卿", "诗意妙龄", "春晖文采", "江南晶莹"],
        5: ["热力朝气女", "勤劳巧手", "青春女将", "火焰活力", "奋进少女", "拼搏皇后", "五月光彩", "竞争圣女"],
        6: ["热情奔放女", "夏初妖娆", "赤诚娇娆", "火焰淑女", "热烈蜜糖", "初夏皇姿", "烈日娇柔", "炽热媛媛"],
        7: ["盛夏烈焰女", "酷热妖艳", "激烈炫彩", "火焰女皇", "无敌女霸", "烈日圣女", "极热燃烧", "骄阳骄女"],
        8: ["季交蜕变女", "秋初娘娇", "季变来信", "交替娇媚", "余热绯红", "季节转换者", "秋意霓裳", "秋初丽媛"],
        9: ["秋月月宫仙", "成熟温柔皙", "丰收女帝", "秋月倾城", "秋水灵眸", "月夜娇女", "秋生雅姝", "乡思丽姝"],
        10: ["金秋女卫士", "收获女杰", "丰富少女", "金叶守卫", "秋枫妙媛", "盛世圣女", "十月绝代", "山河女娇"],
        11: ["初冬绮女", "霜生娴女", "深思妙媛", "季末媛姝", "智慧圣女", "冬前仙娥", "十一月妙韵", "寒意柔依"],
        12: ["寒冬娇天使", "岁末女帝", "年尾丽人", "极冬妖媚", "冬心女皇", "冰雪仙妃", "十二月圣女", "冰心绝色"],
    },
    unknown: {
        1: ["冬生璀璨", "寒冰守卫者", "坚冰奇妙", "严冬信使", "冰月睿者", "冬生奇异", "冷月瑞景", "坚硬庇护者"],
        2: ["冬末野猎者", "春前信差", "隐忍慈爱", "岁尾奇灵", "冬尾瑞彩", "冬季卫护者", "坚贞睿思", "隐韧异景"],
        3: ["春生破晓者", "新芽报信者", "朝气奇灵", "野地庇佑", "萌动福音", "春月祥瑞", "新生睿慧", "初春奇异"],
        4: ["春风思考者", "温和信使", "柔和福祉", "春溪奇秀", "柔柳庇护者", "诗意睿者", "春晖祥光", "清朗异韵"],
        5: ["热力奋发者", "勤劳信札", "奋进福祉", "火焰奇观", "热血庇佑", "五月祥瑞", "竞争睿思", "青年异彩"],
        6: ["热情竞渡者", "夏初信使", "赤诚福音", "火焰奇灵", "热烈庇护", "初夏祥光", "烈日睿者", "炽热奇迹"],
        7: ["盛夏烈焰者", "酷热信报", "激烈天祉", "极热奇景", "烈火庇佑者", "烈日祥瑞", "烈焰睿慧", "骄阳异象"],
        8: ["季交时变者", "秋初信使", "秋风福祉", "季转奇秀", "季变护佑者", "秋初祥光", "转换睿思", "季序异景"],
        9: ["秋月聚合者", "成熟信札", "丰收福音", "秋月奇灵", "月夜庇护者", "秋收祥瑞", "秋生睿者", "秋韵异韵"],
        10: ["金秋华彩者", "丰收信使", "收获福祉", "十月奇观", "丰富庇佑", "秋月祥彩", "盛世睿思", "金秋异景"],
        11: ["初冬沉思者", "霜生信报", "寒气福祉", "十一月奇灵", "季末庇护", "冬前祥光", "智慧睿者", "时序变换者"],
        12: ["寒冬圣礼者", "年尾信使", "冰雪福音", "十二月奇景", "年终庇佑者", "冬生祥彩", "年尾睿思", "极冬异彩"],
    },
}

function parseExtraKeywords() {
    try {
        const extraMale = process.env.EXTRA_KEYWORDS_MALE ? JSON.parse(process.env.EXTRA_KEYWORDS_MALE) : []
        const extraFemale = process.env.EXTRA_KEYWORDS_FEMALE ? JSON.parse(process.env.EXTRA_KEYWORDS_FEMALE) : []
        const extraUnknown = process.env.EXTRA_KEYWORDS_UNKNOWN ? JSON.parse(process.env.EXTRA_KEYWORDS_UNKNOWN) : []

        if (USE_BIRTH_MONTH) {
            // Extra keywords apply to all months
            const extra: Record<Gender, Record<Month, string[]>> = {
                male: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] },
                female: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] },
                unknown: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] },
            }

            for (let month = 1; month <= 12; month++) {
                extra.male[month as Month] = extraMale
                extra.female[month as Month] = extraFemale
                extra.unknown[month as Month] = extraUnknown
            }
            return extra
        } else {
            // Simple format for non-monthly mode
            return {
                male: extraMale,
                female: extraFemale,
                unknown: extraUnknown,
            }
        }
    } catch (error) {
        console.error("Failed to parse extra keywords from environment variables:", error)
        if (USE_BIRTH_MONTH) {
            return {
                male: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] },
                female: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] },
                unknown: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] },
            }
        } else {
            return { male: [], female: [], unknown: [] }
        }
    }
}

const extraKeywords = parseExtraKeywords()

export const KEYWORDS = USE_BIRTH_MONTH
    ? {
        male: Object.fromEntries(
            Object.entries(MONTHLY_KEYWORDS.male).map(([month, keywords]) => [
                month,
                [...keywords, ...(extraKeywords as any).male[Number(month) as Month]]
            ])
        ) as Record<Month, string[]>,
        female: Object.fromEntries(
            Object.entries(MONTHLY_KEYWORDS.female).map(([month, keywords]) => [
                month,
                [...keywords, ...(extraKeywords as any).female[Number(month) as Month]]
            ])
        ) as Record<Month, string[]>,
        unknown: Object.fromEntries(
            Object.entries(MONTHLY_KEYWORDS.unknown).map(([month, keywords]) => [
                month,
                [...keywords, ...(extraKeywords as any).unknown[Number(month) as Month]]
            ])
        ) as Record<Month, string[]>,
    }
    : {
        male: [...SIMPLE_KEYWORDS.male, ...(extraKeywords as any).male],
        female: [...SIMPLE_KEYWORDS.female, ...(extraKeywords as any).female],
        unknown: [...SIMPLE_KEYWORDS.unknown, ...(extraKeywords as any).unknown],
    }

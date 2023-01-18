const enumType = ['feat', 'fix', 'style', 'chore', 'test', 'ci', 'refactor', 'revert', 'reformat', 'docs', 'build', 'perf']
const emojiReg = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g
const checkType = (header) => {
    header = `${header}`
    const realType = header.split(':')[0]
    return enumType.includes(realType)
}

const checkSubject = (header) => {
    header = `${header}`
    const realSubject = (header.split(':')[1] || '') .trim()
    if (!realSubject) {
        return false
    }
    return realSubject.length > 0
}

const checkEmoji = (header) => {
    header = `${header}`
    if (!checkSubject(header)) return false
    const realSubject = header.split(':')[1].trim()
    const code = realSubject
    return code.match(emojiReg)
}
export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum-rule': [2, 'never'],
        'subject-enum-rule': [2, 'never'],
        'subject-emoji-rule': [2, 'never'],
        'type-enum': [0, 'never'],
        'error-tip': [1, 'never'],
        'type-empty': [0, 'always'],
        'subject-empty': [0, 'always'],
    },
    plugins: [
        {
            rules: {
                'type-enum-rule': ({ header }) => {
                    return [checkType(header), `提交类型错误，可选值有: ${enumType.join(', ')}`]
                },
                'subject-enum-rule': ({ header }) => {
                    return [checkSubject(header), '需要填写提交主题']
                },
                'subject-emoji-rule': ({ header }) => {
                    return [checkEmoji(header), '不管！！！ 好看才是硬道理，必须加上emoji表情']
                },
                'error-tip': ({ header }) => {
                    return [checkType(header) && checkSubject(header) && checkEmoji(header), '参考格式如: "feat: 😁开发新功能" \n emoji表情可以打开 https://getemoji.com/ 选取']
                },
            },
        }
    ],
}

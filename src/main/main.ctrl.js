
const telnumber = (req,res) => {
    const tel = '02-514-7997'
    /**
     * TODO 상담전화번호를 고정된 문자열이 아닌 어딘가에서 가져올 수 있다면 어떨까?
     * DB 에서 가져올 수 있는게 제일 좋음
     * 상담전화번호를 DB 에 입력시켜줄 수 있는 사용자 폼이 있으면 좋겠다.
     */
    return res.send(tel).end();
}

const operatetime = (req,res) => {
    const time = '[월화수] 10:00 - 19:00\n[금요일] 10:00 - 20:00(야간진료)\n[토요일] 10:00 - 16:00'
    const notice = '* 목요일, 일요일은 휴무입니다.\n* 공휴일이 있는 주는 목요일에 10 - 19시까지 진료합니다.'
    /**
     * TODO 상담전화번호를 고정된 문자열이 아닌 어딘가에서 가져올 수 있다면 어떨까?
     * DB 에서 가져올 수 있는게 제일 좋음
     * 상담전화번호를 DB 에 입력시켜줄 수 있는 사용자 폼이 있으면 좋겠다.
     */
    return res.send(time+notice).end();
}

// json 객체를 문자열로, 문자열을 객체로 바꿔주는 규칙같은 거
/*
json.stringfy(객체) => 스트링
json.parse(스트링) => 객체
res.json => 응답을 json 으로 주겠다
res.json({ tel }).end
*/

module.exports = {
    telnumber, operatetime
}
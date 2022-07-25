
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

const signatureclinic = (req,res)=> {
    const signatureList = [
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2021/08/r5.jpg',
            title : '중년 눈성형',
            body : '처진 눈썹과 눈꺼풀을 시원하고 매력적인 눈매로 만들어드립니다.'
        },
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2021/08/f4-1.jpg',
            title : '매몰법 (식스락)',
            body : '여러 번 매몰을 연속적으로 매듭지어 자연스러운 라인을 만들어줍니다.'
        },
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2021/08/r7.jpg',
            title : '리프팅 레이저',
            body : '성형외과 전문의 여의사가 섬세하고 체계적인 시술을 진행합니다.'
        },
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2021/08/f6-1.jpg',
            title : '광채주사',
            body : '촉촉한 피부, 잔주름 개선, 피부톤 개선에 효과적입니다.'
        },
    ]

    return res.json(signatureList).end();
}

const event = (req,res)=>{
    const eventList = [
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2022/05/pop-up_%EC%A0%95%EB%B0%A9%ED%96%A5.jpg',
            title : '빛나는 신랑 신부를 위한'
        },
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2022/03/Thumbnail.jpg',
            title : '♥예쁜 눈을 얻을 수 있는 기회♡'
        },
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2022/02/%EB%88%88%EC%8D%B9%ED%95%98%EA%B1%B0%EC%83%81%EC%88%A0-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
            title : '*리얼모델 모집 이벤트'
        },
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2022/02/%ED%95%98%EC%95%88%EA%B2%80%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg',
            title : '*리얼모델 모집 이벤트'
        },
        {
            imgurl : 'http://stemkclinic.com/wp-content/uploads/2022/02/%EC%8C%8D%EC%88%98%EC%8D%B8%EB%84%A4%EC%9D%BC-1.jpg',
            title : '*리얼모델 모집 이벤트'
        },   
    ]
    return res.json(eventList).end();
}
// json 객체를 문자열로, 문자열을 객체로 바꿔주는 규칙같은 거
/*
json.stringfy(객체) => 스트링
json.parse(스트링) => 객체
res.json => 응답을 json 으로 주겠다
res.json({ tel }).end
*/

module.exports = {
    telnumber, operatetime, signatureclinic, event
}
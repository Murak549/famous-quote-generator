window.onload = function changeText() {
    let quoteNum = Math.floor(Math.random()*quoteList.length);
    document.querySelector(".Quote").innerHTML = quoteList[quoteNum].quote;
    document.querySelector("#Author").innerHTML = "-"+quoteList[quoteNum].author;
}
var quoteList = [
    { quote: "달리는 기차 위에 중립은 없다", author: "하워드 진" },
    { quote: "만국의 노동자여, 단결하라!", author: "카를 마르크스" },
    { quote: "달리는 기차 위에 중립은 없다", author: "하워드 진" },
    { quote: "노병은 죽지 않는다, 다만 사라질 뿐", author: "맥 아더" },
    { quote: "하나의 유령이 유럽을 배회하고 있다.", author: "카를 마르크스" },
    { quote: "종교의 비판은 모든 비판 중에서 가장 자유로운 비판이다.", author: "카를 마르크스" },
    { quote: "돈이 모든 것을 말한다.", author: "카를 마르크스" },
    { quote: "자유는 자유로운 다른 모든 것에 대한 기초이다.", author: "카를 마르크스" },
    { quote: "전통은 언제나 이성보다 먼저 존재한다.", author: "카를 마르크스" },
    { quote: "일하는 자본가들은 절대 일하지 않는 노동자들에게 정치적 파괴력을 부여한다.", author: "카를 마르크스" },
    { quote: "우리는 국가를 폐기하고 모든 일을 대표직을 통해 조정해야 한다.", author: "카를 마르크스" },
    { quote: "문명은 불평등에 기반을 둔다.", author: "카를 마르크스" },
    { quote: "자본가들은 자신들이 존재하는 것 자체로 진보다.", author: "카를 마르크스" },
    { quote: "노동자들은 세계를 바꿀 권리가 있을 뿐 아니라 세계를 바꿀 의무가 있다.", author: "카를 마르크스" },
    { quote: "경제적 자유는 정치적 자유의 필요조건일 뿐이다.", author: "카를 마르크스" },
    { quote: "부르주아지는 역사에서 아주 혁명적인 역할을 해냈다.", author: "카를 마르크스" },
    { quote: "지금까지의 모든 사회의 역사는 계급 투쟁의 역사다.", author: "카를 마르크스" },
    { quote: "카피탈리즘는 우리가 식물에 물을 주듯 노동자에게 권리를 주는 것이 아니다. 우리는 그들에게 권리를 인정해야 한다. ", author: "블라디미르 레닌" },
    { quote: "사람이 자신의 역사를 만든다.", author: "블라디미르 레닌" },
    { quote: "정당하게 취득한 재산은 보호된다. 그러나 비정당하게 취득한 재산은 파괴되어야 한다.", author: "블라디미르 레닌" },
    { quote: "천재는 인류 역사에서 군중보다 더 많은 것을 이룬 적이 없다.", author: "블라디미르 레닌" },
    { quote: "평화는 대전쟁의 준비와 관련되어 있다.", author: "블라디미르 레닌" },
    { quote: "자유는 자유로운 것이 아니다. 그것은 고난과 어려움을 뜻한다. ", author: "블라디미르 레닌" },
    { quote: "지식은 힘이다.", author: "블라디미르 레닌" },
    { quote: "우리의 목표는 사람들이 합리적으로 생각하고 행동할 수 있도록 만드는 것이다.", author: "블라디미르 레닌" },
    { quote: "자신의 존재를 두려워하지 말고 그것을 스스로 만들어라.", author: "블라디미르 레닌" },
    { quote: "당신의 혁명이 유럽에 실패했다면, 그것은 당신의 혁명이 유럽에서 일어난 것이 아니라 당신이 유럽을 무시했기 때문이다.", author: "블라디미르 레닌" }
];


var jsonQuoteList = JSON.stringify(quoteList);
console.log(jsonQuoteList);

//no problem
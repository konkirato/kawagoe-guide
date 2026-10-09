function convertToUSD() {
    // 入力された日本円と為替レートを取得
    const yen = parseFloat(document.getElementById('yen').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    // 入力の検証
    if (isNaN(yen) || isNaN(exchangeRate) || exchangeRate <= 0) {
        document.getElementById('result').innerText = '유효한 일본 엔의 금액과 올바른 환율을 입력하세요.';
        return;
    }

    // 換算計算
    const dollars = yen * exchangeRate;

    // 結果を表示
    document.getElementById('result').innerText = `${yen} 엔은 ${dollars.toFixed(2)} 원입니다.`;
}
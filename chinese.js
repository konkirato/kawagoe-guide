function convertToUSD() {
    // 入力された日本円と為替レートを取得
    const yen = parseFloat(document.getElementById('yen').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    // 入力の検証
    if (isNaN(yen) || isNaN(exchangeRate) || exchangeRate <= 0) {
        document.getElementById('result').innerText = '请输入有效的日元金额和正确的汇率';
        return;
    }

    // 換算計算
    const dollars = yen * exchangeRate;

    // 結果を表示
    document.getElementById('result').innerText = `${yen} 日元是 ${dollars.toFixed(2)} 人民币。`;
}
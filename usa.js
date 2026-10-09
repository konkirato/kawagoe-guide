function convertToUSD() {
    // 入力された日本円と為替レートを取得
    const yen = parseFloat(document.getElementById('yen').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    // 入力の検証
    if (isNaN(yen) || isNaN(exchangeRate) || exchangeRate <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid amount in Japanese yen and the correct exchange rate.';
        return;
    }

    // 換算計算
    const dollars = yen / exchangeRate;

    // 結果を表示
    document.getElementById('result').innerText = `${yen} yen equals ${dollars.toFixed(2)} dollars.`;
}
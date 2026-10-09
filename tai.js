function convertToUSD() {
    // 入力された日本円と為替レートを取得
    const yen = parseFloat(document.getElementById('yen').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);

    // 入力の検証
    if (isNaN(yen) || isNaN(exchangeRate) || exchangeRate <= 0) {
        document.getElementById('result').innerText = 'กรุณากรอกจำนวนเยนญี่ปุ่นที่ถูกต้องและอัตราแลกเปลี่ยนที่ถูกต้อง';
        return;
    }

    // 換算計算
    const dollars = yen * exchangeRate;

    // 結果を表示
    document.getElementById('result').innerText = `${yen} เยนญี่ปุ่น เท่ากับ ${dollars.toFixed(2)} บาทไทย`;
}
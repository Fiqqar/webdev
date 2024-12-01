document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // cm ke m
    
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Mohon masukkan data yang valid.');
        return;
    }

    const bmi = (weight / (height * height) ).toFixed(2);

    const resultSection = document.getElementById('result');
    const bmiResult = document.getElementById('bmiResult');
    bmiResult.textContent = `Hasil BMI Anda: ${bmi}`;

    if (bmi < 18.5) {
        bmiResult.textContent += ' - Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiResult.textContent += ' - Berat badan normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiResult.textContent += ' - Kelebihan berat badan';
    } else {
        bmiResult.textContent += ' - Obesitas';
    }

    resultSection.classList.remove('hidden');
});

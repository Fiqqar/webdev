document.getElementById('healthForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const exercise = parseInt(document.getElementById('exercise').value);
    const diet = document.getElementById('diet').value;

    let healthStatus = getHealthStatus(age, exercise, diet);
    displayResult(healthStatus);
});

function getHealthStatus(age, exercise, diet) {
    if (age < 18) return "Usia terlalu muda untuk menjalani pola hidup sehat yang berat.";
    if (age >= 18 && age < 30) return (exercise >= 3 && diet === "yes") ? "Kamu sudah menjalani pola hidup sehat dengan baik!" : "Cobalah meningkatkan pola makan dan rutinitas olahraga.";
    if (age >= 30 && age < 50) return (exercise >= 2 && diet === "yes") ? "Pola hidup sehat kamu sudah cukup baik. Terus jaga kesehatan!" : "Tingkatkan olahraga dan perhatikan pola makan lebih baik.";
    return "Perhatikan kesehatan lebih seksama dengan usia yang semakin bertambah.";
}

function displayResult(status) {
    document.getElementById('resultMessage').innerText = status;
    document.getElementById('input').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
}

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function Menu(e){
    let list = document.querySelector('ul');

    if (e.name === 'menu') {
        e.name = 'close';
        list.classList.add('top-[80px]', 'opacity-100');
    } else {
        e.name = 'menu';
        list.classList.remove('top-[80px]', 'opacity-100');
    }
}


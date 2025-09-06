function factorize() {
    const input = document.getElementById("inputN").value;
    let n = parseInt(input, 10);

    if (!Number.isInteger(n) || n < 2) {
        document.getElementById("result").innerText = "Please enter an integer ≥ 2";
        return;
    }

    let num = n;
    const factors = [];
    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num = Math.floor(num / i);
        }
    }
    if (num > 1) factors.push(num);

    const counts = {};
    for (const f of factors) counts[f] = (counts[f] || 0) + 1;

    const resultStr = Object.entries(counts)
        .map(([factor, power]) => power > 1 ? `${factor}<sup>${power}</sup>` : factor)
        .join(" · ");

    const div = document.getElementById("result");
    div.innerHTML = resultStr;
    div.classList.remove("show"); // reset animation
    void div.offsetWidth;         // trigger reflow
    div.classList.add("show");    // animation
}
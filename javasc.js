const loanForm = document.getElementById('loanForm');
const resultDiv = document.getElementById('result');

loanForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const annualIncome = parseInt(document.getElementById('annualIncome').value);
    const creditScore = parseInt(document.getElementById('creditScore').value);
    const age = parseInt(document.getElementById('age').value);

    // Check eligibility criteria
    if (annualIncome >= 20000 && creditScore >= 700 && age >= 18 && age <= 65) {
        // Calculate monthly salary and loan amount
        const monthlySalary = annualIncome / 12;
        const loanAmount = monthlySalary * 10;

        // Calculate EMI using the formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
        const interestRate = 0.08; // Assuming 8% annual interest rate
        const tenure = 12; // Assuming 12-month loan tenure
        const r = interestRate / 12;
        const n = tenure;
        const emi = (loanAmount * r * (1 + r)^n) / ((1 + r)^n - 1);

        // Check EMI payment capacity
        if (emi <= monthlySalary * 0.6) {
            resultDiv.innerHTML = "Congratulations! You are eligible for a loan of Rs. " + loanAmount + ". Your EMI will be Rs. " + emi.toFixed(2);
        } else {
            resultDiv.innerHTML = "Sorry, you don't meet the EMI payment capacity criteria.";
        }
    } else {
        resultDiv.innerHTML = "Sorry, you don't meet the eligibility criteria.";
    }
});
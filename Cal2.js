// Smooth scrolling
function scrollToSection(section) {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
}

// Change navbar color on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize date pickers
$(document).ready(function () {
    $("#year, #year2").datepicker({
        format: "yyyy",
        viewMode: "years",
        minViewMode: "years",
        autoclose: true,
    });
});

// Function to calculate retirement gratuity
function calculateRetirementGratuity(previousTotal) {
    const baseAmount = 468;
    const percentage = 8.19;
    return previousTotal + baseAmount + ((previousTotal + baseAmount) * (percentage / 100)) / 2;
}

// Function to handle the calculation based on user input
function calculateGratuity(startYear, endYear, initialTotal) {
    if (isNaN(endYear) || endYear <= startYear) {
        alert("Invalid input. Please enter a valid numeric value greater than the fixed starting year.");
        return null;
    }

    let totalForYear = initialTotal;
    for (let year = startYear; year <= endYear - 2; year++) {
        totalForYear = calculateRetirementGratuity(totalForYear);
    }

    return totalForYear;
}

// Function to calculate the result
function calculateResult() {
    let z = parseInt(document.getElementById("year").value, 10);
    let x = document.getElementById("cal1").value;
    let last2 = document.getElementById("cal2").value;
    let y, l, k, n;

    const monthValues = {
        "January": 108,
        "February": 99,
        "March": 90,
        "April": 81,
        "May": 72,
        "June": 63,
        "July": 54,
        "August": 45,
        "September": 36,
        "October": 27,
        "November": 18
    };

    const lastMonthValues = {
        "January": 39,
        "February": 78,
        "March": 117,
        "April": 156,
        "May": 195,
        "June": 234,
        "July": 273,
        "August": 312,
        "September": 351,
        "October": 390,
        "November": 429
    };

    if (z < 1995) {
        y = monthValues[x] || 9;
        k = calculateGratuity(2014, z, 487);

        l = lastMonthValues[last2] || 468;
        n = (y + (1995 - z - 1) * 100 + 4945 + k + l).toFixed(2);

    } else if (z < 2013) {
        y = monthValues[x] || 9;
        let s = [112, 232, 362, 502, 654, 820, 1001, 1201, 1420, 1663, 1933, 2232, 2566, 2939, 3357, 3826, 4352][2012 - z] || 4945;
        k = calculateGratuity(2014, z, 487);
        l = lastMonthValues[last2] || 468;
        n = (y + s + k + l).toFixed(2);

    } else {
        y = {
            "January": 468,
            "February": 429,
            "March": 390,
            "April": 351,
            "May": 312,
            "June": 273,
            "July": 234,
            "August": 195,
            "September": 156,
            "October": 117,
            "November": 78
        }[x] || 39;

        k = calculateGratuity(parseInt(document.getElementById("year").value, 10), z, 487);
        l = lastMonthValues[last2] || 468;
        n = (y + k + l).toFixed(2);
    }

    // Displaying result in a styled alert
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<div class="alert alert-success"><p class="result-text">Rs : ${n}</p></div>`;
}

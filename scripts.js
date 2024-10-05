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

  // Function to calculate retirement gratuity for a given year
  function calculateRetirementGratuity(previousTotal) {
    // Constants
    const baseAmount = 468;
    const percentage = 8.19;

    // Calculate retirement gratuity for the current year
    const currentTotal =
      previousTotal +
      baseAmount +
      ((previousTotal + baseAmount) * (percentage / 100)) / 2;

    return currentTotal;
  }

  // Function to handle the calculation based on user input
  function calculateGratuity() {
    // Fixed starting year
    const startYear = 2014;

    // Get user input for the end year
    let endYear = document.getElementById("year2").value;

    // Convert the input value to a number
    endYear = parseInt(endYear);

    // Validate input
    if (isNaN(endYear) || endYear <= startYear) {
      alert(
        "Invalid input. Please enter a valid numeric value greater than the fixed starting year."
      );
    } else {
      // Calculate total amount for the specified range
      let totalForYear = calculateRetirementGratuity(487); // Starting total gratuity fixed at 487
      for (let year = startYear; year <= endYear - 2; year++) {
        totalForYear = calculateRetirementGratuity(totalForYear);
      }

      return totalForYear;
    }
  }
  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //Calculate after 2013 RetirementGratuity
  // Function to calculate retirement gratuity for a given year
  function calculateRetirementGratuity1(previousTotal) {
    // Constants
    const baseAmount = 468;
    const percentage = 8.19;

    // Calculate retirement gratuity for the current year
    const currentTotal =
      previousTotal +
      baseAmount +
      ((previousTotal + baseAmount) * (percentage / 100)) / 2;

    return currentTotal;
  }

  // Function to handle the calculation based on user input
  function calculateGratuity1() {
    // Fixed starting year
    const startYear = parseInt(document.getElementById("year").value, 10);

    // Get user input for the end year
    let endYear = document.getElementById("year2").value;

    // Convert the input value to a number
    endYear = parseInt(endYear);

    // Validate input
    if (isNaN(endYear) || endYear <= startYear) {
      alert(
        "Invalid input. Please enter a valid numeric value greater than the fixed starting year."
      );
    } else {
      // Calculate total amount for the specified range
      let totalForYear = calculateRetirementGratuity(487); // Starting total gratuity fixed at 487
      for (let year = startYear; year <= endYear - 2; year++) {
        totalForYear = calculateRetirementGratuity(totalForYear);
      }

      return totalForYear;
    }
  }

  function calculateResult() {
    let y, n, l, k, j;
    let z = parseInt(document.getElementById("year").value, 10);
    let x = document.getElementById("cal1").value;
    let last2 = document.getElementById("cal2").value;

    if (z < 1995) {
      switch (x) {
        case "January":
          y = 108;
          break;
        case "February":
          y = 99;
          break;
        case "March":
          y = 90;
          break;
        case "April":
          y = 81;
          break;
        case "May":
          y = 72;
          break;
        case "June":
          y = 63;
          break;
        case "July":
          y = 54;
          break;
        case "August":
          y = 45;
          break;
        case "September":
          y = 36;
          break;
        case "October":
          y = 27;
          break;
        case "November":
          y = 18;
          break;
        default:
          y = 9;
      }

      // Call calculateGratuity function and assign the result to k
      k = calculateGratuity();
      //console.log(k);

      switch (last2) {
        case "January":
          l = 39;
          break;
        case "February":
          l = 78;
          break;
        case "March":
          l = 117;
          break;
        case "April":
          l = 156;
          break;
        case "May":
          l = 195;
          break;
        case "June":
          l = 234;
          break;
        case "July":
          l = 273;
          break;
        case "August":
          l = 312;
          break;
        case "September":
          l = 351;
          break;
        case "October":
          l = 390;
          break;
        case "November":
          l = 429;
          break;
        default:
          l = 468;
      }
      j = k + l;

      n = y + (1995 - z - 1) * 100 + 4945 + j;
      n = n.toFixed(2);

      // Displaying result in a styled alert
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
      <div class="alert alert-success">
        <p class="result-text">Rs : ${n}</p>
      </div>
    `;
    } else if (2013 > z) {
      switch (x) {
        case "January":
          y = 108;
          break;
        case "February":
          y = 99;
          break;
        case "March":
          y = 90;
          break;
        case "April":
          y = 81;
          break;
        case "May":
          y = 72;
          break;
        case "June":
          y = 63;
          break;
        case "July":
          y = 54;
          break;
        case "August":
          y = 45;
          break;
        case "September":
          y = 36;
          break;
        case "October":
          y = 27;
          break;
        case "November":
          y = 18;
          break;
        default:
          y = 9;
      }

      //Call 1995 to 2013
      g = 2012 - z;
      //console.log(g);
      switch (g) {
        case 1:
          s = 112;
          break;
        case 2:
          s = 232;
          break;
        case 3:
          s = 362;
          break;
        case 4:
          s = 502;
          break;
        case 5:
          s = 654;
          break;
        case 6:
          s = 820;
          break;
        case 7:
          s = 1001;
          break;
        case 8:
          s = 1201;
          break;
        case 9:
          s = 1420;
          break;
        case 10:
          s = 1663;
          break;
        case 11:
          s = 1933;
          break;
        case 12:
          s = 2232;
          break;
        case 13:
          s = 2566;
          break;
        case 14:
          s = 2939;
          break;
        case 15:
          s = 3357;
          break;
        case 16:
          s = 3826;
          break;
        case 17:
          s = 4352;
          break;
        default:
          s = 4945;
      }

      // Call calculateGratuity function and assign the result to k
      k = calculateGratuity();
      //console.log(k);

      switch (last2) {
        case "January":
          l = 39;
          break;
        case "February":
          l = 78;
          break;
        case "March":
          l = 117;
          break;
        case "April":
          l = 156;
          break;
        case "May":
          l = 195;
          break;
        case "June":
          l = 234;
          break;
        case "July":
          l = 273;
          break;
        case "August":
          l = 312;
          break;
        case "September":
          l = 351;
          break;
        case "October":
          l = 390;
          break;
        case "November":
          l = 429;
          break;
        default:
          l = 468;
      }
      j = k + l;

      n = y + s + j;
      n = n.toFixed(2);

      // Displaying result in a styled alert
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
      <div class="alert alert-success">
        <p class="result-text">Rs : ${n}</p>
      </div>
    `;
    } else if (z >= 2013) {
      switch (x) {
        case "January":
          y = 468;
          break;
        case "February":
          y = 429;
          break;
        case "March":
          y = 390;
          break;
        case "April":
          y = 351;
          break;
        case "May":
          y = 312;
          break;
        case "June":
          y = 273;
          break;
        case "July":
          y = 234;
          break;
        case "August":
          y = 195;
          break;
        case "September":
          y = 156;
          break;
        case "October":
          y = 117;
          break;
        case "November":
          y = 78;
          break;
        default:
          y = 39;
      }

      //console.log(2013);
      // Call calculateGratuity function and assign the result to k(after 2013)
      k = calculateGratuity1();
     // console.log(k);

      switch (last2) {
        case "January":
          l = 39;
          break;
        case "February":
          l = 78;
          break;
        case "March":
          l = 117;
          break;
        case "April":
          l = 156;
          break;
        case "May":
          l = 195;
          break;
        case "June":
          l = 234;
          break;
        case "July":
          l = 273;
          break;
        case "August":
          l = 312;
          break;
        case "September":
          l = 351;
          break;
        case "October":
          l = 390;
          break;
        case "November":
          l = 429;
          break;
        default:
          l = 468;
      }
      j = y + k + l;
      //console.log(j);

      n = j;
      n = n.toFixed(2);

      // Displaying result in a styled alert
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
      <div class="alert alert-success">
        <p class="result-text">Rs : ${n}</p>
      </div>
    `;
    } else {
      // Displaying error in a styled alert
      let resultDiv = document.getElementById("result");
      resultDiv.innerHTML = `
      <div class="alert alert-danger">
        <p class="result-text">Error</p>
      </div>
    `;
    }
  }

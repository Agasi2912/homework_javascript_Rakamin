// Initialize an empty array to store registrants
const registrants = [];

// Function to update the list of registrants
function updateRegistrantList() {
    const pendaftarList = document.getElementById("pendaftar-list");
    pendaftarList.innerHTML = "";

    let totalUangSangu = 0;
    let totalUmur = 0;

    for (const registrant of registrants) {
        const row = pendaftarList.insertRow();
        row.insertCell(0).innerHTML = registrant.nama;
        row.insertCell(1).innerHTML = registrant.umur;
        row.insertCell(2).innerHTML = registrant.uangSangu;

        totalUangSangu += registrant.uangSangu;
        totalUmur += registrant.umur;
    }

    const rataUangSangu = totalUangSangu / registrants.length;
    const rataUmur = totalUmur / registrants.length;

    document.getElementById("rata-uang-sangu").textContent = rataUangSangu.toFixed(2);
    document.getElementById("rata-umur").textContent = rataUmur.toFixed(2);
}

// Event listener for form submission
document.getElementById("registration-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const umur = parseInt(document.getElementById("umur").value);
    const uangSangu = parseInt(document.getElementById("uang-sangu").value);

    // Validation
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert("Data tidak memenuhi kriteria.");
    } else {
        // Add registrant to the array
        registrants.push({ nama, umur, uangSangu });

        // Clear form inputs
        document.getElementById("nama").value = "";
        document.getElementById("umur").value = "";
        document.getElementById("uang-sangu").value = "";

        // Update the list of registrants
        updateRegistrantList();
    }
});

// Initialize the list of registrants on page load
updateRegistrantList();

document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.getElementById("editButton");
  const editForm = document.getElementById("editForm");
  const resetButton = document.getElementById("resetButton");
  const resetForm = document.getElementById("resetForm");

  //  biodata awal sebelum diedit
  const initialBiodata = {
    name: "Kadarisman",
    role: "Web Developer",
    availability: "Web Developer",
    usia: "28",
    lokasi: "Purwokerto",
    experience: "Ci4 & Laravel",
    email: "kadarismanfisika@gmail.com",
  };

  // Biodata untuk diedit
  let biodata = { ...initialBiodata };

  //isi form
  function fillForm(data) {
    document.getElementById("name").value = data.name;
    document.getElementById("role").value = data.role;
    document.getElementById("availability").value = data.availability;
    document.getElementById("usia").value = data.usia;
    document.getElementById("lokasi").value = data.lokasi;
    document.getElementById("experience").value = data.experience;
    document.getElementById("email").value = data.email;
  }

  //update display data
  function updateBiodataDisplay(data) {
    document.getElementById("nameDisplay").textContent = data.name;
    document.getElementById("roleDisplay").textContent = data.role;
    document.getElementById("availabilityDisplay").textContent = data.availability;
    document.getElementById("usiaDisplay").textContent = data.usia;
    document.getElementById("lokasiDisplay").textContent = data.lokasi;
    document.getElementById("experienceDisplay").textContent = data.experience;
    document.getElementById("emailDisplay").textContent = data.email;
  }

  //tombol edit
  editButton.addEventListener("click", function () {
    fillForm(biodata);
    editForm.style.display = "block";
  });

  // mengembalikan data yang diedit ke data awal line 8
  resetForm.addEventListener("click", function (e) {
    e.preventDefault();
    if (confirm("Anda akan merubah data keawal?")) {
      fillForm(initialBiodata);
      editForm.style.display = "block";
      alert("Reset Data berhasil");
    }
  });

  //konfirmasi simpan data
  editForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (confirm("Anda akan merubah data?")) {
      biodata.name = document.getElementById("name").value;
      biodata.role = document.getElementById("role").value;
      biodata.availability = document.getElementById("availability").value;
      biodata.usia = document.getElementById("usia").value;
      biodata.lokasi = document.getElementById("lokasi").value;
      biodata.experience = document.getElementById("experience").value;
      biodata.email = document.getElementById("email").value;

      updateBiodataDisplay(biodata);
      editForm.style.display = "none";
      alert("Data berhasil diupdate");
    }
  });

  resetButton.addEventListener("click", function () {
    fillForm(initialBiodata);
  });
});

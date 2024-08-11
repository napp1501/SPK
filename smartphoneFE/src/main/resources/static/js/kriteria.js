$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "/api/kriteria",
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      let sum = 0;
      for (let j = 0; j < data.length; j++) {
        sum += parseFloat(data[j].bobot);
      }
      $("#totalll").text(sum);
    },
    error: (err) => {
      console.log(err);
    },
  });

  $("#data-kriteria").DataTable({
    ajax: {
      method: "GET",
      url: "/api/kriteria",
      dataSrc: "",
    },
    columns: [
      {
        data: function (row) {
          return row.kode_kriteria;
        },
      },
      { data: "name" },
      { data: "bobot" },
      {
        data: null,
        render: (data) => {
          return `
          <button
            type="button"
            class="btn btn-warning"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onclick=update(${data.id})
          >
          Edit
          <i class="fa-solid fa-pen-to-square"></i>
          </button>`;
        },
      },
    ],
  });
});

function update(id) {
  console.log(id);
  $.ajax({
    method: "GET",
    url: "/api/kriteria/" + id,
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      $("#update-id").val(data.id);
      $("#data-krit").val(data.name);
      $("#nilai-bobot").val(data.bobot);
      $("#kode-krit").val(data.kode_kriteria);
      // console.log(data.name);

      if (data.name === "Kamera") {
        document.getElementById("satu").innerHTML = "Kurang dari 10 MP";
        document.getElementById("dua").innerHTML = "10 MP - 29MP";
        document.getElementById("tiga").innerHTML = "30 MP - 59 MP";
        document.getElementById("empat").innerHTML = "60 MP - 89 MP";
        document.getElementById("lima").innerHTML = "Lebih dari atau = 90 MP";
      } else if (data.name === "Battery") {
        document.getElementById("satu").innerHTML = "Kurang dari 4000 mAh";
        document.getElementById("dua").innerHTML = "4000 mAh - 4.999 mAh";
        document.getElementById("tiga").innerHTML = "5000 mAh - 5999 mAh";
        document.getElementById("empat").innerHTML = "6000 mAh - 6999 mAh";
        document.getElementById("lima").innerHTML =
          "Lebih dari atau = 7000 mAh";
      } else if (data.name === "Memori") {
        document.getElementById("satu").innerHTML = "1GB - 16GB";
        document.getElementById("dua").innerHTML = "17GB - 32GB";
        document.getElementById("tiga").innerHTML = "33GB - 64GB";
        document.getElementById("empat").innerHTML = "65GB - 128GB";
        document.getElementById("lima").innerHTML = "129GB - 256GB";
      } else if (data.name === "Harga") {
        document.getElementById("satu").innerHTML =
          "Lebih dari atau = Rp. 9.000.000";
        document.getElementById("dua").innerHTML =
          "Rp. 7.000.000 - Rp. 8.999.999";
        document.getElementById("tiga").innerHTML =
          "Rp. 5.000.000 - Rp. 6.999.999";
        document.getElementById("empat").innerHTML =
          "Rp. 3.000.000 - Rp. 4.999.999";
        document.getElementById("lima").innerHTML =
          "Rp. 1.000.000 - Rp. 2.999.999";
      }
    },
    error: (err) => {
      console.log(err);
    },
  });

  $("#save-kriteria").click((event) => {
    event.preventDefault();
    let updateId = $("#update-id").val();
    let inputbobot = $("#nilai-bobot").val();
    let dataKriteria = $("#data-krit").val();
    let kodeKriteria = $("#kode-krit").val();
    if (inputbobot && dataKriteria && kodeKriteria !== "") {
      $.ajax({
        method: "PUT",
        url: "api/kriteria/" + updateId,
        dataType: "JSON",
        beforeSend: addCSRFToken(),
        contentType: "application/json",
        data: JSON.stringify({
          name: dataKriteria,
          kode_kriteria: kodeKriteria,
          bobot: inputbobot,
        }),
        success: (resss) => {
          console.log(resss);
          Swal.fire({
            position: "mid",
            icon: "success",
            title: "Berhasil Mengubah Bobot",
            showConfirmButton: false,
            timer: 1500,
          });

          setTimeout(function () {
            location.reload();
          }, 1550);
        },
        error: (errr) => {
          console.log(errr);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gagal update bobot!",
          });
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the data",
      });
    }
  });
}

function normalisasi() {
  // console.log(id);
  $.ajax({
    method: "GET",
    url: "/api/kriteria",
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      let sum = 0;
      for (let j = 0; j < data.length; j++) {
        sum += parseFloat(data[j].bobot);
      }
      // console.log(sum);
      for (let i = 0; i < data.length; i++) {
        $.ajax({
          method: "GET",
          url: "/api/kriteria/" + data[i].id,
          dataType: "JSON",
          contentType: "application/json",
          success: (data1) => {
            let NameKrit = data1.name;
            let kodeKriter = data1.kode_kriteria;
            let hasilNormalisai = data1.bobot / sum;
            $.ajax({
              method: "PUT",
              url: "api/kriteria/" + data1.id,
              dataType: "JSON",
              beforeSend: addCSRFToken(),
              contentType: "application/json",
              data: JSON.stringify({
                name: NameKrit,
                kode_kriteria: kodeKriter,
                bobot: hasilNormalisai,
              }),
              success: (resss) => {
                console.log(resss);
                Swal.fire({
                  position: "mid",
                  icon: "success",
                  title: "Berhasil Menormalisasikan Bobot",
                  showConfirmButton: false,
                  timer: 1500,
                });

                setTimeout(function () {
                  location.reload();
                }, 1550);
              },
              error: (errr) => {
                console.log(errr);
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Gagal menormalisasikan bobot!",
                });
              },
            });
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    },
    error: (err) => {
      console.log(err);
    },
  });
}

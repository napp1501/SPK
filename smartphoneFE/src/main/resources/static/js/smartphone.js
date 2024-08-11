$(document).ready(function () {
  // console.log(rolee);
  if (rolee.includes("ROLE_ADMIN") && rolee.includes("ROLE_MEMBER")) {
    $("#data-smartphone").DataTable({
      ajax: {
        method: "GET",
        url: "/api/alternatif",
        dataSrc: "",
      },
      columns: [
        {
          data: null,
          render: (data, row, type, meta) => {
            return meta.row + 1;
          },
        },
        { data: "name" },
        { data: "brand" },
        {
          data: "layar",
          render: (data) => {
            return data + " Inch";
          },
        },
        {
          data: "kamera",
          render: (data) => {
            return data + " MP";
          },
        },
        {
          data: "battery",
          render: (data) => {
            return data + " mAh";
          },
        },
        {
          data: "memori",
          render: (data) => {
            return data + " GB";
          },
        },
        {
          data: "harga",
          render: (data) => {
            return "Rp." + parseFloat(data).toLocaleString("id-ID");
          },
        },
        {
          data: null,
          render: (data) => {
            return `<div class="d-flex gap-3 justify-content-center">
                    <button
                      type="button"
                      class="btn btn-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#update"
                      onclick="update(${data.id})"
                      sec:authorize="hasRole('ADMIN')"
                    >
                    <i class="fa-solid fa-pen-to-square"></i>
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onclick="del(${data.id})"
                      sec:authorize="hasRole('ADMIN')"
                    >
                    <i class="fa-solid fa-trash"></i>
                      Delete
                    </button>
                  </div>`;
          },
        },
      ],
    });
  }else{
    $("#data-smartphone").DataTable({
    ajax: {
      method: "GET",
      url: "/api/alternatif",
      dataSrc: "",
    },
    columns: [
      {
        data: null,
        render: (data, row, type, meta) => {
          return meta.row + 1;
        },
      },
      { data: "name" },
      { data: "brand" },
      {
        data: "layar",
        render: (data) => {
          return data + " Inch";
        },
      },
      {
        data: "kamera",
        render: (data) => {
          return data + " MP";
        },
      },
      {
        data: "battery",
        render: (data) => {
          return data + " mAh";
        },
      },
      {
        data: "memori",
        render: (data) => {
          return data + " GB";
        },
      },
      {
        data: "harga",
        render: (data) => {
          return "Rp." + parseFloat(data).toLocaleString("id-ID");
        },
      },
    ],
  });
  }
    
});

function add() {
  $.ajax({
    method: "GET",
    url: "/api/alternatif",
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      // deteksi last kode alternatif
      let lastKodeAlternatif = "";

      for (let i = 0; i < data.length; i++) {
        const kodeAlternatif = data[i].kode_alternatif;

        if (kodeAlternatif != lastKodeAlternatif) {
          lastKodeAlternatif = kodeAlternatif;
        }
      }

      let nextKodeAlternatif = "A1";
      if (lastKodeAlternatif !== "") {
        const lastNumber = parseInt(lastKodeAlternatif.substring(1));
        nextKodeAlternatif = "A" + (lastNumber + 1);
      }
      console.log(lastKodeAlternatif);
      $("#in-kode").val(nextKodeAlternatif);
    },
    error: (err) => {
      console.log(err);
    },
  });
  $("#save-add").click((event) => {
    event.preventDefault();
    let dataAlternatif = $("#in-alter").val();
    let kodeAlternatif = $("#in-kode").val();
    let dataBrand = $("#in-brand").val();
    let dataLayar = $("#in-layar").val();
    let dataKamera = $("#in-kamera").val();
    let dataBattery = $("#in-battery").val();
    let dataMemory = $("#in-memori").val();
    let dataHarga = $("#in-harga").val();

    if (
      dataAlternatif &&
      kodeAlternatif &&
      dataBrand &&
      dataLayar &&
      dataKamera &&
      dataBattery &&
      dataMemory &&
      dataHarga !== ""
    ) {
      $.ajax({
        method: "POST",
        url: "api/alternatif",
        dataType: "JSON",
        contentType: "application/json",
        beforeSend: addCSRFToken(),
        data: JSON.stringify({
          name: dataAlternatif,
          kode_alternatif: kodeAlternatif,
          brand: dataBrand,
          layar: dataLayar,
          kamera: dataKamera,
          battery: dataBattery,
          memori: dataMemory,
          harga: dataHarga,
        }),
        success: (resss) => {
          console.log(resss);
          Swal.fire({
            position: "mid",
            icon: "success",
            title: "Berhasil Menambahkan Data",
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
            text: "Gagal menambahkan data!",
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

function del(id) {
  // console.log(id);
  Swal.fire({
    title: "Anda yakin ingin menghapusnya?",
    text: "Data ini akan hilang",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        method: "DELETE",
        url: "/api/alternatif/" + id,
        dataType: "JSON",
        beforeSend: addCSRFToken(),
        contentType: "application/json",
        success: (data) => {
          Swal.fire({
            title: "Deleted!",
            text: "Data berhasil dihapus.",
            icon: "success",
          });
          console.log(data);
          setTimeout(function () {
            location.reload();
          }, 1500);
        },
        error: (err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gagal menghapus data!",
          });
        },
      });
    }
  });
}

function update(id) {
  // console.log(id);
  $.ajax({
    method: "GET",
    url: "/api/alternatif/" + id,
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      $("#update-id").val(data.id);
      $("#kode-alter").val(data.kode_alternatif);
      $("#data-alter").val(data.name);
      $("#data-brand").val(data.brand);
      $("#data-layar").val(data.layar);
      $("#data-kamera").val(data.kamera);
      $("#data-battery").val(data.battery);
      $("#data-memori").val(data.memori);
      $("#data-harga").val(data.harga);
    },
    error: (err) => {
      console.log(err);
    },
  });

  $("#save-alternatif").click((event) => {
    event.preventDefault();
    let updateId = $("#update-id").val();
    let dataAlternatif = $("#data-alter").val();
    let kodeAlternatif = $("#kode-alter").val();
    let dataBrand = $("#data-brand").val();
    let dataLayar = $("#data-layar").val();
    let dataKamera = $("#data-kamera").val();
    let dataBattery = $("#data-battery").val();
    let dataMemory = $("#data-memori").val();
    let dataHarga = $("#data-harga").val();

    if (
      dataAlternatif &&
      kodeAlternatif &&
      dataBrand &&
      dataLayar &&
      dataKamera &&
      dataBattery &&
      dataMemory &&
      dataHarga !== ""
    ) {
      $.ajax({
        method: "PUT",
        url: "api/alternatif/" + updateId,
        dataType: "JSON",
        beforeSend: addCSRFToken(),
        contentType: "application/json",
        data: JSON.stringify({
          name: dataAlternatif,
          kode_alternatif: kodeAlternatif,
          brand: dataBrand,
          layar: dataLayar,
          kamera: dataKamera,
          battery: dataBattery,
          memori: dataMemory,
          harga: dataHarga,
        }),
        success: (resss) => {
          console.log(resss);
          Swal.fire({
            position: "mid",
            icon: "success",
            title: "Berhasil Update Data",
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
            text: "Gagal mengupdate data!",
          });
        },
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the data",
      });
    }
  });
}

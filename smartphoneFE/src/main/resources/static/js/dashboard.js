$(document).ready(function () {
  // console.log(name);
  $.ajax({
    method: "GET",
    url: "/api/alternatif",
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      // mengambil data harga
      var hargaa = [];
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].layar);
        hargaa.push(data[i].harga);
      }
      // console.log(hargaa);
      // Pengambilan banyaknya data
      document.getElementById("total").innerHTML = data.length;
      // Mencari data terbesar
      document.getElementById("max-price").innerHTML ="Rp. "+Math.max.apply(null,hargaa).toLocaleString('id-ID');
      // Mencari data terkecil
      document.getElementById("min-price").innerHTML ="Rp. "+Math.min.apply(null,hargaa).toLocaleString('id-ID');
    },
    error: (err) => {
      console.log(err);
    },
  });

  $.ajax({
    method: "GET",
    url: "/api/kriteria",
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      // Pengambilan banyaknya data kriteria
      document.getElementById("total-kriteria").innerHTML = data.length;
    },
    error: (err) => {
      console.log(err);
    },
  });

});

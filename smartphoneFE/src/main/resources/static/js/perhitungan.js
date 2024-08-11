$(document).ready(function () {
  $.ajax({
    method: "GET",
    url: "/api/alternatif",
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      // console.log(data);
      // Pengambilan Data Layar
      var layar = [];
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].layar);
        layar.push(data[i].layar);
      }
      // Perhitungan Layar
      var hasilLayar = [];
      for (var i = 0; i < layar.length; i++) {
        if (layar[i] >= 7) {
          hasilLayar.push(5);
        } else if (layar[i] >= 6.7) {
          hasilLayar.push(4);
        } else if (layar[i] >= 6.4) {
          hasilLayar.push(3);
        } else if (layar[i] >= 6) {
          hasilLayar.push(2);
        } else if (layar[i] < 6) {
          hasilLayar.push(1);
        }
      }
      // Pengambilan Data Battery
      var battery = [];
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].layar);
        battery.push(data[i].battery);
      }
      // Perhitungan Battery
      var hasilBattery = [];
      for (var i = 0; i < layar.length; i++) {
        if (battery[i] >= 7000) {
          hasilBattery.push(5);
        } else if (battery[i] >= 6000) {
          hasilBattery.push(4);
        } else if (battery[i] >= 5000) {
          hasilBattery.push(3);
        } else if (battery[i] >= 4000) {
          hasilBattery.push(2);
        } else if (battery[i] < 4000) {
          hasilBattery.push(1);
        }
      }

      // Pengambilan Data Kamera
      var kamera = [];
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].layar);
        kamera.push(data[i].kamera);
      }
      // Perhitungan Kamera
      var hasilKamera = [];
      for (var i = 0; i < kamera.length; i++) {
        if (kamera[i] >= 90) {
          hasilKamera.push(5);
        } else if (kamera[i] >= 60) {
          hasilKamera.push(4);
        } else if (kamera[i] >= 30) {
          hasilKamera.push(3);
        } else if (kamera[i] >= 10) {
          hasilKamera.push(2);
        } else if (kamera[i] < 10) {
          hasilKamera.push(1);
        }
      }

      // Pengambilan Data Memori
      var memori = [];
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].layar);
        memori.push(data[i].memori);
      }
      // Perhitungan Memory
      var hasilMemori = [];
      for (var i = 0; i < layar.length; i++) {
        if (memori[i] == 256) {
          hasilMemori.push(5);
        } else if (memori[i] == 128) {
          hasilMemori.push(4);
        } else if (memori[i] == 64) {
          hasilMemori.push(3);
        } else if (memori[i] == 32) {
          hasilMemori.push(2);
        } else if (memori[i] == 16) {
          hasilMemori.push(1);
        }
      }

      // Pengambilan Data Harga
      var harga = [];
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i].layar);
        harga.push(data[i].harga);
      }
      // Perhitungan Harga
      var hasilHarga = [];
      for (var i = 0; i < layar.length; i++) {
        if (harga[i] >= 9000000) {
          hasilHarga.push(5);
        } else if (harga[i] >= 7000000) {
          hasilHarga.push(4);
        } else if (harga[i] >= 5000000) {
          hasilHarga.push(3);
        } else if (harga[i] >= 3000000) {
          hasilHarga.push(2);
        } else if (harga[i] >= 1000000) {
          hasilHarga.push(1);
        }
      }

      // console.log(hasil);

      // console.log("Pemberian nilai pada data");
      // console.log(hasilLayar);
      // console.log(hasilKamera);
      // console.log(hasilBattery);
      // console.log(hasilMemori);
      // console.log(hasilHarga);

      // normalisasi Layar kedua
      var norLayar = [];
      for (var i = 0; i < hasilLayar.length; i++) {
        var hasilNorLayar = hasilLayar[i] / Math.max.apply(null, hasilLayar);
        norLayar.push(hasilNorLayar);
      }

      // normalisasi Battery kedua
      var norBattery = [];
      for (var i = 0; i < hasilBattery.length; i++) {
        var hasilNorBattery =
          hasilBattery[i] / Math.max.apply(null, hasilBattery);
        norBattery.push(hasilNorBattery);
      }

      // normalisasi Memori kedua
      var norMemori = [];
      for (var i = 0; i < hasilMemori.length; i++) {
        var hasilNorMemori = hasilMemori[i] / Math.max.apply(null, hasilMemori);
        norMemori.push(hasilNorMemori);
      }

      // normalisasi Kamera kedua
      var norKamera = [];
      for (var i = 0; i < hasilKamera.length; i++) {
        var hasilNorKamera = hasilKamera[i] / Math.max.apply(null, hasilKamera);
        norKamera.push(hasilNorKamera);
      }

      // normalisasi Harga kedua
      var norHarga = [];
      for (var i = 0; i < hasilHarga.length; i++) {
        var hasilNorHarga = (
          Math.min.apply(null, hasilHarga) / hasilHarga[i]
        ).toFixed(3);
        norHarga.push(parseFloat(hasilNorHarga));
      }

      // console.log("");
      // console.log("Kriteria");
      // console.log(norLayar);
      // console.log(norKamera);
      // console.log(norBattery);
      // console.log(norMemori);
      // console.log(norHarga);

      // Mengambil bagian kode_alternatif
      var kode = [];
      for (var i = 0; i < data.length; i++) {
        kode.push(data[i].kode_alternatif);
      }
      // console.log(kode);

      // Pengelompokan data kembali
      var results = [];

      for (var i = 0; i < norLayar.length; i++) {
        var result = [];

        result.push(norLayar[i]);
        result.push(norKamera[i]);
        result.push(norBattery[i]);
        result.push(norMemori[i]);
        result.push(norHarga[i]);

        results.push(result);
      }
      // console.log(results);

      var data_hp = {};
      for (var i = 0; i < kode.length; i++) {
        for (var i = 0; i < results.length; i++) {
          data_hp[kode[i]] = results[i];
        }
      }
      // console.log("");
      // console.log("Pembobotan");
      // console.log(data_hp);

      // penampilan data pada web
      const inData = $("#dataKriteria");
      for (let i = 0; i < hasilHarga.length; i++) {
        const newRow = $("<tr>");

        newRow.append(`<td>${kode[i]}</td>`);
        newRow.append(`<td>${hasilLayar[i]}</td>`);
        newRow.append(`<td>${hasilKamera[i]}</td>`);
        newRow.append(`<td>${hasilBattery[i]}</td>`);
        newRow.append(`<td>${hasilMemori[i]}</td>`);
        newRow.append(`<td>${hasilHarga[i]}</td>`);

        inData.append(newRow);
      }

      // penampilan data perhitungan bobot pada web
      const perhitunganKriteria = $("#hitungKriteria");
      for (let i = 0; i < norHarga.length; i++) {
        const newRow = $("<tr>");

        newRow.append(`<td>${kode[i]}</td>`);
        newRow.append(`<td>${norLayar[i]}</td>`);
        newRow.append(`<td>${norKamera[i]}</td>`);
        newRow.append(`<td>${norBattery[i]}</td>`);
        newRow.append(`<td>${norMemori[i]}</td>`);
        newRow.append(`<td>${norHarga[i]}</td>`);

        perhitunganKriteria.append(newRow);
      }

      $.ajax({
        method: "GET",
        url: "/api/kriteria",
        dataType: "JSON",
        contentType: "application/json",
        success: (data2) => {
          // Mendapatkan data bobot
          var bobot = [];
          for (var i = 0; i < data2.length; i++) {
            bobot.push(data2[i].bobot);
          }
          // console.log("");
          // console.log("Bobot");
          // console.log(bobot);

          // menampilkan bobot ke web
          const dataBobot = $("#bobot");
          for (let i = 0; i < bobot.length; i++) {
            const newRow = $("<tr>");

            newRow.append(`<td>${data2[i].name}</td>`);
            newRow.append(`<td>${bobot[i]}</td>`);

            dataBobot.append(newRow);
          }
          // const bobotKriteria = [];
          // for (let i = 0; i < data.length; i++) {
          //   bobotKriteria.push(data[i].bobot);
          // }
          const arrayOfNumbers = bobot.map(Number);

          const totalSum = arrayOfNumbers.reduce((acc, num) => acc + num, 0);

          // console.log(totalSum);

          if (totalSum == 1) {
            // Menghitung hasil akhir
            var final = [];
            for (var i = 0; i < results.length; i++) {
              var hasil = [];
              for (var j = 0; j < results[i].length; j++) {
                hasil.push(results[i][j] * bobot[j]);
              }
              final.push(hasil.reduce((a, b) => a + b, 0).toFixed(2));
            }
            // console.log(final);

            // penggabungan semua hasil pembobotan
            var rekomend = {};
            for (var i = 0; i < kode.length; i++) {
              for (var i = 0; i < final.length; i++) {
                rekomend[kode[i]] = final[i];
              }
            }
            // console.log("");
            // console.log("Hasil Akhir");
            // console.log(rekomend);

            // console.log("");
            // console.log("Rekomendasi");

            var sortRekomen = Object.entries(rekomend).map(([key, value]) => ({
              key: key,
              value: parseFloat(value),
            }));

            sortRekomen.sort((a, b) => b.value - a.value);
            // console.log(sortRekomen);

            // penampilan data hasil akhir pada web
            const hasilAkhir = $("#hasilAkhir");
            final.forEach((hasilAkhirr, key) => {
              const newRow = $("<tr>");
              newRow.append(`<td>A${key + 1}</td>`);
              newRow.append(`<td>${hasilAkhirr}</td>`);
              hasilAkhir.append(newRow);
            });

            // perhitungan ranking
            const ranking = $("#ranking");
            let currentRank = 1;
            let previousValue = null;

            for (let i = 0; i < sortRekomen.length; i++) {
              const newRow = $("<tr>");

              // Check if the current value is the same as the previous one
              if (sortRekomen[i].value !== previousValue) {
                // If not, update the rank
                currentRank = i + 1;
              }

              // Menambahkan data ke dalam baris baru
              newRow.append(`<td>${sortRekomen[i].key}</td>`); // Key
              newRow.append(`<td>${sortRekomen[i].value}</td>`); // Value
              newRow.append(`<td>${currentRank}</td>`); // Rank

              ranking.append(newRow);

              // Update the previous value for the next iteration
              previousValue = sortRekomen[i].value;
            }

            // Menampilkan hasil rank ke tabel
            let postRank = $("#rank");

            let map = {};
            for (let i = 0; i < sortRekomen.length; i++) {
              const kodeAlternatif = sortRekomen[i].key;
              const rowData = data.find(
                (item) => item.kode_alternatif === kodeAlternatif
              );

              if (rowData) {
                map[kodeAlternatif] = rowData;
              }
            }

            for (let i = 0; i < 10; i++) {
              const kodeAlternatif = sortRekomen[i].key;
              const rowData = map[kodeAlternatif];

              if (rowData) {
                const newRow = $("<tr>");
                newRow.append(`<td>${kodeAlternatif}</td>`);
                newRow.append(`<td>${rowData.name}</td>`);
                newRow.append(`<td>${rowData.brand}</td>`);
                newRow.append(`<td>${rowData.layar} Inch</td>`);
                newRow.append(`<td>${rowData.kamera} MP</td>`);
                newRow.append(`<td>${rowData.battery} mAh</td>`);
                newRow.append(`<td>${rowData.memori} GB</td>`);
                newRow.append(
                  `<td>Rp. ${parseFloat(rowData.harga).toLocaleString(
                    "id-ID"
                  )}</td>`
                );

                // Append the entire row at once
                postRank.append(newRow);
              }
            }
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    },
    error: (err) => {
      console.log(err);
    },
  });
});

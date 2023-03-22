/*
! API GATEWAY (http://localhost:3000)
* pasien login
endpoint  : POST /pasien/login

body      :
{
  email: "test"
  password: "test"
}

response
{
  status: "success",
  data: {
    token: "xxxxx"
  }
}

* pasien register
endpoint: POST /pasien/register
body
{
  nama,
  jenis_kelamin,
  umur,
  alamat,
  role,
  email,
  password
}

response
{
  status: "success",
  data: {
    id: 1
  }
}

* dokter login
endpoint  : POST /pasien/login

body      :
{
  email: "test"
  password: "test"
}

response
{
  status: "success",
  data: {
    token: "xxxxx"
  }
}

* dokter register
endpoint : POST /dokter/login
body  :
{
  nama,
  jenis_kelamin,
  umur,
  alamat,
  no_str,
  role,
  status,
  email,,
  password
}

repsonse:
{
  status: "success",
  data: {
    id: 1
  }
}

*get dokter list
? Berguna untuk mendapatkan list user pada home pasien untuk nantinya memberikan akses ke dokter yang diinginkan
endpoint : GET /dokter
body -
response:{
  status: "success",
  data: [
    {
      nama: "dr jhom",
      no_str: 1122233445566
    },
    {
      nama: "dr jhim",
      no_str: 1122233445566
    },
  ]
}

* get pasien list
? berguna untuk mendapatkan list user pada list dokter yang memberikan akses ke dokter
endpoint : GET /user
body -
response: {
  status: "success",
  data: [
    {
      nama: "ress",
      umur: 11,
      jenis_kelamin: laki-laki
    }
  ]
}

* get medical record
? Berguna untuk mendapatkan semua data medical record 
endpoint : GET /medical-record/:id
body
response: {
  status: "success",
  data: 
  {
    id,
    nama,
    jenis_kelamin,
    tanggal_lahir,
    umur,
    alamat,
    no_rekam_medis,
    tgl_pemeriksaan,
    tujuan_pemeriksaan
  }
}

! User Service (http://localhost:5000)
* pasien login
endpoint  : POST /pasien/login

body      :
{
  email: "test"
  password: "test"
}

response
{
  status: "success",
  data: {
    id,
    nama,
    jenis_kelamin,
    umur,
    alamat,
    role,
    email    
  }
}

* pasien register
endpoint: POST /pasien/register
?OKE
body
{
  nama,
  jenis_kelamin,
  alamat,
  role,
  email,
  password
}

response
{
  status: "success",
  data: {
    id: 1
  }
}
* dokter login
endpoint : POST /dokter/login
?OKE
body      :
{
  email: "test"
  password: "test"
}
repsonse: {
  status: "success",
  data: {
    id,
    nama,
    jenis_kelamin,
    umur,
    alamat,
    no_str,
    role,
    status,
    email,
  }
}
* dokter register
endpoint : POST /dokter/login
body  :
{
  nama,
  jenis_kelamin,
  umur,
  alamat,
  no_str,
  role,
  status,
  email,,
  password
}

repsonse:
{
  status: "success",
  data: {
    id: 1
  }
}

* get dokter list
? Berguna untuk mendapatkan list dokter pada home pasien untuk nantinya memberikan akses ke dokter yang diinginkan
endpoint : GET /dokter
body -
response:{
  status: "success",
  data: [
    {
      nama: "dr jhom",
      no_str: 1122233445566
    },
    {
      nama: "dr jhim",
      no_str: 1122233445566
    },
  ]
}

* get pasien list
? berguna untuk mendapatkan list user pada list dokter yang memberikan akses ke dokter
endpoint : GET /user
body -
response: {
  status: "success",
  data: [
    {
      nama: "ress",
      umur: 11,
      jenis_kelamin: laki-laki
    }
  ]
}
*get pasien by id
? berguna untuk melihat profil yg nantinya bisa digunakan untuk edit user file

! Medical Service (http://localhost:8080)
* post medical_record
?menambahkan data pribadi by dokter
endpoint : POST /medical-record/data-pribadi
body
{
  nama,
  jenis_kelamin,
  tanggal_lahir,
  umur,
  alamat,
  no_rekam_medis,
  tgl_pemeriksaan,
  tujuan_pemeriksaan
}
response: {
  status: "success",
  data: 
  {
    id,
    nama,
    jenis_kelamin,
    tanggal_lahir,
    umur,
    alamat,
    no_rekam_medis,
    tgl_pemeriksaan,
    tujuan_pemeriksaan
  }
}
?menambah data anamnesa by dokter
endpoint: POST /medical-record/anamnesa
body
{
  pasien_id,
  riwayat_penyakit_dahulu,
  riwayat_penyakit_keluarga,
  riwayat_kecelakaan,
  riwayat_perawatan_rumah_sakit
  riwayat_operasi_
  merokok,
  minum_alkohol,
  olahraga,
}
response: 
{
  status: "success",
  data:{
    id,
    pasien_id,
    riwayat_penyakit_dahulu,
    riwayat_penyakit_keluarga,
    riwayat_kecelakaan,
    riwayat_perawatan_rumah_sakit
    riwayat_operasi_
    merokok,
    minum_alkohol,
    olahraga,
  }
}
?menambah data pemeriksaan fisik
endpoint: POST /medical-record/pemeriksaan-fisik
body
{
  pasien_id,
  tinggi_badan,
  berat_badan,
  indeks_masa_tubuh,
  kulit,
  sistem_limfa,
  thyroid,
  denyut_nadi,
  karakter,
  vena,
  oedema,
  tekanan_darah,
  detak_jantung,
  murmur_jantung,
  frekuensi_nafas,
  trachea,
  inspeksi,
  palpasi,
  aukultasi,
  perkusi,
  mulut,
  hati,
  limpa,
  massa,
  colok_dubur,
  ginjal,
  saraf_cranial,
  sistem_monotorik,
  sistem_sensorik,
  refreks,
}
response
{
  status: "success",
  data: {
    id,
    pasien_id,
    tinggi_badan,
    berat_badan,
    indeks_masa_tubuh,
    kulit,
    sistem_limfa,
    thyroid,
    denyut_nadi,
    karakter,
    vena,
    oedema,
    tekanan_darah,
    detak_jantung,
    murmur_jantung,
    frekuensi_nafas,
    trachea,
    inspeksi,
    palpasi,
    aukultasi,
    perkusi,
    mulut,
    hati,
    limpa,
    massa,
    colok_dubur,
    ginjal,
    saraf_cranial,
    sistem_monotorik,
    sistem_sensorik,
    refreks,
  }
}
?menambah data laboratorium
endpoint : POST /medical-record/laboratorium
body
{
  pasien_id,
  hb,
  leukosit,
  led,
  eritrosit,
  hematrokit,
  trombosit,
  golongan_darah,
  mcv,
  mch,
  mchc,
  basofil,
  eosinofil,
  n_batang,
  n_segmen,
  limfosit,
  monosit,
  gula_darah_puasa,
  hdl,
  idl,
  triliserida,
  ureum_darah,
  kreatin_darah,
  asam_urat,
  sgot,
  sgpt,
  warna,
  kekeruhan,
  berat_jenis,
  ph,
  leukosit_urine,
  eritrosit,
  silinder,
  kristal,
  epitel,
  protein,
  glukosa,
  bilirubin,
  urobilin,
  benda_keton
}
response
{
  status: "success",
  data: {
    id,
    pasien_id,
    hb,
    leukosit,
    led,
    eritrosit,
    hematrokit,
    trombosit,
    golongan_darah,
    mcv,
    mch,
    mchc,
    basofil,
    eosinofil,
    n_batang,
    n_segmen,
    limfosit,
    monosit,
    gula_darah_puasa,
    hdl,
    idl,
    triliserida,
    ureum_darah,
    kreatin_darah,
    asam_urat,
    sgot,
    sgpt,
    warna,
    kekeruhan,
    berat_jenis,
    ph,
    leukosit_urine,
    eritrosit,
    silinder,
    kristal,
    epitel,
    protein,
    glukosa,
    bilirubin,
    urobilin,
    benda_keton
  }
}
?menambah data Pemeriksaan lainnya
endpoint : POST /medical-record/permeriksaan-lainnya
body
{
  pasien_id,
  jantung,
  paru,
  ekg,
}
response
{
  status: "success",
  data: {
    id,
    pasien_id,
    jantung,
    paru,
    ekg,
  }
}

?menambah data kesimpulan
endpoint: POST /medical-record/kesimpulan
body
{
  pasien_id,
  kesimpulan,
  anjuran,
}
response
{
  status: "success",
  data:{
    id,
    pasien_id,
    kesimpulan,
    anjuran
  }
}

* get medical record
? Berguna untuk mendapatkan semua data medical record 
endpoint : GET /medical-record/:id
body
response: {
  status: "success",
  data: 
  {
    id,
    nama,
    jenis_kelamin,
    tanggal_lahir,
    umur,
    alamat,
    no_rekam_medis,
    tgl_pemeriksaan,
    tujuan_pemeriksaan
  }
}
* 
! Media Service
* menambah gambar
enpoint: POST /pasien-media
body
{
  pasien_id,
  img_name,
  img_link_url
}
response
{
  status: "success",
  data: {
    id,
    pasien_id,
    img_name,
    img_link_url
  }
}

*/
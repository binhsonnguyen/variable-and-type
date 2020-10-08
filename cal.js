function tich() {
  let soThuNhat = Number(document.getElementById("soThuNhat").value)
  let soThuHai = Number(document.getElementById("soThuHai").value)
  let tich = soThuNhat * soThuHai
  let phatNgon = "Tich hai so la " + tich
  document.getElementById("phatNgon").innerText = phatNgon
}
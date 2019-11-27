const readline = require("readline-sync");
const chalk = require('chalk')
console.log("")
console.log('=======================')
console.log('Program Fungsi Turunan')
console.log('=======================\n')
console.log('[!] Contoh format soal: \n[1] y = 31x^62 + 73x^73 + 72x^72 Atau,\n[2] y = 3x^6 + 7x^7 + 7x^7\n[!] Harap samakan soal dengan format')
console.log("")
const soal = readline.question('[?] Soal: ')
const regex = /[0-9]/g
const haha = soal.match(regex)
if (haha.length == 6) {
    const angka = soal.split('')
    const xAwal = angka[4]
    const pangkatAwal = angka[7]
    const hasilXawal = xAwal * pangkatAwal
    const kurangXawal = pangkatAwal - 1
    const xKedua = angka[11]
    const pangkatKedua = angka[14]
    const hasilXkedua = xKedua * pangkatKedua
    const kurangXkedua = pangkatKedua - 1
    const xKetiga = angka[18]
    const pangkatKetiga = angka[21]
    const hasilXketiga = xKetiga * pangkatKetiga
    const kurangXketiga = pangkatKetiga - 1
    console.log("")
    console.log(`Jawaban => yAksen = ${hasilXawal}x^${kurangXawal} + ${hasilXkedua}x^${kurangXkedua} + ${hasilXketiga}x^${kurangXketiga}`)
} else if (haha.length == 12){
    const angka = soal.split('')
    const operatorAwal = angka[11]
    const operatorKedua = angka[20]
    const xAwal = angka[4]
    const xAwal2 = angka[5]
    const pangkatAwal = angka[8]
    const pangkatAwal2 = angka[9]
    const hasilXawal = `${xAwal}${xAwal2}` * `${pangkatAwal}${pangkatAwal2}`
    const kurangXawal = `${pangkatAwal}${pangkatAwal2}` - 1
    const xKedua = angka[13]
    const xKedua2 = angka[14]
    const pangkatKedua = angka[17]
    const pangkatKedua2 = angka[18]
    const hasilXkedua = `${xKedua}${xKedua2}` * `${pangkatKedua}${pangkatKedua2}`
    const xKetiga = angka[22]
    const xKetiga2 = angka[23]
    const pangkatKetiga = angka[26]
    const pangkatKetiga2 = angka[27]
    const hasilXketiga = `${xKetiga}${xKetiga2}` * `${pangkatKetiga}${pangkatKetiga2}`
    const kurangXketiga = `${pangkatKetiga}${pangkatKetiga2}` - 1
    const kurangXkedua = `${pangkatKedua}${pangkatKedua2}` - 1
    console.log("")
    console.log(`Jawaban => yAksen = ${hasilXawal}x^${kurangXawal} ${operatorAwal} ${hasilXkedua}x^${kurangXkedua} ${operatorKedua} ${hasilXketiga}x^${kurangXketiga}`)
} else {
    console.log(chalk.red(`[!] Format soal yang anda masukkan salah!`))
}

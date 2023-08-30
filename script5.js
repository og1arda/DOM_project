// STRINGS

const firstname="Oğuz"
const lastname="Esentürk"
const age="23"

let hobbies="Formula1 Sinema Gym Yazılım"

let veri

//string concatenations-string  birleştirme

// + metodu
veri=firstname+" "+lastname

veri="Oğuz"
veri+=" Esentürk"

veri='Benim adım '+firstname+' '+lastname+' Yaşım:'+age+' ve Ankara\'da yaşıyorum.'
//\ kaçış terimidir. tırnaklar karıştırıldığında kullanılır


//concat metodu
veri = firstname.concat(' ',lastname) // + ile de  yapılır böyle de 

veri=veri.toUpperCase()
veri=veri.toLowerCase()

// veri=veri.substring(1,4) 1-4 arası indexleri alır. star-finish mevzusu
// veri=veri.slice(1,8)

// veri=veri.indexOf("e") // içerisinde olmayan olursa -1

veri=veri.replace('oğuz','Arda') // verileri değiştirir

veri=veri.length //uzunluğu gösterir

veri=hobbies.split(' ') //['Formula1', 'Sinema', 'Gym', 'Yazılım']



console.log(veri)
console.log(typeof veri)

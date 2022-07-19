const chager = {
	fullName: 'Адель',
	age: 20,
}

const temix = chager
temix.fullName = 'Тимур'
temix.age = 13

const auf = JSON.parse(JSON.stringify(chager))
auf.fullName = 'Евгений'
auf.age = 0

console.log(`Чагера зовут: ${chager.fullName}`)
console.log(`Тимура зовут: ${temix.fullName}`)
console.log(`Ауфку зовут: ${auf.fullName}`)

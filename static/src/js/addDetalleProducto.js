$(document).ready(function () {
	const buttonDec = $('#button-dec')
	const buttonAdd = $('#button-add')
	const buttonSubmit = $('#button-submit')
	const inputNum = $('#input-num')
	const inputAdd = $('#input-add')

	buttonDec.click(function () {
		let num = parseInt(inputNum.val())
		if (num > 1) {
			num--
			inputNum.val(num)
			inputAdd.val(num)
		}
	})
	inputNum.change(function () {
		let num = parseInt(inputNum.val())
		if (num < 1) {
			inputNum.val(1)
			inputAdd.val(1)
		} else {
			inputAdd.val(num)
		}
	})

	buttonAdd.click(function () {
		let num = parseInt(inputNum.val())
		num++
		inputNum.val(num)
		inputAdd.val(num)
	} )

})

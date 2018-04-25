function check(f) {
	let grade = 0;
	let str = "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达。";
	if (f.tiankong1.value == "统一建模语言") {
		grade += 5;
	}

	if (f.tiankong21.value == "封装性") {
		grade += 5;
	}

	if (f.tiankong22.value == "继承性") {
		grade += 5;
	}

	if (f.tiankong23.value == "多态性") {
		grade += 5;
	}

	if (f.xuanze1.value == "B") {
		grade += 10;
	}

	if (f.xuanze2.value == "A") {
		grade += 10;
	}


	let arrCheck = [];
	let arr = ["A", "B", "D"]
	let duoze1 = document.getElementsByName("duoze1");
	for (let i of duoze1) {
		if (i.checked) {
			arrCheck.push(i.value);
		}
	}
	
	if (arr.toString() == arrCheck.toString()) {
		grade += 10;
	}

	let arrCheck2 = [];
	let arr2 = ["A", "B", "C"]
	let duoze2 = document.getElementsByName("duoze2");
	for (let i of duoze2) {
		if (i.checked) {
			arrCheck2.push(i.value);
		}
	}
	if (arr2.toString() == arrCheck2.toString()) {
		grade += 10;
	}

	if (f.panduan1.value == "incorrect") {
		grade += 10;
	}

	if (f.panduan2.value == "correct") {
		grade += 10;
	}

	if (f.answer.value == str) {
		grade += 20;
	}
	alert("您此次考试分数为：" + grade + "分")
}


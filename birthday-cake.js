let candlesCount = 9;
let messageName = "to you";

function init() {
	var url_string = window.location.href;
	var url = new URL(url_string);

	if (url.searchParams.get("candles") != null) {
		candlesCount = url.searchParams.get("candles");
	}
	
	if (url.searchParams.get("name") != null) {
		messageName = url.searchParams.get("name");
	}

	appendCandles();
	appendName();
	appendMessages(url.searchParams.getAll("message"));
}

function appendMessages(messages) {
	if (!Array.isArray(messages) || messages.length == 0) return;
	
	let messageBox = document.getElementById(`message_container`);
	if (messageBox == null || messageBox == `undefined`) return;
	
	messageBox.innerHTML = `${messages.join("<br />")}`;
}

function appendName() {
	let message = document.getElementById(`message_container`);
	if (message == null) return;

	message.innerHTML = `Happy Birthday ${messageName}`;
}

function appendCandles() {
	let candleHalfCount = 1;
	for (var i = 0; i < candlesCount; i++) {
		if ((i + 1) < (candlesCount / 2)) candleHalfCount++;
		else if ((i + 1) > (candlesCount / 2)) candleHalfCount--;

		let candleXPositionOffset = candleHalfCount * (20 / (candlesCount / 2));
		let candleXPosition = ((-310 + (600 / candlesCount) / 2) + ((600 / candlesCount) * i));
		let candleYPosition = -1 * Math.floor(Math.random() * ((325 + candleXPositionOffset) - (320 - candleXPositionOffset) + 1) + (320 - candleXPositionOffset));

		document.body.innerHTML += `<div id="candle_${i}" class="candle" style="margin-left:${candleXPosition}px; margin-top:${candleYPosition}px;"></div>`;
		
		let candle = document.getElementById(`candle_${i}`);
		candle.setAttribute(`onClick`,`putOutCandle(candle_${i});`);

		for (var j = 0; j < 5; j++) {
			candle.innerHTML += `<div class="flame"></div>`;
		}
	}
}

function putOutCandle(candle) {
	if (candle == null) return;

	for (var i = 0; i < 5; i++) {
		var flame = candle.querySelector(`.flame`);
		
		if (flame != null) {
			flame.remove();
		}
	}
}

function putOutCandles() {
	for (var i = 0; i < candlesCount; i++) {
		putOutCandle(document.getElementById(`candle_${i}`));
	}
}
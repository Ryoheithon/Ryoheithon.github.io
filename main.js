window.onload = () => {

	//変数の準備
	var file = document.getElementById('file');
	var canvas = document.getElementById('canvas');
	var canvasWidth = 300;
	var canvasHeight = 300;
	var uploadImgSrc;
	var startLX = -220;
	var startLY = 110;
	var endLX = -170;
	var endLY = 60;
	var startRX = 45;
	var startRY = -165;
	var endRX = -5;
	var endRY = -115;
	var lx = startLX;
	var ly = startLY;
	var rx = startRX;
	var ry = startRY;
	var TRIM_SIZE = 300;

	var diffLX = endLX - startLX;
	var diffLY = endLY - startLY;
	var diffRX = endRX - startRX;
	var diffRY = endRY - startRY;
	var time = 1000;


	// Canvasの準備
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
	var ctx = canvas.getContext('2d');

	var subCanvas = document.createElement("canvas");
	var subCtx = subCanvas.getContext("2d");





	function loadLocalImage(e) {
	    // ファイル情報を取得
    	var fileData = e.target.files[0];

    // 画像ファイル以外は処理を止める
    	if(!fileData.type.match('image.*')) {
        	alert('画像を選択してください');
        	return;
    	}

    	// FileReaderオブジェクトを使ってファイル読み込み
    	var reader = new FileReader();
    	// ファイル読み込みに成功したときの処理
    	reader.onload = function() {
    	    // Canvas上に表示する
    	    	lx = startLX;
				ly = startLY;
				rx = startRX;
				ry = startRY;
    	    uploadImgSrc = reader.result;
    	    render();

		setTimeout(() => {
    		setInterval(createSubCtx, 400);
    		}, 4000);
    	}
    	// ファイル読み込みを実行
    	reader.readAsDataURL(fileData);
	}


	function render() {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		canvasDrawImage();
		var count = 0;
		var onTimeout = function() {
				setInterval(() => {
					count++;
					if(count > 10) {
						clearInterval();
				    } else {
				    	ctx.clearRect(0, 0, canvasWidth, canvasHeight);
						canvasDrawImage();
						lx += 5;
						ly -= 5;
						rx -= 5;
						ry += 5;
						console.log(lx);
						canvasDrawLeft(lx, ly);
						canvasDrawRight(rx, ry);
						console.log(count);
				    }
				}, 150);
			}
		onTimeout();
		setTimeout(() => {grayScale();}, 2000);
	}


	function renderCOPY() {
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		canvasDrawImage();
		for(var p = 0; p < 10; p++){
			setTimeout(() => {
				ctx.clearRect(0, 0, canvasWidth, canvasHeight);
				canvasDrawImage();
				canvasDrawLeft();
				canvasDrawRight();
				lx = startLX + 50;
				ly = startLY - 50;
				rx = startRX - 50;
				ry = startRY + 50;
			}, 1000);
		}
	}




	function createSubCtx() {
		var subWidth = 250;
		var subHeight = 250;
		var fontSize = 12;
		var x = 30;
		var y = 60;	
		var lineHeight = 1.1;
		var text = document.getElementById("story").value;

		subCtx.save();
		subCtx.clearRect(0, 0, subWidth, subHeight);
		strRotate();

		subCtx.beginPath();
		subCtx.font = "bold 12px serif";
		subCtx.textBaseline = 'middle';
    	subCtx.fillStyle = 'rgba(0, 0, 0, 1)';

    	console.log(text);
    	console.log(line);
    	console.log(btn.href);

		for( var lines=text.split( "\n" ), i=0, l=lines.length; l>i; i++ ) {
				var line = lines[i] ;
				var addY = fontSize ;
				if ( i ) addY += fontSize * lineHeight * i ;

				subCtx.fillText( line, x + 0, y + addY ) ;
				ctx.drawImage(subCanvas, 30, 60);
		}

		btn.href = canvas.toDataURL("image/png");
		subCtx.restore();
	}








	function handsRotate() {
		ctx.translate(200, 80);
	    ctx.rotate(Math.PI/180 * 5);
	    ctx.translate(-200, -80);
	}

	function strRotate() {
		subCtx.translate(200, 80);
	    subCtx.rotate(Math.PI/180 * 5);
	    subCtx.translate(-200, -80);
	}


	//グレースケール
	function grayScale() {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var data = imageData.data;
        var dataMiddle = data.slice(33000, 300000);

        var num = dataMiddle.length;
        var pix = num / 4;

        console.log(imageData);
        console.log(data);
        console.log(dataMiddle);
        console.log(num);
        console.log(pix);


        for(var i = 0; i < pix; i++){
        	var r = dataMiddle[i*4];
        	var g = dataMiddle[i*4 + 1];
        	var b = dataMiddle[i*4 + 2];

        	var g = parseInt((r*30 + g*59 + b*11) / 100);
        	dataMiddle[i*4] = g;
        	dataMiddle[i*4 + 1] = g;        	        	        	
        	dataMiddle[i*4 + 2] = g; 	        	        	
        }

        console.log(data);
        console.log(imageData);
        console.log(dataMiddle);

        data.set(dataMiddle, 33000);

        console.log(data);
        ctx.putImageData(imageData, 0, 0);
	}	




	// Canvas上に画像を表示する
	function canvasDrawImage() {
    // canvas内の要素をクリアする
	    // Canvas上に画像を表示
	    var img1 = new Image();
	    img1.src = uploadImgSrc;
	    img1.onload = function() {
	        if (img1.width > img1.height) {
            h = TRIM_SIZE;
            w = img1.width * (TRIM_SIZE / img1.height);
            xOffset = -(w - TRIM_SIZE) / 2;
            yOffset = 0;
        } else {
            w = TRIM_SIZE;
            h = img1.height * (TRIM_SIZE / img1.width);
            yOffset = -(h - TRIM_SIZE) / 2;
            xOffset = 0;
        }
        ctx.drawImage(img1, xOffset, yOffset, w, h);
	    }
	}

	function canvasDrawLeft() {
		var img2 = new Image();
	    img2.onload = function() {
	    	ctx.save();
	    	handsRotate();
	        ctx.drawImage(img2, lx, ly, 470, 400);
	    	ctx.restore();
	    }

		img2.src = "./img/left.png";

	}

	function canvasDrawRight() {

	    var img3 = new Image();
	    img3.onload = function() {
	    	ctx.save();
			handsRotate();
	    	ctx.drawImage(img3, rx, ry, 500, 370);
	    	ctx.restore();
		}
	    img3.src = "./img/right.png";
	}

		// ファイルが指定された時にloadLocalImage()を実行
	file.addEventListener('change', loadLocalImage, false);


}

body {
	text-align: center;
	background: linear-gradient(45deg, #ffe5ff);
  	background-size: 600% 600%;
  	animation: GradationTest 50s infinite;
	display: block;
	margin: 0;
	font-size: 16px;
	font-family: Verdana, Roboto, "Droid Sans", "游ゴシック", YuGothic, "メイリオ", Meiryo, "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ＭＳ Ｐゴシック", sans-serif;
	word-wrap: break-word;
}

@Keyframes GradationTest {
	  0% { background-color: #ffe5ff; }
	  20% { background-color: #ffe5cc; }
	  40% { background-color: #ffffef	; }
  	  60% { background-color: #ccffff; }
  	  80% { background-color: #cccccc; }
	  100% { background-color: #ffe5ff; }
}

#wrapper {
	box-sizing: border-box;
    position: relative;
    margin: auto;
    padding: 8px;
    max-width: 550px;
}

#logo {
	border-radius: 6px;
	width: 100%;
	height: 80px;
}

.logo {
	text-align: center;
	margin: auto;
	padding-bottom: 20px;
}

h3 {
	font-size: 24px;
	margin-bottom: 20px;
}

a {
  color: #1ea4fc;
}

label > input {
	display:none;	/* アップロードボタンのスタイルを無効にする */
	width: 100%;
}
label {
	color: #fff;	/* ラベルテキストの色を指定する */
	background-color: #ff1493;/* ラベルの背景色を指定する */
	padding: 10px;	/* ラベルとテキスト間の余白を指定する */
	border: double 2px #AAAAAA;/* ラベルのボーダーを指定する */
	border-radius: 6px;
	width: 100%;
}


.canvas {
	margin: 30px auto;
	display: block;
	width: 100%;
	border: #a8a8a8 2px solid;
}


#canvas1 {
	position: absolute;
	z-index: 1;
}

#canvas2 {
	position: absolute;
	z-index: 2;
	width: 400;
	height: 400;
}


#story {
	position: absolute;
	top: 570px;
	left: 5px;
	margin: 30px auto;
	border-radius: 6px;
	width: 100%;
	height: 180px;
	background: #fff;
	box-shadow: 0, 0, 2px, rgba(0, 0, 0, .2) inset;
	overflow: hidden;
	text-align: left;
	font-size: 20px;
}

#story :focus {
  outline: none;
}

p {
	position: relative;
}

#btn {
  position: absolute;
  top: 950px;
  left: 35px;
  width: 90%;
  display: block;
  border-bottom: solid #333 4px;
  border-radius: 12px;
  color: #fff;
  cursor: pointer;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: .2em;
  text-decoration: none;
  text-align: center;
  background-color: #4682b4;
  box-shadow: 0 4px 4px rgba(0, 0, 0, .2);
  user-select: none;
}

background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);

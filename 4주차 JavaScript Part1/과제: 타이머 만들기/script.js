const timerCircle = document.querySelector(".timer-circle");
const timerTime = document.querySelector(".timer-time");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const recordButton = document.querySelector("#record");
const resetButton = document.querySelector("#reset");
const recordList = document.querySelector("#record-list");

// 변수 초기화
let intervalId = null; // setInterval() 함수의 id를 저장할 변수
let startTime = null; // 타이머 시작 시간을 저장할 변수
let elapsedTime = 0; // 경과 시간을 저장할 변수
let records = []; // 기록을 저장할 배열

// 시간을 hh:mm:ss 형태로 변환하는 함수
function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

// 타이머 시간을 업데이트하는 함수
function updateTimer() {
  let currentTime = Date.now();
  elapsedTime = Math.floor((currentTime - startTime) / 1000);
  timerTime.textContent = formatTime(elapsedTime);
}

// 시작 버튼 클릭 시 실행되는 함수
function startTimer() {
  startButton.disabled = true;
  stopButton.disabled = false;
  recordButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now() - elapsedTime * 1000;
  intervalId = setInterval(updateTimer, 100);
  timerCircle.classList.add("active");
}

// 멈춤 버튼 클릭 시 실행되는 함수
function stopTimer() {
  startButton.disabled = false;
  stopButton.disabled = true;
  recordButton.disabled = true;
  resetButton.disabled = false;
  clearInterval(intervalId);
  timerCircle.classList.remove("active");
}

// 기록 버튼 클릭 시 실행되는 함수
function recordTime() {
  if (records.length >= 5) {
    records.shift(); // 가장 오래된 기록 삭제
    recordList.removeChild(recordList.firstElementChild); // 가장 오래된 기록 DOM에서 삭제
    // 기존 기록들의 번호 업데이트
    for (let i = 0; i < recordList.children.length; i++) {
      recordList.children[i].firstElementChild.textContent = `${i + 1}.`;
    }
  }
  records.push(elapsedTime);
  let recordItem = document.createElement("li");
  recordItem.innerHTML = `<span>${records.length}.</span> ${formatTime(
    elapsedTime
  )}`;
  recordList.appendChild(recordItem);
}

// 초기화 버튼 클릭 시 실행되는 함수
function resetTimer() {
  elapsedTime = 0;
  timerTime.textContent = formatTime(elapsedTime);
  while (recordList.firstChild) {
    recordList.removeChild(recordList.firstChild);
  }
  records = [];
}

// 버튼에 이벤트 리스너 등록
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
recordButton.addEventListener("click", recordTime);
resetButton.addEventListener("click", resetTimer);

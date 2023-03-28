const generateName = () => {
  const userLocation = document.getElementById("location").value.trim();
  const gender = document.getElementById("gender").value;
  const ageInput = document.getElementById("age").value;
  const age = !isNaN(ageInput) ? parseInt(ageInput) : null;
  const userName = document.getElementById("name").value.trim();

  if (!userLocation || !gender || age === null || !userName) {
    alert("입력되지 않은 정보가 있습니다!");
    return;
  }

  const regionList = {
    서유럽: ["앵글로", "노르만"],
    동유럽: ["슬라브", "마케도니아", "몽골"],
    지중해: ["이베리아", "그리스", "이탈리아", "터키"],
    북유럽: ["발트", "핀란드", "스칸디나비아"],
    중동: ["아랍", "페르시아"],
    아프리카: ["베레베르", "애국", "쿠샤나"],
  };
  const regionNames = Object.keys(regionList);
  const regionIndex = Math.floor(Math.random() * regionNames.length);
  const region = regionNames[regionIndex];
  const familyNames = regionList[region];
  const familyIndex = Math.floor(Math.random() * familyNames.length);
  const familyName = familyNames[familyIndex];

  let personalName = "";
  if (gender === "male") {
    if (age >= 20 && age <= 39) {
      personalName = "요한";
    } else if (age >= 40 && age <= 59) {
      personalName = "하인리히";
    } else if (age >= 60 && age <= 79) {
      personalName = "르트비히";
    } else if (age >= 80) {
      personalName = "알브렉트";
    } else {
      personalName = "이사크";
    }
  } else {
    if (age >= 20 && age <= 39) {
      personalName = "엘리자베트";
    } else if (age >= 40 && age <= 59) {
      personalName = "카타리나";
    } else if (age >= 60 && age <= 79) {
      personalName = "메프리스";
    } else if (age >= 80) {
      personalName = "메타";
    } else {
      personalName = "메리";
    }
  }

  const result = `당신의 중세 시대 이름은 ${familyName} ${personalName}(${region} 지역 출신)입니다.`;
  document.getElementById("result").innerText = result;
};

document.getElementById("generate-btn").addEventListener("click", generateName);

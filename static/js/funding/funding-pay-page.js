// ai가 짠 코드
// DOM 요소 선택
const totalPriceElement = document.querySelector(".funding-total-price");
const servicePriceElement = document.querySelector(".funding-price");
const plusPriceInput = document.getElementById("funding-plus-price");

// // 숫자 추출 함수
// function extractNumber(str) {
//     // 문자열에서 숫자만 추출
//     const numbers = str.replace(/[^0-9]/g, "");
//     return parseInt(numbers) || 0;
// }

// // 가격 포맷 함수 (천 단위 콤마)
// function formatPrice(number) {
//     return number.toLocaleString("ko-KR");
// }

// // 총 가격 계산 및 업데이트
// function updateTotalPrice() {
//     // 서비스 가격 추출
//     const servicePrice = extractNumber(servicePriceElement.innerHTML);

//     // 입력된 추가 가격 추출
//     const plusPrice = extractNumber(plusPriceInput.value);

//     // 합계 계산
//     const total = servicePrice + plusPrice;

//     // 카운팅 증가

//     // 결과 표시 (원하는 포맷으로)
//     totalPriceElement.innerHTML = "₩" + formatPrice(total);

//     // 디버깅용 로그
//     console.log({
//         servicePrice: servicePrice,
//         plusPrice: plusPrice,
//         total: total,
//     });
// }

// // 이벤트 리스너 등록
// plusPriceInput.addEventListener("input", updateTotalPrice);
// plusPriceInput.addEventListener("change", updateTotalPrice);

// // 페이지 로드 시 초기 계산
// document.addEventListener("DOMContentLoaded", updateTotalPrice);

// 숫자 추출 함수
function extractNumber(str) {
    // 문자열에서 숫자만 추출
    const numbers = str.replace(/[^0-9]/g, "");
    return parseInt(numbers) || 0;
}

// 가격 포맷 함수 (천 단위 콤마)
function formatPrice(number) {
    return number.toLocaleString("ko-KR");
}

// 숫자 롤링 애니메이션 함수
function animateNumber(element, start, end, duration = 3000) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing 함수 (부드러운 감속 효과)
        const easeOutQuad = progress * (2 - progress);

        const current = start + (end - start) * easeOutQuad;

        element.innerHTML = "₩" + formatPrice(Math.floor(current));

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.innerHTML = "₩" + formatPrice(end);
        }
    }

    requestAnimationFrame(update);
}

// 총 가격 계산 및 업데이트
function updateTotalPrice() {
    // 서비스 가격 추출
    const servicePrice = extractNumber(servicePriceElement.innerHTML);

    // 입력된 추가 가격 추출
    const plusPrice = extractNumber(plusPriceInput.value);

    // 합계 계산
    const total = servicePrice + plusPrice;

    // 현재 표시된 가격 추출 (애니메이션 시작점)
    const currentTotal = extractNumber(totalPriceElement.innerHTML) || 0;

    // 숫자 롤링 애니메이션 실행
    animateNumber(totalPriceElement, currentTotal, total, 500);

    // 디버깅용 로그
    console.log({
        servicePrice: servicePrice,
        plusPrice: plusPrice,
        currentTotal: currentTotal,
        newTotal: total,
    });
}

// 이벤트 리스너 등록
plusPriceInput.addEventListener("input", updateTotalPrice);
plusPriceInput.addEventListener("change", updateTotalPrice);

// 페이지 로드 시 초기 계산
document.addEventListener("DOMContentLoaded", updateTotalPrice);

// 아이콘 클릭시 인풋에 value 날리기
const resetBtn = document.querySelector(".funding-pay-body-price-reset-button");

resetBtn.addEventListener("click", (e) => {
    plusPriceInput.value = null;
    location.reload(true);
});

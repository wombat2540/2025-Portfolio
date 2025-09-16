document.addEventListener('DOMContentLoaded', function () {
    // 간단한 2D 슬라이드 방식으로 변경
    const rotatingWords = ['경험', '일', '디자인', '밥한끼', 'UX/UI', '성장'];
    let currentIndex = 0;

    // 올바른 슬로건 텍스트 찾기
    const allProfileTitles = document.querySelectorAll('.profile-title');
    let targetElement = null;

    allProfileTitles.forEach(element => {
        if (element.textContent.includes('함께')) {
            targetElement = element;
        }
    });

    if (targetElement) {
        // 단순한 span으로 교체
        const textContent = targetElement.innerHTML;
        const newContent = textContent.replace('함께 하고', '함께 <span id="simpleRotatingText" style="color: #E86E17; font-weight: 200; display: inline-block; min-width: 60px; text-align: center; transition: all 0.4s ease;">경험</span> 하고');
        targetElement.innerHTML = newContent;

        const rotatingElement = document.getElementById('simpleRotatingText');

        if (rotatingElement) {
            function rotateText() {
                // 부드러운 페이드 아웃
                rotatingElement.style.opacity = '0';
                rotatingElement.style.transform = 'translateY(-5px)';

                setTimeout(() => {
                    currentIndex = (currentIndex + 1) % rotatingWords.length;
                    rotatingElement.textContent = rotatingWords[currentIndex];

                    // 부드러운 페이드 인
                    rotatingElement.style.opacity = '1';
                    rotatingElement.style.transform = 'translateY(0)';
                }, 200);
            }

            // 3초마다 텍스트 변경
            setTimeout(() => {
                rotateText();
                setInterval(rotateText, 3000);
            }, 3000);
        }
    }
});
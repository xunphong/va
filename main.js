// Thay đổi nội dung búc thư ở đây
var letterContent = "Hello Vân! Thế là ngày Valentine đã đến. Gần một năm qua tình yêu của chúng mình đã trải qua rất nhiều thử thách để được hạnh phúc như ngày hôm nay. Anh rất hạnh phúc khi được cùng em san sẻ cảm xúc cùng vui, cùng buồn trong khoảng thời gian này. Anh cảm ơn em Phạm Thị Hải Vân. Chúc em ngày càng nhiều sức khỏe và ngày càng xinh nhé I Love You!"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 40

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 999)
    }
})
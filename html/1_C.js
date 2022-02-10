let contents = ""

for (let i=img.length-1; i>=0; i--) {
    contents += `<li id="${i+1}" class="member_C">`
            +`    <a href="./html/1_C.html?id=${i+1}">`
            +`        <div class="member_img_wrap_C">`
            +`          <img class="member_img_C" src="${img[i]}" alt="はにゃ">`
            +`        </div>`
            +`        <p class="member_name_C">${memberName[i]}</p>`
            +`        <p class="member_price_C">¥${price[i]} +tax</p>`
            +`    </div>`
            +`</li>`
};


document.getElementById("membersC").insertAdjacentHTML('beforeend', contents);
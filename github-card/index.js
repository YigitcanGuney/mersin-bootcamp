
let contentName = document.querySelector(".content-profile-name");
let contentUserName = document.querySelector(".content-profile-username");
let repoCount = document.querySelector(".repo-count");
let repoSize = document.querySelector(".repo-size");
let fieldset = document.querySelector("fieldset");
let profileImg = document.querySelector("#profile-img")


// username ve isim bilgisi çekildi
const getUser = async (username) => {
    const url = "https://api.github.com/users/";

    await fetch(url + username)
        .then(res => res.json())
        .then(data => {
            contentName.innerHTML = data.name;
            contentUserName.innerHTML = `@${data.login}`;
            profileImg.src = data.avatar_url;
        })
}

const getRepos = async (username) => {
    const url = "https://api.github.com/users/";
    const repoUrl = "/repos?per_page=100";
    let langItem = [];
    let size = [];
    let langSize = [];

    await fetch(url + username + repoUrl)
        .then(res => res.json())
        .then(data => {
            const langList = document.querySelector(".lang-ratio");
            
            repoCount.innerHTML = data.length;
            data.map(item => {
                size += item.size;
                langSize.push(item.size);
                langItem.push(item.language);
            })
            const totalItem = langItem.length * 10;
            console.log(totalItem);
            const uniqueLangItem = [... new Set(langItem)];

            uniqueLangItem.forEach(item => {
                
                  
                if(item != null) {
                    
                    const langCard = document.createElement("div");
                    langCard.classList.add("lang-ratio-card");
                    const langRatio = document.createElement("div");
                    langRatio.classList.add("lang-ratio-content");
                    const langSpanName = document.createElement("span");
                    langSpanName.classList.add("lang-name");
                    const langSpanRatio = document.createElement("span");
                    langSpanRatio.classList.add("lang-ratio-value");
                    const langImg = document.createElement("img");
                    langImg.setAttribute("src","");
                    langImg.setAttribute("alt","lang_Img");

                    langSpanName.innerText = item;
                    const langPercent = `${((item.length * 100) / totalItem).toFixed(2)}%`

                    langSpanRatio.innerText = langPercent;

                    langRatio.appendChild(langSpanName);
                    langRatio.appendChild(langSpanRatio);
                    langCard.appendChild(langImg);
                    langCard.appendChild(langRatio);
                    langList.appendChild(langCard);
                    
                    
                }
            })
            repoSize.innerHTML = `${(size / 1048576).toFixed(2)} MB`;
        })
}

const buttonClick = (e) => {
    const searchName = document.querySelector("input[name='search-username']");
    let getValue = searchName.value;

    if (getValue.length == 0) {
        return;
    }

    console.log(getValue);


    return getUser(getValue), getRepos(getValue);
}



// form elemanları sayfa yenilememsi için 
let form = document.querySelector(".form-control");

// let size = 0;
// let sizeoflang = 0;
form.addEventListener("click", (e) => {
    e.preventDefault();
})














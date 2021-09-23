// form elemanları sayfa yenilememsi için 
let form = document.querySelector(".form-control");

let size = 0;
let sizeoflang = 0;
form.addEventListener("click", (e) => {
    e.preventDefault();
})


// profile bilgileri veri çekilmesi
const getUser = (e) => {
    size = 0;
    let langKey = [];
    let langValue = [];
    let uniqueKey = [];
    let searchname = document.querySelector("input[name='search-username']");
    let username = searchname.value;

    let url = `https://api.github.com/users/${username}`
    let repoUrl = `https://api.github.com/users/${username}/repos`

    let contentName = document.querySelector(".content-profile-name");
    let contentUserName = document.querySelector(".content-profile-username");
    let repoCount = document.querySelector(".repo-count");
    let repoSize = document.querySelector(".repo-size");
    let fieldset = document.querySelector("fieldset");





    let profileImg = document.querySelector("#profile-img");

    // profil resim ve isimleri fetch fonksiyonu
    async function fetchProfile() {
        const response = await fetch(url);
        const profile = await response.json();
        return profile;
    }

    // profil resim ve isimleri dom element eklenmesi
    fetchProfile().then(data => {
        contentName.innerHTML = data.name;
        profileImg.src = data.avatar_url;
        contentUserName.innerHTML = `@${data.login}`
    })

    // repo bilgilerinin alındığın fetch fonskiyonu
    async function fetchReposCount() {
        const response = await fetch(repoUrl);
        const repos = await response.json();
        return repos;
    }

    // repo bilgilerinin doma eklenmesi
    fetchReposCount().then(data => {
        repoCount.innerHTML = data.length;



        data.map(item => {

            // repolarda kullanılan yazılım dillerinin çekilmesi 
            fetch(item.languages_url).then(res => res.json())
                .then(data => {
                    if (!(Object.keys(data).length === 0)) {
                        langKey.push(...Object.keys(data));
                        langValue.push(...Object.values(data));
                    }
                    langValue.forEach((item, index) => {
                        size += item
                    })

                    uniqueKey = [...new Set(langKey)];

                    
                  // yazılım dilleri ve boyunlarının toplam repoya oranlanıp doma eklenmesi 
                    for (let i = 0; i < uniqueKey.length; i++) {
                        for (let x =0;x < langValue.length; x++) {

                            attSrc = "src";
                            attAlt = "alt"
                            let langDiv = document.createElement("div");
                            let langDivCard = document.createElement("div")
                            let langDivContent = document.createElement("div")
                            let spanLangName = document.createElement("span")
                            let spanLangRatio = document.createElement("span")
                            let langImg = document.createElement("img")
                            langImg.setAttribute(attSrc,"")
                            langImg.setAttribute(attAlt,"lang-img")
                            langDiv.classList.add("lang-ratio")
                            langDivCard.classList.add("lang-ratio-card")
                            langDivContent.classList.add("lang-ratio-content")
                            spanLangRatio.classList.add("lang-ratio-value")

                            spanLangName.innerHTML = uniqueKey[i];
                            spanLangRatio.innerText =`${((langValue[x]/size)*100).toFixed(2)}%`
                            langDivContent.appendChild(spanLangName);
                            langDivContent.appendChild(spanLangRatio);
                            langDivCard.appendChild(langImg);
                            langDivCard.appendChild(langDivContent);
                            langDiv.appendChild(langDivCard);
                            fieldset.appendChild(langDiv);
                        }

                    }
                    repoSize.innerHTML = `${(size / 1048576).toFixed(2)} MB`;
                });

        });


    })






    fieldset.style.display = "block";
}












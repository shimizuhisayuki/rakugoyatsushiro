const emailInput = document.getElementById("email");
const domainList = document.getElementById("domainList");

const domains = [
    "gmail.com",
    "yahoo.co.jp",
    "outlook.jp",
    "example.com"
];

emailInput.addEventListener("input", function () {
    const value = emailInput.value;

    // @ を入力した瞬間に候補表示
    if (value.endsWith("@")) {
        showDomainList();
    } else {
        domainList.style.display = "none";
    }
});

function showDomainList() {
    domainList.innerHTML = ""; // 一度クリア

    domains.forEach(domain => {
        const item = document.createElement("div");
        item.textContent = domain;

        item.addEventListener("click", function () {
            const base = emailInput.value.split("@")[0];
            emailInput.value = base + "@" + domain;

            domainList.style.display = "none";
        });

        domainList.appendChild(item);
    });

    domainList.style.display = "block";
}

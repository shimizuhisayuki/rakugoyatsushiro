const emailInput = document.getElementById("email");
const domain = "@example.com";  // 自動でつけたいドメイン

emailInput.addEventListener("input", function() {
    let value = emailInput.value;

    // 1. ユーザーが @ を自分で入力したら何もしない
    if (value.includes("@")) return;

    // 2. 末尾が @example.com でなければ補完
    if (value !== "" && !value.endsWith(domain)) {
        emailInput.value = value + domain;
    }
});

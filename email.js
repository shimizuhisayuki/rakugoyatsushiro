const emailInput = document.getElementById("email");
const domain = "example.com";  // 自動補完したいドメイン

emailInput.addEventListener("input", function() {
    let value = emailInput.value;

    // @ が入力された瞬間だけ自動補完する
    if (value.endsWith("@")) {
        emailInput.value = value + domain;
    }
});

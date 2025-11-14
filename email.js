const emailInput = document.getElementById("email");
const domainList = document.getElementById("domainList");

const domains = [
  "gmail.com",
  "yahoo.co.jp",
  "outlook.jp",
  "docomo.ne.jp",
  "ezweb.ne.jp",
  "softbank.ne.jp"
];

emailInput.addEventListener("input", function () {
  const value = emailInput.value;

  // @ が含まれていて、まだドメイン入力がされていない場合に表示
  if (value.includes("@") && !value.split("@")[1]) {
    showDomainList();
  } else {
    domainList.style.display = "none";
  }
});

function showDomainList() {
  domainList.innerHTML = "";

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


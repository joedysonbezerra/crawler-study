const { Builder, By, Key, until } = require("selenium-webdriver");

const student = {
  cpf: "394940400",
  password: "kdoeokkoekkoko"
};

(async function main() {
  let driver = new Builder().forBrowser("chrome").build();
  await driver.get("https://www.siga.upe.br/upe/index.jsp");
  await driver.findElement(By.name("cpf")).sendKeys(student.cpf);
  await driver
    .findElement(By.name("txtPassword"))
    .sendKeys(student.password, Key.RETURN);
  await driver.wait(until.titleIs("siga"), 5000);
})();

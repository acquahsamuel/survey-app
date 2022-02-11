async function fetechData() {
  const data = await fetch("httlo");
  const res = await data.json();
  console.log(res);
}

fetechData();


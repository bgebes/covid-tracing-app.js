async function getData() {
  let response, body, url = "https://covid-api.mmediagroup.fr/v1/cases";
  try {
    response = await fetch(url);
    body = await response.json();
  } catch (error) {
    alert("A error detected getting data.");
  }

  if (response) {
    return body;
  }
}

export default getData;
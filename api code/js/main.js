document.querySelector('button').addEventListener('click', apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector('input').value;
  try {
    const response = await fetch(`https://mcdonalds-calorie-helper.cyclic.app/api/${rapperName}`);
    const data = await response.json();

    console.log(data);

    document.querySelector('#breakFast').innerHTML = ''; // Clear existing content

    if (data.brekky && data.brekky.length > 0) {
      const breakFastList = document.createElement('ul'); // Create a <ul> element

      data.brekky.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        breakFastList.appendChild(listItem); // Append each <li> element to the <ul>
      });

      document.querySelector('#breakFast').appendChild(breakFastList); // Append the <ul> to the #breakFast element
    } else {
      document.querySelector('#breakFast').textContent = 'No breakfast data available';
    }

    document.querySelector('#lowCost').innerHTML = ''; // Clear existing content

    if (data.affordable && data.affordable.length > 0) {
      const lowCostList = document.createElement('ul'); // Create a <ul> element

      data.affordable.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        lowCostList.appendChild(listItem); // Append each <li> element to the <ul>
      });

      document.querySelector('#lowCost').appendChild(lowCostList); // Append the <ul> to the #lowCost element
    } else {
      document.querySelector('#lowCost').textContent = 'No low-cost data available';
    }

    document.querySelector('#healthierChoice').innerHTML = ''; // Clear existing content

    if (data.healtier && data.healtier.length > 0) {
      const healthierChoiceList = document.createElement('ul'); // Create a <ul> element

      data.healtier.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        healthierChoiceList.appendChild(listItem); // Append each <li> element to the <ul>
      });

      document.querySelector('#healthierChoice').appendChild(healthierChoiceList); // Append the <ul> to the #healthierChoice element
    } else {
      document.querySelector('#healthierChoice').textContent = 'No healthier choice data available';
    }
  } catch (error) {
    console.log(error);
  }
}

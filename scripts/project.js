const dateList = [];
const datesElement = document.getElementById('dates');

const displayDates = (dates) => {
    dates.forEach(date => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = date.title;
        article.appendChild(h3);

        const description = document.createElement('p');
        description.textContent = `Category: ${date.category}, Duration: ${date.duration}, Cost: ${date.cost}`;
        article.appendChild(description);

        datesElement.appendChild(article);
        
    });
}

const getDates = async () =>{
    const response = await fetch('https://run.mocky.io/v3/b0926072-ad1b-49c3-bedc-f21d3ef901ce');
    const data = await response.json();
    dateList.push(...data);
    displayDates(dateList);
}
const clearFilter = () =>{
    datesElement.innerHTML = '';
}

const filterDates = () => {
    const categoryF = document.getElementById('byCategory').value;
    const durationF = document.getElementById('byDuration').value;
    const costF = document.getElementById('byCost').value;

    let filteredDates = dateList.slice();
    
    switch (categoryF){
        case 'indoor':
            filteredDates = filteredDates.filter(date => date.category.includes('Indoor'));
            break;
        case 'food':
            filteredDates = filteredDates.filter(date => date.category.includes('Food & Drink'));
            break;
        case 'cultural':
            filteredDates = filteredDates.filter(date => date.category.includes('Cultural'));
            break;
        case 'outdoor':
            filteredDates = filteredDates.filter(date => date.category.includes('Outdoor'));
            break;
        case 'sports':
            filteredDates = filteredDates.filter(date => date.category.includes('Sports & Recreation'));
            break;
        case 'entertainment':
            filteredDates = filteredDates.filter(date => date.category.includes('Entertainment'));
            break;           
        case 'adventure':
            filteredDates = filteredDates.filter(date => date.category.includes('Adventure'));
            break;
        case 'social':
            filteredDates = filteredDates.filter(date => date.category.includes('Social'));
            break;
        case 'art':
            filteredDates = filteredDates.filter(date => date.category.includes('Arts & Crafts'));
            break;
        case 'shopping':
            filteredDates = filteredDates.filter(date => date.category.includes('Shopping'));
            break;
        case 'all':
        default:
            break;
    }
    switch (durationF){
        case 'short':
            filteredDates = filteredDates.filter(date => date.duration.includes('Short'));
            break;
        case 'mediumdur':
            filteredDates = filteredDates.filter(date => date.duration.includes('Medium'));
            break;
        case 'long':
            filteredDates = filteredDates.filter(date => date.duration.includes('Long'));
        break;
        case 'all':
        default:
            break;
    }            
    switch (costF){
        case 'free':
            filteredDates = filteredDates.filter(date => date.cost.includes('Free'));
            break;
        case 'low':
            filteredDates = filteredDates.filter(date => date.cost.includes('Low'));
            break;
        case 'mediumcost':
            filteredDates = filteredDates.filter(date => date.cost.includes('Medium'));
        break;
        case 'high':
            filteredDates = filteredDates.filter(date => date.cost.includes('High'));
        break;
        case 'variable':
            filteredDates = filteredDates.filter(date => date.cost.includes('Variable'));
        break;
        case 'all':
        default:
            break;
                    
    }
    displayDates(filteredDates);
}

document.getElementById('byCategory').addEventListener('change', filterDates);
document.getElementById('byDuration').addEventListener('change', filterDates);
document.getElementById('byCost').addEventListener('change', filterDates);

getDates();
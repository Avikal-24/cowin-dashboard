console.log("all is well")


let button = document.getElementById('btn')
button.addEventListener('click', display)

async function fetchAPI() {
    let url= 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
    try {
        let response = await fetch(url);
        return await response.json();
    } catch (err) {
        console.log(err)
    }
   
}

async function display() {

    let data = await fetchAPI();
    console.log(data);
    console.log(data.states);
    let tbody = document.getElementsByTagName('tbody')
    console.log(tbody)
    data.states.forEach(state => {

        htmlSegment = `<tr>
        <td>${state.state_id}</td>
        <td>${state.state_name}</td>
        </tr>`
        console.log(state.state_name)
        console.log(state.state_id)
        tbody[0].innerHTML += htmlSegment
 
    });
    
}




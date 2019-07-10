const tableBody = document.getElementById('swt-table')

const getVehicles = async () => {
  try {
    const response = await fetch(' https://api.sawatchlabs.com/models/13/2017')
    if (!response.ok) {
      throw new Error(response.statusText)
    } else {
      results = await response.json();
      let vehicles = results.data
      sortedVehicles = vehicles.sort((a, b)=> {
        if(a.vehicle_model > b.vehicle_model){
          return 1
        } else {
          return -1
        }
      })
      const rows = sortedVehicles.map(vehicle => {
        return createRow(vehicle)
      })
      tableBody.innerHTML = rows.join('')
    }
  } catch (error) {
    throw new Error(response.statusText)
  }
}

const createRow = (vehicle) => {
  let row = (`
  <tr>
    <td>${vehicle.vehicle_year}</td>
    <td>${vehicle.make}</td>
    <td>${vehicle.vehicle_model}</td>
    <td>${vehicle.displacement}</td>
    <td>${vehicle.cylinders}</td>
    <td>${vehicle.class}</td
  </tr>
  `)
  return row
}

window.onload = getVehicles()
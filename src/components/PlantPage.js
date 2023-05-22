import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  const itemsToDisplay = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  function handleSearch(e){
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants}/>
      <Search handleSearch={handleSearch} setSearch={setSearch}/>
      <PlantList plants={plants} setPlants={setPlants} itemsToDisplay={itemsToDisplay}/>
    </main>
  );
}

export default PlantPage;

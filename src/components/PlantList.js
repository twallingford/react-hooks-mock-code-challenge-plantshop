import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, itemsToDisplay}) {
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data))
  }, [])

  return (
    <ul className="cards">
      {itemsToDisplay.map((plant) => <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>)}
    </ul>
  );
}

export default PlantList;

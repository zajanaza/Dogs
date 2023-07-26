import React from "react"; 
import { PageContainer, DogList, DogItem } from "./HomeStyle";  
import dogs from '../../dogsData';
import { useState } from "react";

export default function Home() {
  const [listOfDogs, setListOfDogs] = useState(dogs);
  return (
    <PageContainer>
      <DogList name='dogList'>
        {listOfDogs.map((dog) => {
          return(
            <DogItem key={dog.id}>{dog.name} / {dog.race} / {dog.age}</DogItem>
          )
        })}
      </DogList>
    </PageContainer>
  );
}

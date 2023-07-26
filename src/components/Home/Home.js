import React from "react"; 
import { PageContainer, DogList, DogItem, DogForm, Input, Button } from "./HomeStyle";  
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
        <DogForm>
          <Input 
            type='text' 
            placeholder='jmeno psa' 
            name='name'/>   
          <Input 
            type='text' 
            placeholder='rasa psa' 
            name='race'/>  
          <Input 
            type='number' 
            placeholder='vek psa' 
            name='age'
            min='0'
            max='24'/> 
          <Button>Přidat</Button>
        </DogForm>
        
    </PageContainer>
  );
}

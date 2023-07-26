import React from "react"; 
import { PageContainer, DogList, DogItem, DogForm, Input, Button } from "./HomeStyle";  
import dogs from '../../dogsData';
import { useState } from "react";

export default function Home() {
  const [listOfDogs, setListOfDogs] = useState(dogs);
  const [newDog, setNewDog] = useState({
    id:listOfDogs.length>0 ? Math.max(...listOfDogs.map (dog => dog.id)) + 1 : 1,  
    //pokud to pole nebude prazdne, tak hleda max id a pak dosadi id plus 1
    name:"",
    race:"",
    age:"",
  });
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
            name='name'
            value={newDog.name}/>   
          <Input 
            type='text' 
            placeholder='rasa psa' 
            name='race'
            value={newDog.race}/>  
          <Input 
            type='number' 
            placeholder='vek psa' 
            name='age'
            min='0'
            max='24'
            value={newDog.age}/> 
          <Button>Přidat</Button>
        </DogForm>
        
    </PageContainer>
  );
}

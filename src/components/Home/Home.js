import React from "react"; 
import { PageContainer, DogList, DogItem, DogForm, Input, Button } from "./HomeStyle";  
import dogs from '../../dogsData';
import { useState, useEffect } from "react";

export default function Home() {
  const [listOfDogs, setListOfDogs] = useState(dogs);
  const [newDog, setNewDog] = useState({
    id:listOfDogs.length>0 ? Math.max(...listOfDogs.map (dog => dog.id)) + 1 : 1,  
    //pokud to pole nebude prazdne, tak hleda max id a pak dosadi id plus 1
    name:"",
    race:"",
    age:"",
  });
  const [valid, setValid] = useState(false);
  const handleChange = (e) => {                                        //e je event-tedy zapis do inputu
    const updateDog = {...newDog, [e.target.name]: e.target.value};   //e.target a name rika, ze u 1. inputu je to name, u 2. race atd
    setNewDog(updateDog);
    validateData(updateDog);                                                                                       
  };

   //useEffect(() => {console.log(newDog)},[newDog]);                //mel by vypsat             

  //validacni fce na form inputs, doplnuje hodnotu do valid pomoci setValid a valid je dosazena do Button nize
  const validateData = (dog) => {                                       
    if (dog.age === "" || parseInt(dog.age) < 0 || parseInt(dog.age) > 24) {
      return setValid(false);
    } else if (dog.name.trim().length === 0) {
      return setValid(false);
    } else if (dog.race.trim().length === 0) {
      return setValid(false);
    }
    setValid(true);
  }; 

  const handleAdd = () => {
    setListOfDogs((listOfDogs) => {
      return [...listOfDogs, newDog];
    });
    const newId = newDog.id + 1;
    const updateDog = {
      id: newId,
      name: '',
      race:'',
      age:''
    }
    setNewDog(updateDog);        //zajisti pridani id novemu psovi a vyresetovani 
    setValid(false);             //po pridani a resetovani poli opet spusti validaci
  }  
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
            value={newDog.name}
            onChange={handleChange}/>                       
          <Input 
            type='text' 
            placeholder='rasa psa' 
            name='race'
            value={newDog.race}
            onChange={handleChange}/>  
          <Input 
            type='number' 
            placeholder='vek psa' 
            name='age'
            min='0'
            max='24'
            value={newDog.age}
            onChange={handleChange}/>                  
          <Button disabled={!valid} onClick={handleAdd}>Přidat</Button>
        </DogForm>        
    </PageContainer>
  );
}

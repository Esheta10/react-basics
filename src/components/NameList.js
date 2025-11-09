import React from "react";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 22,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 34,
      skill: "Vue",
    },
  ];

  const personsList = persons.map((person) => {
   return(
     <h2 key={person.id}>
      I am {person.name}. I am {person.age} years old. I know {person.skill}.
    </h2>
   )
  });
  return <div>{personsList}</div>;
}

export default NameList;

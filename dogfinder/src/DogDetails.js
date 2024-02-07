import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './DogDetails.css'

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());
  console.log(dog);

  return (
    <div className="dog-card">
      <div className="name">{dog.name}</div>
      <div className="age">Age: {dog.age} years</div>
      <img width={300} src={dog.src}></img>
      <ul className="facts">
        {dog.facts.map(fact => {
           return <li key={uuidv4()} className="fact">{fact}</li>
        })}
      </ul>
    </div>
  );
};

export default DogDetails;

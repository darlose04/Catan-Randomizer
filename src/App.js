import React from "react";
import "./App.css";
import Regular from "./components/Regular";
import Expansion from "./components/Expansion";

const App = () => {
  let regularResources = [
    "lumber",
    "lumber",
    "lumber",
    "lumber",
    "wheat",
    "wheat",
    "wheat",
    "wheat",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "brick",
    "brick",
    "brick",
    "ore",
    "ore",
    "ore",
    "desert"
  ];

  let regularNumbers = [
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12
  ];

  let expansionResources = [
    "lumber",
    "lumber",
    "lumber",
    "lumber",
    "lumber",
    "lumber",
    "wheat",
    "wheat",
    "wheat",
    "wheat",
    "wheat",
    "wheat",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "brick",
    "brick",
    "brick",
    "brick",
    "brick",
    "ore",
    "ore",
    "ore",
    "ore",
    "ore",
    "desert",
    "desert"
  ];

  let expansionNumbers = [
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    5,
    5,
    5,
    6,
    6,
    6,
    8,
    8,
    8,
    9,
    9,
    9,
    10,
    10,
    10,
    11,
    11,
    11,
    12,
    12
  ];

  const shuffle = array => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  const regularLayout = (arr1, arr2) => {
    let newArr1 = shuffle(arr1);
    let newArr2 = shuffle(arr2);

    return (
      <div className='row'>
        <div className='col-sm-6'>
          <ul>
            {newArr1.map(resource => (
              <li>{resource}</li>
            ))}
          </ul>
        </div>
        <div className='col-sm-6'>
          <ul>
            {newArr2.map(num => (
              <li>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const expansionLayout = (arr1, arr2) => {
    let newArr3 = shuffle(arr1);
    let newArr4 = shuffle(arr2);

    return (
      <div className='row'>
        <div className='col-sm-6'>
          <ul>
            {newArr3.map(resource => (
              <li>{resource}</li>
            ))}
          </ul>
        </div>
        <div className='col-sm-6'>
          <ul>
            {newArr4.map(num => (
              <li>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className='container mt-3'>
      <h1 className='m-auto text-center'>Catan Randomizer</h1>
      <h5 className='mt-3 text-center'>
        Reload the page to get a new random list
      </h5>
      <Regular
        regularResources={regularResources}
        regularNumbers={regularNumbers}
        regularLayout={regularLayout}
      />
      <Expansion
        expansionResources={expansionResources}
        expansionNumbers={expansionNumbers}
        expansionLayout={expansionLayout}
      />
    </div>
  );
};

export default App;

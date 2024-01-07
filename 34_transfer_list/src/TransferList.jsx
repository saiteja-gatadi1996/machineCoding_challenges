// TransferList.js
import { useState } from 'react';

const TransferList = () => {
  const [listA, setListA] = useState([
    { id: 1, label: 'delectus aut autem', checked: false },
    { id: 2, label: 'quis ut nam facilis et officia qui', checked: false },
    { id: 3, label: 'fugiat veniam minus', checked: false },
    { id: 4, label: 'et porro tempora', checked: false },
    // ...add other items here
  ]);
  const [listB, setListB] = useState([]);

  const handleCheck = (id, list) => {
    const setList = list === 'A' ? setListA : setListB;
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

const transfer = (fromAtoB) => {
  if (fromAtoB) {
    const itemsToTransfer = listA
      .filter((item) => item.checked)
      .map((item) => ({ ...item, checked: false }));
    setListB(listB.concat(itemsToTransfer));
    setListA(listA.filter((item) => !item.checked));
  } else {
    const itemsToTransfer = listB
      .filter((item) => item.checked)
      .map((item) => ({ ...item, checked: false }));
    setListA(listA.concat(itemsToTransfer));
    setListB(listB.filter((item) => !item.checked));
  }
};


  return (
    <div className='transfer-list'>
      <div className='list-box'>
        <h3>List A</h3>
        <ul>
          {listA.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type='checkbox'
                  checked={item.checked}
                  onChange={() => handleCheck(item.id, 'A')}
                />
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className='transfer-controls'>
        <button onClick={() => transfer(true)}>&gt;</button>
        <button onClick={() => transfer(false)}>&lt;</button>
      </div>
      <div className='list-box'>
        <h3>List B</h3>
        <ul>
          {listB.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type='checkbox'
                  checked={item.checked}
                  onChange={() => handleCheck(item.id, 'B')}
                />
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;

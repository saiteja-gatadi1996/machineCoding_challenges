import { useState } from 'react';
import './TodoList.css'; // Assuming you save your CSS in TodoList.css

const initialItems = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Angular',
  'Zustand',
  'NextJS',
  'TypeScript',
];

function TodoList() {
  const [todoItems, setTodoItems] = useState(
    initialItems.map((item) => ({ text: item, isEditing: false }))
  );
  const [inputValue, setInputValue] = useState('');

  // add an single item to the existing list with isEditing: false
  const addTodoItem = (item) => {
    setTodoItems((prevItems) => [
      ...prevItems,
      { text: item, isEditing: false },
    ]);
  };

  // filter the list with the items whose index doesn't match with the id you want to delete
  const handleDelete = (index) => {
    setTodoItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  // this function is responsible to change the isEditing value, this is useful for showing the edit box with save icon
  const handleEdit = (index) => {
    setTodoItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          // for matched one, it will be isEditing: true
          return { ...item, isEditing: !item.isEditing };
        }
        // for un-matched ones, it will be isEditing: false
        return item;
      })
    );
  };

  // once isEditing is true, we would see the text will become editable input text box
  // this function just replaces the existing value to newlyTypedValue
  const handleEditChange = (e, index) => {
    // the new value you type
    const newValue = e.target.value;
    setTodoItems((prevItems) =>
      prevItems.map((item, i) => {
        if (i === index) {
          // for matched one, it will be text is replaced with newValue
          return { ...item, text: newValue };
        }
        // for un-matched ones, it will be the same old value
        return item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      //once the value is true and clicked on enter, it will be invoking/calling the addTodoItem function with that value
      addTodoItem(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className='container text-center'>
      <form id='todoForm' onSubmit={handleSubmit}>
        <input
          type='text'
          id='todoItemInput'
          autoComplete='off'
          placeholder='Add a new item'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>

      <ul id='listContainer' className='list-container'>
        {todoItems.map((item, index) => (
          <li key={index}>
            {/* handleEdit function is responsible for isEditing toggle*/}
            {item.isEditing ? (
              <input
                type='text'
                value={item.text}
                onChange={(e) => handleEditChange(e, index)}
              />
            ) : (
              // for other non edited todos, it is normal text
              <span className='text'>{item.text}</span>
            )}
            <button className='edit' onClick={() => handleEdit(index)}>
              {item.isEditing ? '💾' : '✏️'}
            </button>
            <button className='delete' onClick={() => handleDelete(index)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>

      {todoItems.length === 0 && (
        <div className='no-elements'>Ooops! List is empty</div>
      )}
    </div>
  );
}

export default TodoList;

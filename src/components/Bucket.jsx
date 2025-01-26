import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket({ bucket, completeBucketItem, removeBucketItem, editBucketItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  const submitUpdate = (value) => {
    editBucketItem(edit.id, value);
    setEdit({
      id: null,
      value: '',
      eagerness: ''
    });
  };

  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return bucket.map((item, index) => (
    <div 
      key={index} 
      className={`bucket-row ${item.eagerness} ${item.complete ? 'complete' : ''}`}
    >
      <div onClick={() => completeBucketItem(item.id)}>{item.text}</div>
      <div className="icons">
        <p onClick={() => setEdit({ 
          id: item.id, 
          value: item.text, 
          eagerness: item.eagerness 
        })}>
          ✏️
        </p>
        <p onClick={() => removeBucketItem(item.id)}>🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;

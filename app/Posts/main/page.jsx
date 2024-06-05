import React from 'react';
import Card from '../../components/Card'; // assuming Card component is in the same directory
import jsonData from '../../data.json'
const page = () => {
  const data = jsonData

  return (
    <div className='w-full grid sm:grid-cols-3 grid-cols-1'>
      {data && data.map((post) => {
        return (
          <Card 
            key={post.id} 
            title={post.title} 
            description={post.description} 
            link={`/Posts/${post.id}`}
          />
        );
      })}
    </div>
  );
};

export default page
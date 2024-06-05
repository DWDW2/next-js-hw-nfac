import Post_inner from '@/app/components/layout/Post_inner'
import jsonData from '../../data.json'
import React from 'react'

export async function generateMetadata({ params }) {
  const id = Number(params.slug)
  return {
    title: jsonData[id-1].title
  }
}

const page = ({params}) => {
    const data = jsonData
      
  return (
    <div>
        {data && data.map((post) => {
          if (Number(params.slug) === post.id) {
            return (
              <Post_inner title={post.title} description={post.description} date={post.date} author={post.author} />
            );
      }
      })}
    </div> 
  )
}

export default page
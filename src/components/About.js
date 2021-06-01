import React, {useEffect, useState} from 'react'
import sanityClient from '../client'
import ocean from '../assets/ocean.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react';


const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
    return builder.image(source)
}

const About = () => {

    const [author, setAuthor] = useState(null);
    
    useEffect (()=>{
        sanityClient.fetch(`*[_type == 'author']{
            name,
            bio,
            'authorImage': image.asset->url
        }`).then((data)=> setAuthor(data[0]))
        .catch(console.error)
    })
    if(!author) return <div>Loading...</div>
    return (
        <main className='relative'>
            <img src={ocean} alt='ocean' className='absolute w-full'/>
            <div className='p-10 lg:pt-48 container mx-auto relative'> 
                <section className='bg-indigo-800 rounded-lg shadow-2xl lg:flex p-20'> 
                <img 
                    alt={author.name} 
                    src={urlFor(author.authorImage).url()} 
                    className='rounded w-32 h-40 lg:w-64 lg:h-74 lg:h-64 mr-8'/>
                <div className='text-lg flex-col justify-center'>
                    <h1 className='cursive text-6xl text-green-300 my-4'> 
                    Hey there, I'm {''}
                    <span className='text-green-100'>{author.name}</span>
                    </h1>
                    <div className='prose lg:prose-xl text-white'>
                    <BlockContent 
                        blocks={author.bio}
                        projectId='zbacxc84' 
                        dataset='production'
                        className=''
                        />
                    </div>
                </div>
                </section>
            </div>

        </main>
    )
}

export default About

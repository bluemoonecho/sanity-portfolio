import React, {useEffect, useState} from 'react'
import emailjs from 'emailjs-com'
import sanityClient from '../client'
import ocean from '../assets/ocean.jpg'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react';


const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
    return builder.image(source)
}

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4zlyo55', 'template_exxkxl9', e.target, 'user_mBkigUW7MLoS32Yvr7nl0')
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
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
                    <div className="">
                    <form onSubmit={sendEmail}>
                            <div className="">
                            <h3>Get in touch</h3>
                                <div className="border rounded m-1 w-20 bg-gray-100">
                                    <input type="text" className="form-control" placeholder="Name" name="name"/>
                                </div>
                                <div className="">
                                    <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                                </div>
                                <div className="">
                                    <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                                </div>
                                <div className="">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                                </div>
                                <button type='submit' className='flex justify-center bg-indigo-200 py-2 h-10 w-34 rounded my-2 mx-2'>
                                    <p>Send me an email</p>
                                </button>
                            </div>
                    </form>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default About

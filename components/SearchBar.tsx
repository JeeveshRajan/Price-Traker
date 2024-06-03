"use client"
import { scrapeAndStoreProduct } from '@/lib/actions';
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductUrl=(url:string)=>{
  try {
    const parsedUrl= new URL(url);
    const hostname= parsedUrl.hostname;
    if(hostname.includes('amazon.com') || 
    hostname.includes('amazon.') || 
    hostname.endsWith('amazon'))
    return true
  } catch (error) {
    return false;
  }
}

const SearchBar = () => {
  const [searchPrompt, setsearchPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.log(searchPrompt)
    const handleSubmit= async(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const isValid=isValidAmazonProductUrl(searchPrompt);
        if(!isValid){
          alert("Please enter the valid Amazon Product URL");
        }

        try {
          setIsLoading(true);
          const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
          
        }finally{
          setIsLoading(false);
        }
    }
  return (

        <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
            <input type='text' placeholder='Enter product link' className='searchbar-input'
            onChange={(e)=>setsearchPrompt(e.target.value)}
            />

            <button className='searchbar-btn' type='submit'
              disabled={searchPrompt.length===0}
            >
              {
                isLoading?"Searching...":"Search"
              }
              </button>
        </form>
 
  )
}

export default SearchBar
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveMenu = () => {

  
  return (
        <>
            <ul>
                <li className='menu-item-has-children'>
                    <Link href='#'>Home</Link>
       
                </li>  
                <li className='menu-item-has-children'>
                    <Link href='#'>Pages</Link>
              
                </li>
                <li className='menu-item-has-children'><Link href='#'>Services</Link>
                
                </li>
                <li className='menu-item-has-children'><Link href='#'>Project</Link>
               
                </li>
                <li className='menu-item-has-children'><Link href='#'>Blog</Link>
                 
                </li>
                <li><Link href="">Contact</Link></li>   
            </ul>  
        </>
    );
};

export default ResponsiveMenu;
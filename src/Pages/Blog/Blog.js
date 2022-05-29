import React from 'react';

const Blog = () => {
    return (
        <div className='bg-accent text-white pl-12 lg:pr-80 pt-10 '>
            <h1 className='text-2xl text-secondary'> <span className='text-white'>1.</span> Steps to improve the performance of a React Application</h1>
            <p>By default react is faster than any other applications.Still for a better user experience and keep them engaged with app, developer needs to follow some steps. </p>
            <div className='text-sm pl-16 mb-20'>
                <li>Usage of pure components</li>
                <li>Memoization With React.memo</li>
                <li>Memoizing React components to prevent unnecessary re-renders</li>
                <li>Using React fragments to avoid extra tags. </li>
                <li>Code-splitting in React using dynamic import</li>
            </div>

            <h1 className='text-2xl text-secondary'> <span className='text-white'>2.</span> Some different ways to manage a state in a React application</h1>
            <p> State is objects of javaScript.State holds information of certain components. There are diferent kinds of state available in react as well as there different kinds of ways to manage them. </p>
            <div className='text-sm pl-16 mb-20'>
                <li>Using State Correctly</li>
                <li>Do Not Modify State Directly</li>
                <li>Update are Merged State</li>
                <li>Avoid duplicates in state</li>
                <li>With same approch combine 2 states in a single state.</li>
            </div>

            <h1 className='text-2xl text-secondary'> <span className='text-white'>3.</span>Proccess of prototypical inheritance work</h1>
            <p className='text-sm pl-16 pb-20'>To add objects prototypical inheritance  is a feature in Javascript.  </p>

            <h1 className='text-2xl text-secondary'> <span className='text-white'>4.</span>Reasons to not set the state directly in React.</h1>
            <p className='text-sm pl-16 pb-20'>Developer shouldn't update state directly, it's a bad practise. Updating state directly, it doesn't change the state immediately. It can lead odd bugs. It will be hard to optimize components even developer may loss the control of components.   </p>


            <h1 className='text-2xl text-secondary'> <span className='text-white'>5.</span>There is an array of products. Each product has a name, price, description, etc. Here the ways to implement a search to find products by name</h1>
            <p>There are four method to seacrh products by name we can use.</p>
            <div className='text-sm pl-16 pb-20'>
                <li>Array.includes( ) - Here if a value of name exits in array or not , includes() will returns either true or false.</li>
                <li>Array.indexOf - This method find the first index of value of array, If there any name it will returns position numbere of name , if not it will return -1.</li>
                <li>Array.find( ) - This method only returns the first value of name in the array. If the condition of funtion doesn't match any name it will return undefined</li>
                <li>Array.filter - Tnis method return a new array and there willbe all name which matches the condition of funtion. If not it will return an empty array.</li>
            </div>

        </div>
    );
};

export default Blog;
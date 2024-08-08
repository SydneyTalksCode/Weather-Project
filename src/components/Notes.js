import React, { useEffect, useState } from 'react'

const Notes = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState('');
//   componentDidMount - component is rendered
//   componentDidUpdate - component with something that is changeable, checks that it changed
//   componentWillUnmount - component is about to leave the page
function fetchData() {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve("data");
        }, 1000)
        });
    }
//     } //js way of promise, phase 1 + reactify promise

useEffect(() => {
    fetchData().then((data) => {
        setData(data);
        console.log(data);
    })
}, []) //reactify promise

useEffect(() => {
    console.log('i am componentDidMount')
    setText('meow')
    return () => {
        console.log('i am componentWillUnmount');
        console.log('i did some cleanup :]')
    }
}, []); //componentDidMount + componentWillUnmount

useEffect(() => {
    console.log('i am componentDidUpdate')
    console.log(text);
}, [text]); //componentDidUpdate

useEffect(() => {
    return () => {}
}, []); //componentWillUnmount




// fetchData().then((data) => {
//     console.log(data);
// }); //js way of promise, phase 1

    return (
    <div>Notes</div>
  );
}

export default Notes;

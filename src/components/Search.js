import { useRef, useEffect } from "react";

const Search = ({handleChange: hc, searchTerm: st, handleSubmit, isFocused, children}) => {
    const inputRef = useRef();

    useEffect(() => {
        if(isFocused && inputRef.current){
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (   
    <form onSubmit={handleSubmit}>
        {children}
        <br/>
        <input 
        id='search' 
        type='text' 
        value={st} 
        name={'city'} 
        onChange={hc} 
        autoFocus={isFocused}
        ref={inputRef} 
        placeholder={"New York"}
        />
        <button type='submit'>Search</button>
         </form>
    );
}

export default Search;


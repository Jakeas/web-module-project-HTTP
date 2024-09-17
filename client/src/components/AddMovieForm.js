import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import axios from 'axios';

const AddMovieForm = (props) => {
	const { push } = useHistory();

	const { id } = useParams()

	const [addMovie, setAddMovie] = useState({
		title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
	});

	useEffect(()=>{
		axios.post(`http://localhost:5000/api/movies`, addMovie)
			.then(res =>{
				console.log({res})
				setAddMovie(res.data)
				
			})
			.catch(err =>{
				console.log(err)
			})
	}, [])

console.log({id})
    return(
        <div></div>
    )
}
    export default AddMovieForm
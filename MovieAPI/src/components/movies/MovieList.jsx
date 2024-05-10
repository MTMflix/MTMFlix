import React, {useEffect, useState} from "react";
import SearchBar from "../layout/SearchBar";

const url = 'https://ott-details.p.rapidapi.com/getnew?region=US&page=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ec9ef9a28dmsh275e37278b75032p13c95bjsn38291f0cc22b',
		'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
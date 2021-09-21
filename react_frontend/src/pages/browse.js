import React from 'react';
import { BrowseContainer } from '../containers/browse';
import {useContent} from '../hooks';
import selectionFilter from '../utils/selection-filter';

export default function Browse() {
    // need the series and the films
    const { series } = useContent('series');
    const { films } = useContent('films');
    // console.log(series);
    // console.log(films);
    // then we need the slides (pictures of TV / movies on Netflix page)
    const slides = selectionFilter({ series, films });
    console.log(slides)
    // pass it to the browse container
    return <BrowseContainer slides={slides}/>;
}

ReactDOM.render(<Browse />, document.getElementById('app'));

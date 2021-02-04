import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions';
import './moviesearch.scss';

function MovieSearch(props) {
    return <input
        type="text"
        onChange={(e) => props.setFilter(e.target.value)}
        value={props.movieFilter}
        placeholder="Search"
    />
}

export default connect(null, { setFilter })(MovieSearch);
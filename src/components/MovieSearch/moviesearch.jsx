import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions';
import './moviesearch.scss';

function MovieSearch(props) {
    return <input
        className="search-input"
        type="text"
        onChange={(e) => props.setFilter(e.target.value)}
        value={props.movieFilter}
        placeholder="Filter Movies"
    />
}

MovieSearch.propTypes = {
    onChange: PropTypes.func
}

export default connect(null, { setFilter })(MovieSearch);
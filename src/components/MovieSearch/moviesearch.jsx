import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../../actions/actions';
import search from '../../img/search.svg';
import './moviesearch.scss';

function MovieSearch(props) {
    return (
        <div className="search__container">
            <img src={search}/>
            <input
                className="search-input"
                type="text"
                onChange={(e) => props.setFilter(e.target.value)}
                value={props.movieFilter}
                placeholder="Filter Movies"
            />
        </div>
    )
    
}

MovieSearch.propTypes = {
    onChange: PropTypes.func
}

export default connect(null, { setFilter })(MovieSearch);
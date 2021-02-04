import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { moviesFilter } from '../../actions/actions';

function MovieSearch(props) {
    return (
    <input onChange={(e) => props.moviesFilter(e.target.value)} value={props.moviesFilter} placeholder="Search"/>
    )
}   

export default connect(null, { moviesFilter })(MovieSearch);
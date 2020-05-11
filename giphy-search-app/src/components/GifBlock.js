import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class GifBlock extends Component {
    constructor(props) {
	super(props);
    }
    
    render() {
        return (
		<div>
        {/* <div style={{borderStyle: "solid", borderWidth: "1px", borderColor: "white"}}> */}
            <Grid item xs={12}>
                <Paper style={{padding: 5, backgroundColor: "#3f51b5"}}>
                    <p style={{fontWeight: "bold", fontSize: "normal", color: "white"}}>{this.props.element.title}</p>
                    <a href={this.props.imageURL}><img src={this.props.imageURL} /></a>
                    <p style={{fontSize: "small", color: "white"}}>Date: {this.props.element.import_datetime.substring(0,10)}</p>       
                </Paper>
                <br/>
            </Grid>

        {/* </div> */}
		</div>
		);
    }
}

GifBlock.propTypes = {
    url: PropTypes.string,
}



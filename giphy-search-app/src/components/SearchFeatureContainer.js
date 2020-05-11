import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchFeatureView from './SearchFeatureView';
import GifBlock from './GifBlock';
import Grid from '@material-ui/core/Grid';


export default class SearchFeatureContainer extends Component {
    constructor(props) {
	super(props);
	
	this.state = {
	    searchInput: this.props.searchInput,
	    gifs: this.props.gifs,
		state: "trending",
		order: "default",
	    hideY: false,
	    hideG: false,
	    hidePG: false,
	    hidePG13: false,
		hideR: false
	}   
    }

	hideYRatingChangeHandler = (e) => {
		this.setState({hideY: !this.state.hideY});
		};
		hideGChangeHandler = (e) => {
		this.setState({hideG: !this.state.hideG});
		};
		hidePGChangeHandler = (e) => {
		this.setState({hidePG: !this.state.hidePG});
		};
		hidePG13ChangeHandler = (e) => {
		this.setState({hidePG13: !this.state.hidePG13});
		};
		hideRChangeHandler = (e) => {
		this.setState({hideR: !this.state.hideR});
	};

	newestGifs = (e) => {
		this.setState({order: "newestGifs"});
	};

	oldestGifs = (e) => {
		this.setState({order: "oldestGifs"});
	};

    setSearchInput = (e) => {

	this.setState({searchInput: e.target.value});
    };
    
    search = (e) => {
	axios.get("http://api.giphy.com/v1/gifs/search?q="+(this.state.searchInput)+"&api_key=QQ2mgyeXsImm27jPVZdF16Z0OR0XkV48")
	.then((response) => {
		this.setState({gifs: response.data["data"], state:"searching"});
		this.state.gifs.forEach((element) => {
			console.log(element.rating)
		    }
		    );
	    })
        .then((error) => {
		console.log(error);
	    });
    };
	
    render() {	
	if (this.state.state === "trending") {
	    axios.get("http://api.giphy.com/v1/gifs/trending?api_key=tgqggOWqq0zq6uSC0AwgK5fsUMjchVwr")
		.then((response) => {
			this.setState({gifs: response.data["data"], state:"searching"});
		    })
		.then((error) => {
			console.log(error);
		    });
	 
	}

	if(this.state.order === "oldestGifs") {
		this.state.gifs.sort((a, b) => (a.import_datetime > b.import_datetime) ? 1 : -1);
	}
	else if(this.state.order === "newestGifs") {
		this.state.gifs.sort((a, b) => (a.import_datetime < b.import_datetime) ? 1 : -1);
	}

	var parsed = this.state.gifs.map((element) => {
		console.log(element)
		if(element.rating === "y" && this.state.hideY === true) {
		}
		else if(element.rating === "g" && this.state.hideG === true) {
		}
		else if(element.rating === "pg" && this.state.hidePG === true) {
		}
		else if(element.rating === "pg-13" && this.state.hidePG13 === true) {
		}
		else if(element.rating === "r" && this.state.hideR === true) {
		}
		else{
			return <div>
						<Grid 
							container 
							
							direction="row"
							justify="center">
							<Grid item xs={6}>
								<GifBlock 
									imageURL={element.images.fixed_width.url} 
									element={element}
									key={element.id}
								/>
							</Grid>
						</Grid>
					</div>;
		}
	    });
    
	return (
		<div>
			<SearchFeatureView
				// gifs = {this.state.gifs}
				hideYChangeHandler = {this.hideYChangeHandler}
				hideGChangeHandler = {this.hideGChangeHandler}
				hidePGChangeHandler = {this.hidePGChangeHandler}
				hidePG13ChangeHandler = {this.hidePG13ChangeHandler}
				hideRChangeHandler = {this.hideRChangeHandler}
				oldestGifs = {this.oldestGifs}
				newestGifs = {this.newestGifs}
				setSearchInput = {this.setSearchInput}
				search = {this.search}
				parsed = {parsed} 
				searchInput = {this.state.searchInput}
				state = {this.state.state}
				/>
		</div>
		);

    }
}

SearchFeatureContainer.propTypes = {
    searchInput: PropTypes.string,
    gifs: PropTypes.array
};

SearchFeatureContainer.defaultProps = {
    gifs: []
};
    
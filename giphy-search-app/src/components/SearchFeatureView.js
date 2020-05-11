import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';


import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import { ThemeProvider } from '@material-ui/styles';

import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import MuiAlert from '@material-ui/lab/Alert';


const theme = createMuiTheme({
    palette: {
      primary: indigo,
      secondary: green,
    },
  });

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


// const [state, setState] = React.useState({
// gilad: true,
// jason: false,
// antoine: true,
// });

// const handleChange = (event) => {
// setState({ ...state, [event.target.name]: event.target.checked });
// };

export default class SearchFeatureView extends Component {

    // constructor(props) {
    //     super(props)
    // }

    // const classes = useStyles();


    render () {

        
    
        return(
            <div>
                <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        <ImageSearchIcon />
                        </IconButton>
                        <Typography style={{fontWeight: "bold", padding: 20}} variant="h5" color="inherit">
                        GIF Search App
                        </Typography>
                    </Toolbar>
                </AppBar>

                {/* <FormGroup style={{backgroundColor: "#7986cb", padding: 5, width: "80%", textAlign: "center"}} row>
                    <h3>Hide the following:</h3>
                    <br/>
                    <br/>
                    <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hideYChangeHandler} color="secondary"/>} label="Y" />
                    <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hideGChangeHandler} color="secondary"/>} label="G" />
                    <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hidePGChangeHandler} color="secondary"/>} label="PG" />
                    <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hidePG13ChangeHandler} color="secondary"/>} label="PG-13" />
                    <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hideRChangeHandler} color="secondary"/>} label="R" />
                    
                    
                </FormGroup> */}
             

                <h2>Search</h2>
                <Input style={{color: "white", width: "45%"}} placeholder="Type Search Term" id="inputSearch" onChange={this.props.setSearchInput} />
                {/* <input id="inputSearch" onChange={this.props.setSearchInput}></input>
                <button onClick={this.props.search}>Search</button> */}
                <br/>
                {/* <button onClick={this.props.search}>Search</button> */}
                
                <br/>

                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SearchIcon />}
                    onClick={this.props.search}
                >
                    Search
                </Button>

                <div>
                <h3>Hide the following</h3>

                {/* <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hideYChangeHandler} color="secondary"/>} label="Y" /> */}
                <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hideGChangeHandler} color="secondary"/>} label="G" />
                <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hidePGChangeHandler} color="secondary"/>} label="PG" />
                <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hidePG13ChangeHandler} color="secondary"/>} label="PG-13" />
                <FormControlLabel style={{padding: 10}} control={<Switch onChange={this.props.hideRChangeHandler} color="secondary"/>} label="R" />
                </div>
                


                <h3>Sort</h3>
                Oldest<input style={{margin: 20}} name="sort" type="radio" onClick={this.props.oldestGifs}/>
                Newest<input style={{margin: 20}} name="sort" type="radio" onClick={this.props.newestGifs}/>

                <br/>
                <br/>

                <div> {this.props.parsed} </div>

                {/* <CheckCircleIcon/>Search Complete */}
                {/* <h4>Search Complete</h4> */}
            <Alert severity="success">All {this.props.searchInput} GIFs that fit present parameters are displayed.</Alert>
                </ThemeProvider>
                
            </div>
        )
    }
    
}

// SearchFeatureView.propTypes = {
//     searchInput: PropTypes.string,
//     gifs: PropTypes.array
// };

// SearchFeatureView.defaultProps = {
//     gifs: []
// };


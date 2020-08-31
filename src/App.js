import React from 'react';
import { Cards, Chart, CountryPicker ,Clock,Toolbar, SideDrawer,Backdrop} from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/covid-19 (3).jpg';

// class based component
// state to save the informtaions {data , country}
class App extends React.Component {
    state = {
        data: {}, 
        country:'',  
        sideDrawerOpen: false
    }

    // making a request to fetch the data when componentDidMounts
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
        //console.log(" The Fetched Data : ",fetchedData)

        // handle countryChange
        // get the country as a parameter and making a request to fetch data API
        handleCountryChange = async (country) => {
           
            const fetchedData = await fetchData(country);
           
            //after fetch the data set the state
            this.setState({ data: fetchedData , country : country });
             
        }
     // cards 
    // country CountryPicker
    //chart
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
      };
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
      };
    render() {
        const { data , country } = this.state;
        let backdrop;

        if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div style={{height:'100%'}} className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}       
                <Clock/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
                <span className={styles.cp}> &copy; Copyright 2020 Mark Wahba.  All rights reserved. </span>
            </div>
        );
    }
}

export default App;
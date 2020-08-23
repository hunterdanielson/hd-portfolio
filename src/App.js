import React, { Component } from 'react';
import './App.css';
import data from './resumeData.json'
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
// import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: {}
    };

  }

  getResumeData(){
    this.setState({resumeData: data});
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;

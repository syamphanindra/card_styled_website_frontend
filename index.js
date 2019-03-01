import  React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Search_Box from './src/search_box';
import _ from 'lodash';
import WikiArea from './src/wikiarea';
import ContentCard from './src/content-card';
import HeaderDropdown from './src/header_dropdown';




 class App  extends Component
{
  constructor(props)
  {
    super(props);
    this.expandDiv = this.expandDiv.bind(this);
    this.state={result:null,total_ui_cards:50,sort_by: "rank"};
    fetch(`http://localhost:3001/api/spotify/`)
    .then(response => response.json())
    .then(data => {this.setState({ result: data });});
    // console.log("enter");
    //http://starlord.hackerearth.com/kickstarter
    // console.log(this.state.result);
  };

  ProjectJson() {
    fetch(`http://localhost:3001/api/spotify/`)
    .then(response => response.json())
    .then(data => {this.setState({ result: data });});
  }

  changeQuery(query)
  {


//www.yoursite.com?myparam1={id1}&myparam2={id2}
    fetch(`http://localhost:3001/api/spotify/filters/search?name=${query}`)
    .then(response => response.json())
    .then(data => {this.setState({ result: data });});
    //http://starlord.hackerearth.com/kickstarter
    // this.setState({result:data});
    // this.weatherJSON();
    // console.log(this.state);
  }
  changeSort(data){
    console.log(data[1].rank+"ffi");
    this.setState({result:data});
  }
  expandDiv(){
    console.log("inside index");
  }
  render(){
    var item_to_shows_on_ui;
    var current_sort_of_ui_cards;
    if (this.state.result !=null){

    item_to_shows_on_ui  =this.state.result.slice(0,Math.min(50,this.state.result.length));
    current_sort_of_ui_cards = this.state.sort_by;

  }
    else {
      item_to_shows_on_ui = null;
    }
    const changeQue =(query) => {this.changeQuery(query)};
    const changeCardSort = (data)=> {this.changeSort(data)}
  return (<div className="whole-container">
    <div className = "whole-Header">
    <div className="mainheading">SPOTIFY</div>
    <div className="search-div">

      <Search_Box onQuery= {changeQue} />
  </div>
  <div className="sort_dd">
  <HeaderDropdown sortby ={current_sort_of_ui_cards} onSort={changeCardSort} currentCards = {this.state}/>
  </div>
    </div>
    <div className="parent_container_cards">
      <WikiArea result={item_to_shows_on_ui} expandDiv={this.expandDiv}/>
  </div>

    </div>

  );
  }
};


ReactDOM.render( <App />, document.querySelector('.container'));

import React,{Component} from 'react';

class  Search_Box extends Component
{
    constructor(props)
    {
        super(props);

    }
    render()
    {
      return ( <p><h2 className="searchheading">Search</h2><input type = "text"
       placeholder=" Search your Item"
       dir="auto"
       className="searchbox" onKeyPress ={event => this.onInputChange(event) }
       type="text"  /></p>);
       // <input type="text" class="search-box typeahead tt-input"
       //    placeholder="Search for Movies, Events, Plays  and Sports" autocomplete="off" spellcheck="false"
       //    dir="auto" style="position: relative; vertical-align: top; background-color: transparent;">
    }
    onInputChange(event)
    {

        if(event.key=='Enter')
        this.props.onQuery(event.target.value);


    }

};

export default Search_Box;

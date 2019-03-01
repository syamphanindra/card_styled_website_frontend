import React,{Component} from 'react';
import ContentCard from './content-card';
class  WikiArea extends Component
{

    constructor(props)
    {
        super(props);
        this.expandDiv = this.expandDiv.bind(this);
    }
    expandDiv(event){
      console.log("enter")
    }

    render()
    {


            if(this.props.result!=null)
      {

        return this.props.result.map(function(val,index){
          if(val!=null){
          
          return (


            <ContentCard result = {val} index={index}/>

          );
         }
       },this);
      }
      else {
        return <div></div>;
      }
    }
    // onKeyPress ={event => this.onInputChange(event)
    //console.log(event.currentTarget.id);this.viewMore.bind(this, attributeId)


};


export default WikiArea;
// <div className="panel panel-default card-background" key={val["s.no"]} id={val["s.no"]}
//  onMouseDown = {event => {this.expandDiv.bind(this)}}>
//   <p>{val["amt.pledged"]}</p>
//   <p>{val.blurb}</p>
//  </div>

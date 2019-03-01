import React,{Component} from 'react';
import Select from 'react-select';

const options = [
  { value: 'rank', label: 'rank' },
  { value: 'name', label: 'name' },
  { value: 'artists', label: 'artists' }
];

class HeaderDropdown extends Component {
  constructor(props)
  {
      super(props);

  }
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    var array_to_sort = this.props.currentCards.result;
    var sorttype = selectedOption.value;
    if(sorttype=="rank"){
      array_to_sort.sort((a, b)=> {
      var textA = a[sorttype];
      var textB = b[sorttype];
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    }
    else{
    array_to_sort.sort((a, b)=> {
    var textA = a[sorttype].toUpperCase();
    var textB = b[sorttype].toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
}
    console.log(array_to_sort[1].rank,"ffi");
    this.props.onSort(array_to_sort);
  }
  render() {
    const { selectedOption } = this.state;
    if(this.props.sortby!=null)
{
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        placeholder={"Select Sort By"}
      />
    );
  }
  else{
    return (<div></div>);
  }
}
}

export default HeaderDropdown;
//  this.props.sortby.map(function(val,index){
//    if(val!=null){
//
//      console.log(val,index);
//   }
// },this);
// console.log(array_to_sort instanceof Array);
// console.log(array_to_sort[0].rank+"ff");
//  this.props.currentCards.map(function(val,index){
//    if(val!=null){
//
//      console.log(val,index);
//   }
// },this);

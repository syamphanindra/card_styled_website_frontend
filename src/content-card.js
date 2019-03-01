import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,CardTitle, CardSubtitle } from 'reactstrap';

  const ContentCard = (props) => {
    // console.log(props);
    // console.log("-----------");
    var shortcut_name = props.result.name.substring(0,20);
    if(props.result.name.length>20){

      shortcut_name= shortcut_name+" ....";
    }
  return (
      <Card className="card-outline">
      <CardBody className="card-body">
           <h1 className="card-body-heading"><CardTitle>{shortcut_name}</CardTitle></h1>
           <div className="card-sub-body">
           <h3><CardSubtitle ><label> Artist:  </label>{" "+props.result.artists}</CardSubtitle> </h3>
           <h3><CardSubtitle><label> Rank: </label>{" "+props.result.rank}</CardSubtitle></h3>
            </div>
      </CardBody>
      </Card>
 );
};
export default ContentCard;

// return (
//     <Card className="card-outline">
//     <CardBody>
//          <CardTitle>{props.result.artists}</CardTitle>
//          <h5>Rank:</h5> <CardSubtitle>{props.result.rank}</CardSubtitle>
//          <CardImg  className = "card-outline-image" src="https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=ti" alt="Card image cap"/>
//        <CardText><CardLink href="#">Card Link</CardLink></CardText>
//     </CardBody>
//     </Card>
// );

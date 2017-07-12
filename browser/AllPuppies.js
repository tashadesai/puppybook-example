import React from 'react';

export default class AllPuppies extends React.Component {

  componentDidMount() {
    const hardCodedData = [
      { id: 1, name: 'Cody' },
      { id: 2, name: 'Ben' },
      { id: 3, name: 'Bubba' }
    ];

    this.props.getAllPuppies(hardCodedData);
  }

  render() {
    return (
      <div>
        <ul className="list-unstyled">
          {
            this.props.allPuppies && this.props.allPuppies.map(puppy => {
            return (<li key={puppy.id}><a href="#">{puppy.name}</a></li>);
          })}
        </ul>
      </div>
    )
  }
}

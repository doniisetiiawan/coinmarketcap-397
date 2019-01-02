import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Notes.css';

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: 1,
          title: 'My note 1',
        },
        {
          id: 2,
          title: 'My note 2',
        },
        {
          id: 3,
          title: 'My note 3',
        },
      ],
    };
  }

  renderNotes = notes => (
    <ul>
      {notes.map((note, key) => (
        <li key={key}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );

  render() {
    console.log(this.props);

    const { match: { params: { noteId } } } = this.props;
    const { notes } = this.state;

    let selectedNote = false;

    if (noteId > 0) {
      selectedNote = notes.filter(
        note => note.id === Number(noteId),
      );
    }

    return (
      <div className="Notes">
        <h1>Notes</h1>
        {this.renderNotes(selectedNote || notes)}
      </div>
    );
  }
}

index.propTypes = {
  match: PropTypes.shape(PropTypes.object),
};

export default index;
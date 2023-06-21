import React, { useState } from 'react';
import { Card, Button, TextField } from '@mui/material';

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputDescription, setInputDescription] = useState('');
    const [inputErrorMessage, setInputErrorMessage] = useState('');
    const [descErrorMessage, setDescErrorMessage] = useState('');

    const handleTitleChange = (event) => {
        setInputTitle(event.target.value);
        if (event.target.value.length >= 10) {
            setDescErrorMessage('')
        }
    };

    const handleDescriptionChange = (event) => {
        setInputDescription(event.target.value);
    };

    const handleAddNote = () => {
        if (inputTitle.trim() === '') {
            setInputErrorMessage('Title is required');
            return;
        }

        if (inputTitle.length < 10 && inputDescription.trim() === '') {
            setDescErrorMessage('Description is required');
            return;
        }

        if (notes.some((note) => note.title === inputTitle)) {
            setInputErrorMessage('A note with the same title already exists');
            return;
        }

        const newNote = {
            title: inputTitle,
            description: inputDescription,
        };

        setNotes([...notes, newNote]);
        setInputTitle('');
        setInputDescription('');
        setInputErrorMessage('');
    };

    const handleEditNote = (index) => {
        const noteToEdit = notes[index];
        setInputTitle(noteToEdit.title);
        setInputDescription(noteToEdit.description);
        setNotes(notes.filter((_, i) => i !== index));
    };

    const handleDeleteNote = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Note Taking App</h1>
            <div>
                <TextField
                    label="Title"
                    value={inputTitle}
                    onChange={handleTitleChange}
                    error={inputErrorMessage !== ''}
                    helperText={inputErrorMessage}
                    style={{ marginBottom: '10px', padding: '10px' }}
                />
            </div>
            <div>
                <TextField
                    label="Description"
                    value={inputDescription}
                    onChange={handleDescriptionChange}
                    style={{ marginBottom: '10px', padding: '10px', marginTop: "10px" }}
                    required={inputTitle.length < 10}
                    helperText={descErrorMessage}
                    error={descErrorMessage !== ''}
                />
            </div>
            <Button variant="contained" color="primary" onClick={handleAddNote} style={{ marginTop: "10px", marginLeft: '10px' }} >
                Add Note
            </Button>

            <div style={{ marginTop: '20px' }}>
                {notes.map((note, index) => (
                    <Card key={index} style={{ marginBottom: '10px', padding: '10px' }}>
                        <h3>{note.title}</h3>
                        <p>{note.description}</p>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => handleEditNote(index)}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => handleDeleteNote(index)}
                            style={{ marginLeft: "10px" }}
                        >
                            Delete
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default NoteApp;

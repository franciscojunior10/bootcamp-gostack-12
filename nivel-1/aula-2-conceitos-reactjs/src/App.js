import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header';

import api from './services/api';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects').then(res => {
            setProjects(res.data);
        });

    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`]);
        const res = await api.post('/projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: "Francisco júnior"
        });

        const project = res.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Login" />

            <ul>
                {projects.map(project => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;
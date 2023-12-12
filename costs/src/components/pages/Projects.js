import Container from '../nav/Container'
import Message from '../nav/Message'
import { useLocation } from 'react-router-dom'
import DefaultButton from '../Buttons/DefaultButton'
import styles from './Projects.module.css'
import CardProject from '../nav/CardProjects'
import { useState, useEffect } from 'react'
import Loading from '../nav/Loading'

function Projects(props) {
    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const location = useLocation()

    let message = ''

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(projects.filter((project) => project.id !== id))
            alert('Projeto removido com sucesso')
        }
        )
        .catch((err) => console.log(err))
    }

    if (location.state) {
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{
        fetch('http://localhost:5000/projects',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
        },200)
    },[] )

    return(
        <div className={styles.dashboarContainer}>
            <div className={styles.dashboardTitle}>
                <h1>
                Meus Projetos
                </h1>

                <DefaultButton to='../newproject' text='Novo projeto'/>
            </div>
            {message && <Message msg={message} type="success"/>}

            <Container>
                <div className={styles.cardProject}>
                    {projects.length > 0 &&
                        projects.map((project)=>
                        
                           <CardProject 
                           key={project.id}
                           name={project.nome} 
                           category={project.category.name} 
                           id={project.id}
                           orcamento = {project.orcamento}
                           handleRemove={removeProject}
                           ></CardProject>
                        )
                    
                    }      
                </div>
                {!removeLoading && <Loading/>}
                {removeLoading && projects.length === 0 && (
                    <p>Nao há projetos cadastrados</p>
                )}
            </Container>
        </div>
        
       
       
    )

}

export default Projects
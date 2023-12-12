import Container from "../nav/Container";
import ProjectForm from "../Buttons/ProjectForm";
import {useNavigate} from 'react-router-dom';

function NewProject() {
    //Funciona como redirecionador caso a promessa seja cumprida
    const navigate = useNavigate()

    //cria o metodo de inserção no db
    function createPost(project){
        //initialize cost and services para ser adcionado depois
        project.cost=0
        project.services=[]
        
        //fetch("url",{method: 'metodo', headers: 'content-type', body: JSON.stringify(project)})

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            //converte js para JSON
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
              //redirect
              navigate("/projetos", { state: { message: "Projeto criado com sucesso!" } });
        } )
        .catch((err) => console.log(err))
      
    }

      

    
    return(
        <Container>
            <ProjectForm handleSubmit={createPost} action="Criar Projeto"/>
        </Container>
    )
    
}

export default NewProject
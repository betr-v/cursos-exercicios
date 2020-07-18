import api from './api';
class App {
    constructor (){
        this.repositories = [];

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.getElementById('input-repository');
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers();
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event); 
    }

  async  addRepository(event){
        event.preventDefault();
        const repoInput = this.inputEl.value;
     
        if(repoInput.length === 0){
            return;
        }
        console.log(repoInput);

        const response = await api.get(`/repos/${repoInput}`);

        console.log(response)
        this.repositories.push({
            name: 'rocketset.com.br',
            descrition: 'Tire a sua ideia do papel e dê vida à sua startup',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br'
        });
        this.render();
    }
    render(){
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.descriptionEl))

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank')
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        })
    }
}

new App();
# Calculadora
Projeto para aprender conceitos e arquitetura do Angular 13

![alt text](https://github.com/acebeR/angular13/blob/main/calculadora/imgs/telas.gif?raw=true)

# Anotações
# Criar um projeto novo
- ng new calculadora
- Entrar na pasta -> cd calculadora
- Rodar projeto -> ng serve

# Para criar um modulo 
* ng g module calculadora/calculadora   (Sempre deixar .module)
* Ao adicionar um arquivo index colocando export * from "./calculadora.module.module", é possivel diminuir lá no app.modules o nome deixando mais bonito.

# Para criar um componente
ng g component calculadora/calculadora -> para criar os arquivos com o nome calculadora, mas depois mudar a pasta para components.
# Para criar um serviço
ng g service calculadora/services/calculadora
# Add bootstrap
npm install --save bootstrap@3 

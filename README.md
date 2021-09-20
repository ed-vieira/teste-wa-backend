
## Descrição

  Tecnologias
   <p>Front-end</p>
   <ul>
     <li>React</li>
     <li>Appolo Client - (GraphQl)</li>
     <li>Docker / Docker-compose</li>
     <li>Template: Paper Dashboard React</li>
   </ul> 

   <p> Back-end</p> 
     <ul>
     <li>Framework NodeJs: NestJs</li>
     <li>Banco de dados: Postgres</li>
     <li>Docker / Docker-compose</li>
   </ul> 

## Requisitos
  <p>preparado para ser executado utilizando <u>Linux</u> como sistema operacional
  necessário ter <u>docker</u> e <u>docker-compose</u> instalados
  </p>



## Clonar o projeto (back-end)

```bash
$ git clone git@github.com:ed-vieira/teste-wa-backend.git
```

## Clonar o projeto (front-end)

```bash
$ git clone git@github.com:ed-vieira/teste-wa-frontend.git
```


## Instalação
  <p> Para ser executado corretamente é necessário executar os comandos necessários na ordem 
  correta  </p>
  <p> Para auxiliar nesta tarefa é utilizado o Makefile para simplificar e organizar os    comandos, de forma que comandos mais complexos ou que precisam ser executados em uma ordem determinada possam ser executados de maneira correta. 
  </p> 

 <p> Para executar o projeto pela primeira vez execute o comando: </p>

```bash
$ make init
```
<p> Este comando ira prepara os arquivos de configuração da maneira necessária</p>
<p>depois executara os comandos do docker para preparar tudo excutar a migration e o seeder</p>







## License

[MIT licensed](LICENSE).

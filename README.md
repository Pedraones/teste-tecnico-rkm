# teste-tecnico-rkm
---
## Pré requisitos
Os pré requisitos que aqui serão listados são baseados nas versões das stacks utilizadas para o desenvolvimento do desafio téncico
- PHP 8.3.x (cli) junto do pacote 'mbstring', é necessário descomentá-la no arquivo `php.ini`;

Caso o SO utilizado seja baseado em Ubuntu e o php já está instalado, sem a extensão 'mbstring', é possível instalá-la executando no terminal `sudo apt install php-mbstring`

- Laravel 13.35
- Mariadb 15.1
- Extensão "Live Server" no VScode para execução do frontend
- Criar uma base dados mariadb para a interação da aplicação com o banco
- Configurar as variáveis de ambiente: 
1. Adicionar um arquivo `.env` em /teste-tecnico-rkm/api-teste-tecnico/
2. Copiar o conteúdo de /teste-tecnico-rkm/api-teste-tecnico/**.env.example** para /teste-tecnico-rkm/api-teste-tecnico/**.env**
3. DB_CONNECTION deve ser igual a 'mariadb' (sem as aspas);
4. Descomentar DB_HOST e colocar o valor do host que o mariadb será executado na máquina
5. Descomentar DB_PORT e definir o valor da porta em que o serviço mariadb é executado na máquina
6. Descomentar DB_DATABASE e inserir o nome da base de dados criada para armazenar os dados da aplicação
7. Descomentar DB_USERNAME e colocar o nome do usuário do computador responsável por inicar a conexão com o banco de dados
8. Descomentar DB_PASSWORD e definir a senha que o usário do computador responsável por iniciar o serviço mariadb deve utilizar para ter permissão e efetivamente se conectador com a base de dados
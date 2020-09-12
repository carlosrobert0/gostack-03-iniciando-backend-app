# Recuperacao de senha

**RF**

- O usuario deve poder recuperar sua senha informando o seu e-mail
- O usuario deve receber um email com instrucoes de recuperacao de senha
- O usuario deve poder resetar sua senha

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev
- Utilizar Amazon SES para envios em producao
- O envio de e-mails deve acontecer em segundo plano (background job)

**RN**

- O link enviado por email para resetar senha deve expirar em 2h
- O usuario precisa confirmar a nova senha ao resetar sua senha

# Atualizacao do perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha

**RN**

- O usuario nao pode alterar seu email para um email ja utilizado
- Para atualizar sua senha o usuario deve informar a senha antiga
- Para atualizar sua senha o usuario precisa confirmar a nova senha

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico 
- O prestador deve receber uma notificacao sempre que houver um novo agendamento
- O prestador deve poder visualizar as notificacoes nao lidas

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache
- As notificacoes do prestador devem ser armazenados no MongoDB
- As notificacoes do prestador devem ser enviadas em tempo real utilizando Socket.io

**RN**

- A notificacao deve ter um status de lida ou nao lida para que o prestador possa controlar

# Agendamento de servicos

**RF**

- O usuario deve poder listar todos prestadores de servico cadastrados
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador
- O usuario deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

- Cada agendamento deve durar uma hora exatamente
- Os agendamentos devem estar disponiveis entre 8h as 18h (Primeiro as 8h, ultimo as 18h)
- O usuario nem pode agendar em um horario ja ocupado
- O usuario nao pode agendar em um horario que ja passou
- O usuario nao pode agendar servicos consigo mesmo
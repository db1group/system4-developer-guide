# Boas Práticas de Code Review

### IMPORTANTE: VOCÊ É CO-RESPONSÁVEL PELO CÓDIGO QUE APROVA, ENTÃO SEJA RESPONSÁVEL!

#### Abaixo listamos 13 dicas que vão melhorar seu processo de code review.

1. **Nome do Arquivo**:

   Certifique-se de que o nome do arquivo esteja de acordo com o padrão estabelecido. O nome deve ser descritivo e refletir o conteúdo do arquivo. Evite nomes genéricos, como "UserService". Atente-se ao padrão de nomenclatura de arquivos descritos no developer guide.

2. **Nomenclatura da Branch:**

   Verifique se a nomenclatura da branch segue o padrão definido pela equipe. A nomenclatura da branch deve ser consistente e informativa. Geralmente, o nome da branch deve ser curto, descritivo e relacionado à tarefa ou à funcionalidade que está sendo implementada. Evite nomes confusos ou pouco claros.
   Cheque o nosso GitFlow para entender mais sobre a nomenclatura de branchs

3. **Comentários no Código:**

   Certifique-se de que o código não contenha comentários, exceto em casos extremos. O Código deve ser sempre auto explicativo.
   Evite comentários óbvios que apenas repitam o que o código está fazendo.

4. **Estilo de Codificação:**

   Verifique se o código segue o estilo de codificação estabelecido pela equipe. Isso inclui a formatação adequada de código, o uso consistente de espaços ou tabs, a indentação correta e a disposição dos elementos no código. O código deve ser legível e seguir as diretrizes definidas.

5. **Testes Unitários:**

   Verifique se o código inclui testes unitários apropriados para cobrir as funcionalidades implementadas. Testes unitários ajudam a garantir a robustez do código e a identificar problemas mais cedo no processo de desenvolvimento.

6. **Controle de Erros:**

   Verifique se o código inclui tratamento adequado de erros e exceções. Isso ajuda a garantir que o software seja resiliente e capaz de lidar com situações inesperadas de forma adequada.

7. **Dependências Externas:**

   Certifique-se de que as dependências externas sejam gerenciadas corretamente. Isso inclui a inclusão de bibliotecas externas de maneira apropriada e a documentação de quaisquer requisitos de configuração. Jamais devemos utilizar dependencias externas dentro de modelos de domínio, sempre através de abstrações.

8. **Segurança:**

   Verifique se o código não contém vulnerabilidades de segurança conhecidas. Isso é especialmente importante em projetos que lidam com informações sensíveis ou em sistemas expostos à Internet. O sonar pode ajudar a identificar isso.

9. **Documentação:**

   Em caso de mudanças estruturais, verifique se foi realizada a documentação correta da arquitetura e atualizações dos desenhos de arquitetura existentes.

10. **Teste Manual:**

    Realize testes manuais para garantir que as funcionalidades implementadas funcionem conforme o esperado. Isso pode incluir testes de interface do usuário, fluxos de usuário e cenários específicos.

11. **Performance:**

    Verifique se o código foi otimizado para desempenho sempre que necessário. Identifique possíveis gargalos de desempenho e sugira melhorias, se aplicável.

12. **Responsabilidade:**

    Lembre-se de que a revisão de código é uma responsabilidade compartilhada entre todos os membros da equipe. Seja diligente ao revisar o código de seus colegas e esteja disposto a receber feedback de forma construtiva.

13. **Comunicação:**

    Mantenha uma comunicação aberta e respeitosa durante o processo de revisão de código. Esclareça dúvidas e forneça explicações quando necessário.

Lembrando que essas boas práticas de revisão de código são apenas um guia inicial. Nós podemos e devemos personalizar e expandir essas diretrizes de tempos em tempos para atender às necessidades específicas do projeto. O objetivo principal é garantir que o código seja consistente, seguro, eficiente e de alta qualidade.

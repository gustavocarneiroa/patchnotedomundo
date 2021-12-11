window.addEventListener("load", function (event) {
    new Vue({
        el: '#app',
        data: {
            newAttribute: {
                status: '',
                attribute: '',
                before: '',
                after: '',
                creating: false
            },
            lastId: 0,
            statuses: {
                'new': 'Novo',
                'updated': 'Atualizado',
                'removed': 'Removido'
            },
            attributes: [],
            imgUrl: 'https://picsum.photos/120/120',
            characterName: '',
            summary: '',
            quote: ``,
            standartData: {
                characterName: 'PATCH 1.3 do GERADOR DE PATCH NOTES DO MUNDO',
                summary: 'Para começar um novo, basta começar a digitar nos dados. Altere tudo nas configurações: link da foto, este sumário e até a descrição abaixo.',
                quote: `Projeto em teste, feito para o grupo Patch Note do Mundo. Qualquer alteração pode solicitar diretamente para mim <a href="https://www.facebook.com/gustavo.almeida.589583/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0"> usando este link aqui ;) </a>. Sabendo ou não sobre programação Web, estou aberto a críticas e sugestões.`,
                attributes: [
                    {
                        status: 'removed',
                        attribute: 'DADOS PADRÕES CADASTRADOS',
                        before: '',
                        after: 'Agora você não precisa mais excluir o <strong>Sumário</strong> e <strong>Entre aspas</strong> para cadastrar o seu. Ainda estou deixando a imagem padrão para não bugar o sistema, é isto.',

                    },
                    {
                        status: 'updated',
                        attribute: 'CONTEMPLE O PODER',
                        before: 'Você não pode desfazer um ATRIBUTO cadastrado',
                        after: 'Você pode cancelar o atributo que você está digitando, ver os atributos cadastrados, mover a ordem em que eles se apresentam e exclui-los.'
                    },
                    {
                        status: 'new',
                        attribute: 'PARA MANDAR NO ZAP',
                        before: '',
                        after: 'O conteúdo dessa página também está acessível em formato de celular!',
                    },
                    {
                        status: 'updated',
                        attribute: 'OUDRI KANDA LARRAI',
                        before: 'O conteúdo dessa página está em línguas estranhas',
                        after: 'O conteúdo dessa página está em Português 🇧🇷',
                    }
                ]
            }
        },

        methods: {
            createId() {
                this.lastId = this.lastId + 1;
                return this.lastId;
            },
            startNewAttribute() {
                this.newAttribute.creating = true;
            },

            saveAttribute() {
                if (this.newAttribute.attribute == '' || this.newAttribute.after == '') return alert('Os campos "Novo Atributo" e "Depois" precisam obrigatoriamente serem preenchidos');
                this.attributes.push({ id: this.createId(), ...this.newAttribute });
                this.endAttribute()
            },

            clearNewAttribute() {
                this.newAttribute.attribute = ''
                this.newAttribute.status = ''
                this.newAttribute.before = ''
                this.newAttribute.after = ''
            },

            endAttribute() {
                this.newAttribute.creating = false;
                this.clearNewAttribute()
            },

            swapIndexes(from, to) {
                const fromArray = this.attributes[from];
                const toArray = this.attributes[to];

                this.$set(this.attributes, from, toArray);
                this.$set(this.attributes, to, fromArray);

                return
            },

            deleteIndex(index) {
                console.log(this.attributes.indexOf(index))
                return this.attributes.splice(this.attributes.indexOf(index), 1);
            }
        },
    })
});
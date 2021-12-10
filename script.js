window.addEventListener("load", function (event) {
    Vue.component('w-tinymce-vue', window['w-tinymce-vue'])
    new Vue({
        el: '#app',
        data: {
            newAttribute: {
                status: '',
                attribute: '',
                before: '',
                after: '',
            },
            statuses: {
                'new': 'Novo',
                'updated': 'Atualizado',
                'removed': 'Removido'
            },
            attributes: [],
            imgUrl: 'https://picsum.photos/120/120',
            characterName: 'Nome de teste',
            summary: 'Altere tudo nas configurações: link da foto, este sumário e até a descrição abaixo.',
            quote: `Projeto em teste, feito para o grupo Patch Note do Mundo. Qualquer alteração pode solicitar diretamente para mim <a href="https://www.facebook.com/gustavo.almeida.589583/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0"> usando este link aqui ;) </a>. Sabendo ou não sobre programação Web, estou aberto a críticas e sugestões.`
        },

        methods: {
            saveAttribute(){
                if(this.newAttribute.attribute == '' || this.newAttribute.attribute == '') return alert('Os campos "Novo Atributo" e "Depois" precisam obrigatoriamente serem preenchidos');
                this.attributes.push({...this.newAttribute});
                this.clearNewAttribute()
            },

            clearNewAttribute(){
                this.newAttribute.attribute = ''
                this.newAttribute.status = ''
                this.newAttribute.before = ''
                this.newAttribute.after = ''
            }
        }
    })
});
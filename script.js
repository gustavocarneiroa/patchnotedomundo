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
            characterName: 'Lorem Ipsum',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor vulputate velit, eu convallis leo eleifend vel. Ut ullamcorper lacinia accumsan.',
            quote: `Nulla sit amet nunc in ligula finibus facilisis. Donec vitae nulla pharetra, bibendum nisl non, pellentesque arcu. Aenean venenatis commodo diam, placerat dignissim libero bibendum ut. Donec efficitur id turpis eu pretium. Cras volutpat pulvinar venenatis. Curabitur viverra erat sit amet eros porttitor mattis. Donec venenatis semper urna vel egestas. Pellentesque id lectus lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac pulvinar odio, at accumsan odio.`
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
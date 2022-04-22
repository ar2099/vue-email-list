// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati. (modificato) 

var app = new Vue({
    el: '#tutto',
    data: {
        elencoMail: []
        
    },
    created(){
        
       for(i = 1; i <= 10; i++) {axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response)=> {
           
            this.elencoMail.push(response.data.response)
            
        })}
        console.log(this.elencoMail)
    },
    methods: {

    }
    
});
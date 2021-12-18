const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@email.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        getUser() {
            this.firstName = 'Samantha'
            this.lastName = 'Doe'
            this.email = 'samantha@email.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        }
    }
})

app.mount('#app');

//Original code (In the code block above, we're moving the code from the app.js file to the index.html file)
// const app = Vue.createApp({
//         template: '<h1>Hello {{firstName}}</h1>',
//         data() {
//             return {
//                 firstName: 'John',
//             }
//         }
//     });
    
// app.mount('#app');
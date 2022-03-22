Vue.createApp({
    data() {
        return {
            idea: {
                how_big: 0,
                founder_fit: 0,
                problem_solving: 0,
                new_insight: 0,
            }
        }
    }
    ,
    methods: {
        arrayMean(array) {
            return array.reduce((a, b) => parseInt(a) + parseInt(b), 0) / array.length;
        },
    }
    ,
    computed: {
        ideaOverallScore() {
            return this.arrayMean(Object.values(this.idea));
        }
    }
}).mount('#app')
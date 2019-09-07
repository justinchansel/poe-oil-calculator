export default {
    name: 'oil-result',
    template:
        `
<div class="col-lg-3 col-md-3 col-sm-4 m-1 p-1 pt-3 pb-0 text-center justify-content-center border">
    <div v-for="oil in oils" class="d-inline-block">
        <img @click="selectOil(oil)" height="45" class="btn btn-outline-info ml-1" :src="'https://web.poecdn.com/image/Art/2DItems/Currency/Oils/' + oil.replace(' ', '') + '.png?scale=1&w=1&h=1'"><br>
        <template v-if="showOils()">{{ oil.replace(' Oil', '') }}</template>
    </div>
    <hr>
    <span v-for="r in result">{{ r }}<br></span>
    <br>
</div>
`,
    props: {
        oils: Array,
        result: Array
    },
    created: function() {

    },
    data() {
        return {

        }
    },
    methods: {
        showOils: function() {
            return this.$parent.$data.showOilNames
        }
    },
}

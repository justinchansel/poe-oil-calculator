export default {
    name: 'oil-selections',
    template:
        `
<div class="starter-template">
    <div v-for="oil in oilOptions" class="d-inline-block">
        <img @click="selectOil(oil)" height="45" :class="getOilImgClass(oil)" :src="'https://web.poecdn.com/image/Art/2DItems/Currency/Oils/' + oil + 'Oil.png?scale=1&w=1&h=1'"><br>
        <template v-if="showOils()">{{ oil }}</template>
    </div>
</div>
`,
    props: {
        productInfo: Object
    },
    created: function() {

    },
    data() {
        return {
            oilSelections: [],
            oilOptions: ['Clear', 'Sepia', 'Amber', 'Verdant', 'Teal', 'Azure', 'Violet', 'Crimson', 'Black', 'Opalescent', 'Silver', 'Golden']
        }
    },
    methods: {
        getOilImgClass: function(oil) {
            return this.oilSelections.includes(oil) ? 'btn btn-info ml-1 mt-1' : 'btn btn-outline-info ml-1 mt-1'
        },
        selectOil: function(oil) {
            if(!(this.oilSelections.includes(oil)))
                this.oilSelections.push(oil);
            else
                this.oilSelections.splice(this.oilSelections.indexOf(oil), 1);
            this.$parent.updateOilPossibilities();
        },
        showOils: function() {
            return this.$parent.$data.showOilNames
        }
    },
}

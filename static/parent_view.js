export default {
    name: 'parent-view',
    template:
        `
<div class="text-center justify-content-center">
    <h1>Oil Calculator</h1>
    <div class="input-group text-center justify-content-center">
        <div class="input-group-prepend">
            <span class="input-group-text">Show Oil Names</span>
        </div>
        <div class="input-group-text">
            <input v-model="showOilNames" type="checkbox">
        </div>
    </div>
    <oil-selections ref="oilSelections"></oil-selections>
    <oil-data ref="oilData"></oil-data>
    <div class="row justify-content-center text-center">
        <oil-result v-for="op in oilPossibilities" :oils="op.items" :result="op.result"></oil-result>
    </div>
</div>
`,
    components: {
        oilSelections, oilData, oilResult
    },
    mounted: function() {
        console.log(this.$refs.oilData.oilData)
    },
    data() {
        return {
            oilPossibilities: [],
            showOilNames: false
        }
    },
    methods: {
        updateOilPossibilities: function() {
            let oilData = this.$refs.oilData.oilData;
            let oilSelections = this.$refs.oilSelections.oilSelections;
            let output = [];
            for(const d of oilData) {
                let count = 0;
                let oilInputs = d['items'];
                for(const oilSelection of oilSelections) {
                    for(const oilInput of oilInputs)
                        if(oilInput.indexOf(oilSelection) !== -1)
                            count++;
                }
                if(count > 2)
                    output.push(d);
            }
            this.oilPossibilities = output
        }
    }
}
import oilSelections from '/poe-oil-calculator/static/oil_selections.js';
import oilData from '/poe-oil-calculator/static/oil_data.js'
import oilResult from '/poe-oil-calculator/static/oil_result.js'
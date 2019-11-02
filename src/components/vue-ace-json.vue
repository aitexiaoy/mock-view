<template>
    <div class="vue-ace-json" ref='ace-editor'></div>
</template>

<script>
import ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/mode/json'
import 'brace/theme/tomorrow'
import 'brace/snippets/json'

const aceOptions = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
    showLineNumbers: true,
    tabSize: 4,
}
let editor = null
const lang = 'json'
const theme = 'tomorrow'

export default {
    name: 'VueAceJson',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            currentValue: '',
        }
    },
    mounted() {
        editor = ace.edit(this.$refs['ace-editor'])
        editor.$blockScrolling = true
        editor.getSession().setMode(`ace/mode/${lang}`)
        editor.setTheme(`ace/theme/${theme}`)
        if (this.currentValue) {
            editor.setValue(this.value, 1)
        }

        editor.setOptions(aceOptions)

        editor.on('change', () => {
            const content = editor.getValue()
            this.currentValue = content
            this.$emit('input', content)
        })

    },
    methods: {

    },

    watch: {
        value: function (newVal) {
            if (newVal !== this.currentValue) {
                this.currentValue = newVal
                if (editor) {
                    editor.setValue(newVal, 1)
                }
            }
        }
    },

}
</script>

<style lang="scss" scoped>
.vue-ace-json {
    width: 100%;
    height: 100%;
}
</style>

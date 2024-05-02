import pluginVue from 'eslint-plugin-vue'
export default [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'no-console': 'off',
      'vue/max-attributes-per-line': [
        3,
        {
          singleline: 20,
          multiline: {
            max: 2,
            allowFirstLine: false,
          },
        },
      ],
    },
  },
]

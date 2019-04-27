import MaterialUIIcon from '../views/icons/materialUI'

export default {
  plugin: 'ReacticoonDev',
  description: 'Material ui on Reacticoon dev tools',
  config: {
    devDashboard: {
      sections: [
        {
          label: 'Material UI',
          icon: MaterialUIIcon,
          route: 'MATERIAL_UI_DASHBOARD',
        },
      ],
    },
  },
}

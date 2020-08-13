import { getPluginConfig } from 'reacticoon/plugin'
import { ReacticoonEvents, createEventListener } from 'reacticoon/event'
import invariant from 'invariant'
import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'

import { getStore } from 'reacticoon/store'
import { registerForm } from '../modules/form/actions'

const onAppInit = createEventListener(ReacticoonEvents.ON_APP_INIT, () => {
  const config = getPluginConfig('reacticoon-plugin-form')

  if (FEATURE_REACTICOON_HEAVY_DEBUG) {
    console.info('[reacticoon-plugin-form] config: ', config)
  }

  invariant(!isNil(config.forms), `[reacticoon-plugin-form] Missing 'forms' configuration`)

  // TODO: verify there is no duplicate formType

  config.forms.forEach(formConfig => {
    const { form, options } = formConfig

    invariant(
      isNil(form.default) || !isFunction(form.getDefault),
      `[reacticoon-plugin-form] form ${form.type} default must be a function named getDefault`
    )

    invariant(!isNil(form.type), `[reacticoon-plugin-form] 'type' is required`)

    const formState = {
      formData: form.getDefault(),
      options,
    }

    getStore().dispatch(registerForm(form.type, formState))
  })
})

export default onAppInit

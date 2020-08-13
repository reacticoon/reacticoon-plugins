import { ReacticoonEvents, createEventListener } from 'reacticoon/event'
import { getPluginConfig } from 'reacticoon/plugin'
import invariant from 'invariant'
import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'

import { getStore } from 'reacticoon/store'
import { registerForm } from '../modules/form/actions'

// Handle the register form event.
// This event allows to register forms dinamically from plugins
const onRegisterForm = createEventListener(ReacticoonEvents.REGISTER_FORM, event => {
  // TODO:
  const formConfig = event.formConfig

  if (FEATURE_REACTICOON_HEAVY_DEBUG) {
    console.info('[reacticoon-plugin-form] register form: ', formConfig)
  }

  invariant(!isNil(formConfig), `[reacticoon-plugin-form] Missing 'formConfig' configuration`)

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

  const config = getPluginConfig('reacticoon-plugin-form')
  // TODO: update config with the registered form
})

export default onRegisterForm

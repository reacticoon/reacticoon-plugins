import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'
import { getPluginConfig } from 'reacticoon/plugin'
import invariant from 'invariant'
import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'

import { __DEV__ } from 'reacticoon/environment'
import { getStore } from 'reacticoon/store'
import { registerForm } from '../modules/form/actions'

// Handle the register form event.
// This event allows to register forms dinamically from plugins
const onRegisterForm = createEventHandler(ReacticoonEvents.REGISTER_FORM, event => {
  // TODO:
  const formConfig = event.formConfig

  if (__DEV__) {
    console.info('[ReacticoonPluginForm] register form: ', formConfig)
  }

  invariant(!isNil(formConfig), `[ReacticoonPluginForm] Missing 'formConfig' configuration`)

  const { form, options } = formConfig

  invariant(
    isNil(form.default) || !isFunction(form.getDefault),
    `[ReacticoonPluginForm] form ${form.type} default must be a function named getDefault`
  )

  invariant(!isNil(form.type), `[ReacticoonPluginForm] 'type' is required`)

  const formState = {
    formData: form.getDefault(),
    options,
  }

  getStore().dispatch(registerForm(form.type, formState))

  const config = getPluginConfig('ReacticoonPluginForm')
  // TODO: update config with the registered form
})

export default onRegisterForm

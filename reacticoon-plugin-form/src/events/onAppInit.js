import { getPluginConfig } from 'reacticoon/plugin'
import { ReacticoonEvents, createEventHandler } from 'reacticoon/event'
import invariant from 'invariant'
import isNil from 'lodash/isNil'
import isFunction from 'lodash/isFunction'

import { __DEV__ } from 'reacticoon/environment'
import { getStore } from 'reacticoon/store'
import { registerForm } from '../modules/form/actions'

const onAppInit = createEventHandler(ReacticoonEvents.ON_APP_INIT, () => {
  const config = getPluginConfig('ReacticoonPluginForm')

  if (__DEV__) {
    console.info('[ReacticoonPluginForm] config: ', config)
  }

  invariant(!isNil(config.forms), `[ReacticoonPluginForm] Missing 'forms' configuration`)

  // TODO: verify there is no duplicate formType

  config.forms.forEach(formConfig => {
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
  })
})

export default onAppInit

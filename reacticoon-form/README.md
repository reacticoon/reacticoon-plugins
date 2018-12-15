# reacticoon-form

Reacticoon plugin to handle form.

## Plugin configuration

```json
import reacticoonForm from '../plugins/reacticoon-form'

{
  plugin: reacticoonForm,
  config: {
    validator: validator,
    forms: [
      {
        form: TestForm,
        options: {

        }
      }
    ]
  }
}
```

### Validator

By default, use the Reacticoon validator from the `reacticoon-validation` plugin.

```json
import { reacticoonValidator } from '../plugins/reacticoon-validation'

{
  plugin: reacticoonForm,
  config: {
    validator: reacticoonValidator,
    forms: [
      {
        form: TestForm,
        options: {

        }
      }
    ]
  }
}
```

### `forms`

An array of the forms to register. This array contains your front from, that does not belong to a module.
A module should handle the registration of the forms by using the event `ReacticoonEvents.REGISTER_FORM`.
The registration event should be sent on the `onAppInit` event of the plugin.

#### `form`

Definition of the form.

A form is created via the `createForm` utility.

```js
import { createForm } from 'reacticoon-form'

const defaultData = {
  url: null,
  name: null,
}

// See 'reacticoon-validation' plugin
const validationRules = () => ({
  url: [
    [notEmpty, ''],
  ],
})

const bookmarkForm = createForm(
  'Bookmark::FORM::CREATE', // name of the form
  validationRules,
  defaultData,
)
```

#### `options`

Sometimes, you don't have access to the form code.
The `options` allows to define default options for the form.

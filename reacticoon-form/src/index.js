import { createPlugin } from "reacticoon/plugin";

import formModule from "./modules/form";

import onAppInit from "./events/onAppInit";
import onRegisterForm from "./events/onRegisterForm";

//
// Exports
//

export { default as createForm } from "./modules/form/createForm";
export { default as createFormCustomAction } from "./modules/form/createFormCustomAction";
export { default as WithEditionContainer } from "./modules/form/containers/WithEditionContainer";
export { default as withForm } from "./modules/form/containers/withForm";
export { default as withForms } from "./modules/form/containers/withForms";

//
//
//

const ReacticoonPluginForm = createPlugin({
  // The plugin name. Must be unique. All Reacticoon plugins have the 'Reacticoon' prefix.
  name: "reacticoon-form",
  // list of the modules that the plugin register.
  // optionnal.
  modules: [formModule],
  eventsHandler: [
    onAppInit,
    // Handle the register form event.
    // This event allows to register forms dinamically from plugins
    onRegisterForm
  ]
});

export default ReacticoonPluginForm;

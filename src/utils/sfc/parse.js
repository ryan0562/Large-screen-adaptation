import { genStyleInjectionCode } from "./styleInjection";
import { isEmpty, extend, generateId } from "./util";
import { addStylesClient } from "./style-loader/addStylesClient";



export const genComponent = async function (sfcDescriptor, errors,viewId) {
  let dynamicComponent = {};
  let demoComponent = {};
  const { template, script, styles, customBlocks } = sfcDescriptor;
  // errors
  if (errors && errors.length) {
    console.error(
      `Error compiling template:\n\n` +
      errors.map((e) => `  - ${e}`).join("\n") +
      "\n\n"
    );
  }

  const templateCode = template ? template.content.trim() : ``;
  let scriptCode = script ? script.content.trim() : ``;
  /* TODO */

  const styleCodes = await genStyleInjectionCode(styles, viewId);

  // script
  if (!isEmpty(scriptCode)) {
    let componentScript = {};
    scriptCode = scriptCode.replace(
      /export\s+default/,
      "componentScript ="
    );
    eval(scriptCode);
    // update component's content
    extend(demoComponent, componentScript);
  }

  // template
  // demoComponent.template = `<section id="${this.viewId}" class="result-box" >
  //   ${templateCode}
  // </section>`;
  demoComponent.template = templateCode;

  // style
  // this.stylesUpdateHandler(styleCodes);
  addStylesClient(viewId, styleCodes);

  // update dynamicComponent
  extend(dynamicComponent, {
    name: viewId,
    component: demoComponent,
  });

  return dynamicComponent

}
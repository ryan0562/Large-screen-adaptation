import { genStyleInjectionCode } from "./styleInjection";
import { isEmpty, extend } from "./util";
// import { addStylesClient } from "./style-loader/addStylesClient";



export const genComponent = async function (sfcDescriptor, errors, viewId) {
  let dynamicComponent = {};
  let demoComponent = {};
  const { template, script, styles, customBlocks } = sfcDescriptor;
  // errors
  if (errors && errors.length) {
    console.error(
      `${viewId}\n` +
      `Error compiling template:\n\n` +
      errors.map((e) => `  - ${e}`).join("\n") +
      "\n\n"
    );
  }

  const templateCode = template ? template.content.trim() : ``;
  demoComponent.template = templateCode;

  // script
  let scriptCode = script ? script.content.trim() : ``;
  if (!isEmpty(scriptCode)) {
    let componentScript = {};
    scriptCode = scriptCode.replace(
      /export\s+default/,
      "componentScript ="
    );
    eval(scriptCode);
    extend(demoComponent, componentScript);
  }


  // 冗余处理
  // addStylesClient(viewId, styleCodes);
  // 简易版
  const styleCodes = await genStyleInjectionCode(styles, viewId);
  styleCodes.forEach(item => {
    if (item.css) {
      const style = document.createElement("style");
      style.type = "text/css";
      style.setAttribute('moduleName', viewId)
      style.innerHTML = item.css;
      document.head.appendChild(style);
    }
  })



  // update dynamicComponent
  extend(dynamicComponent, {
    name: viewId,
    component: demoComponent,
  });

  return dynamicComponent

}
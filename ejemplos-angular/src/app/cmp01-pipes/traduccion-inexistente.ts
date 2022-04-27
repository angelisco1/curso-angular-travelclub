import { MissingTranslationHandler, MissingTranslationHandlerParams } from "@ngx-translate/core";

export class TraduccionInexistente implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    console.log(params)
    return 'Añade una traducción para: ' + params.key
  }
}
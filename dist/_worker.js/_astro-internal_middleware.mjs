globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_6KyTvw2W.mjs';
import './chunks/astro/server_QGPfR8QS.mjs';
import { s as sequence } from './chunks/index_b42jTdAb.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };

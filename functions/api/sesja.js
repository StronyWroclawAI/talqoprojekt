import { json, zalogowany } from '../_lib.js';
export async function onRequestGet({ request, env }) { return json({ zalogowany: await zalogowany(request, env) }); }

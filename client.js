_parseBody(error, body) {
  if (error) {
   return this._error(new errors.FatalError(error));
  }

  let data;
  try {
   data = JSON.parse(body.toString());
  } catch (parseError) {
   return this._error(new errors.ParseError(parseError.message));
  }

  return this.bot.processUpdate(data);
 }

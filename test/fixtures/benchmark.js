// Global Settings
exports.duration    = 2;
exports.concurrency = 1;
exports.delay       = 0;
exports.rampUp      = 0;

// Actions
exports.actions = [

  function(lastResponse, lastAction, state){
    var action = {
      "name":     "Blank Page",
      "hostname": "localhost",
      "path":     "/blank",
      "port":     8888,
      "method":   "GET"
    };
    if(state.remember){ throw "State was not cleared!" }
    state.remember = 5;
    return action;
  },
  
  function(lastResponse, lastAction, state){
    var action = {
      "name":     "Post Page",
      "hostname": "localhost",
      "path":     "/upload",
      "port":     8888,
      "method":   "POST",
      "params":   { say: 'hello', to: 'me' }
    };
    if(lastAction.path !== "/blank"){     throw "Last action was not passed properly!" }
    if(lastResponse.statusCode !== 200){  throw "Last response was not 200!" }
    return action;
  },
  
  // GET Query with Basic Auth
  function(lastResponse, lastAction, state){
    var action = {
      "name":     "Headers Page",
      "hostname": "localhost",
      "path":     "/types",
      "port":     8888,
      "method":   "GET",
      "headers":  { "Content-Type": "application/json" }
    };
    if(state.remember !== 5){ throw "State of 5 was not remembered!" }
    delete state.remember;
    return action;
  }
];
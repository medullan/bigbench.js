var config         = require("../config/config"),
    redisdb        = require("redis"),
    color          = require('../modules/color'),
    logger         = require('../modules/logger'),
    redis          = redisdb.createClient(config.redis.port, config.redis.host),
    redisForEvents = redisdb.createClient(config.redis.port, config.redis.host);

// Authenticate at Redis
if(config.redis.password){
  redis.auth(config.redis.password);
  redisForEvents.auth(config.redis.password);
}

// Ensures that all storage connections are made
exports.open = function(callback){
  
  // Log disconnection, etc.
  redis.on("error",           function(error){ logger.print("Redis", error, color.red); });
  redisForEvents.on("error",  function(error){ logger.print("RedisForEvents", error, color.red); });
  
  // Callback
  callback();
}

exports.redis = redis;
exports.redisForEvents = redisForEvents;
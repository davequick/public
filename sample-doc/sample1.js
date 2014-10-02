/**
 * A class to announce important things or something
 * @param {string} greeting is the announcement type
 * @constructor
 */
function MyAnnouncer(greeting){
  this.greeting = greeting;

  /**
   * This method will announce to the name provided
   * @param {string} name
   * @returns {string}
   */
  function announce(name){
    return this.greeting + name;
  }
  this.announce = announce;
}


module.exports = MyAnnouncer;
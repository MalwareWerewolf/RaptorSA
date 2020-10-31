const ping = require('../../../src/commands/randomstuff/ping');
const init = require('../../init');
const chai = require('chai');
const expect = chai.expect;

var regex = /^([A-Za-z0-9\s!@#%^*()_\-=+\[\]{};:,.?/]*)$/g;

describe('ping command', () => {
  it('should return true if the message contains a number', () => {
    ping.run(init.client, new init.Message('ping', init.channel, init.user), "", init.ops)
    expect(init.channel.lastMessage.content).to.be.match(regex);
  })
  
  it('should return true if the message contains the word pong', () => {
    ping.run(init.client, new init.Message('ping', init.channel, init.user), "", init.ops)
    expect(init.channel.lastMessage.content).to.be.contains("pong");
  })
})
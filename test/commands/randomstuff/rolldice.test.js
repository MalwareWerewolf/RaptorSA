const init = require('../../init');
const chai = require('chai');
const expect = chai.expect;
const { assert } = require('chai');

var dice = [1, 2, 3, 4, 5, 6];
var regex = /^[1-6]+$/g;

const embed = new init.Discord.MessageEmbed()
  .setColor("#15f153")
  .addField("First dice", dice[Math.floor(Math.random()*dice.length)], true)
  .addField("Second dice", dice[Math.floor(Math.random()*dice.length)], true)
  .setTimestamp();

describe('rolldice command', () => {  
  describe('Check if MessageEmbed object value is correct', () => {
    it('return true if the embed message is not equals to null', () => {
      assert.notEqual(embed, null);
    })
  })

  describe('Check if the two fields in the MessageEmbed object have values between 1 and 6', () => {
    it('return true if the roll dice in the first field, is between 1 and 6', () => {
      expect(embed.fields[0].value).to.be.match(regex);
    })
      
    it('return true if the roll dice in the second field, is not between 1 and 6', () => {
      expect(embed.fields[1].value).to.not.match(regex);
    })
  })
})
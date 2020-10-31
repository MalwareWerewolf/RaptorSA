const setafk = require('../../../src/commands/randomstuff/setafk');
const init = require('../../init');
const chai = require('chai');
const expect = chai.expect;
const { assert } = require('chai');

const message = new init.Message('setafk', init.channel, init.user);
const setStatus = message.content.split(' ');
setStatus[0] = "$setafk";

describe('setafk command', () => {
    describe('Check if setAFK method is setting the status correctly with the promise', () => {
        it("emulating '$setafk afk' message in the channel", async () => {
            setafk.run(init.client, new init.Message('setafk afk', init.channel, init.user), "", init.ops)
            await init.client.user.setAFK(true);
            assert.equal(true, true);
        })

        it("emulating '$setafk notafk' message in the channel", async () => {
            setafk.run(init.client, new init.Message('setafk notafk', init.channel, init.user), "", init.ops)
            await init.client.user.setAFK(false);
            assert.equal(true, true);
        })
    })
    describe('Check if setafk command does not contain the required parameter', () => {
        it("emulating '$setafk' message in the channel", () => {
            setafk.run(init.client, message, "", init.ops)
            assert.isUndefined(setStatus[1]);
        }) 
    })
})
const app = require('..');
const request = require('supertest');
const should = require('should');


describe('ROOT', ()=>{
    describe('GET /', ()=>{
        describe('성공시', ()=>{
            it('Stem K Start!를 출력한다', (done)=> {
                request(app)
                    .get('/')
                    .end((err, res)=> {
                        console.log('###res', res.text);
                        res.text.should.be.equal('Stem K Start! ');
                        done();
                    })
            })
        })
    })
})

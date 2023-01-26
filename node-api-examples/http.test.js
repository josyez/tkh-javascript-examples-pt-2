const server = require("./http");
const request = require("supertest");


describe("testibg the server", () => {
  describe("Test the root router", () => {
    it("/ should get back a 200", (done) => {
      request(server).get("/").expect(200).end((err) => {
          if(err){
            throw err;
          }else {
            done();
          }
        });
    });
  });

  describe("Testing the /data route", () => {
    it("/data should get back a 200", (done) => {
        request(server).get("/").expect(200).end((err) => {
            if(err){
              throw err;
            }else {
              done();
            }
          });
    });

    it("/data should display my name", (done) =>{
        request(server).get("/data").expect(200).end((err, response) => { 
        if(err){
          throw err;
        }else {
            console.log(response.body.data.name);
            expect(response.body.data.name).toBe('Joselyn')
            done();
        }
      });
  });
  });
});

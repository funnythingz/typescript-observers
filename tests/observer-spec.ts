/// <reference path="../definitions/mocha.d.ts" />
/// <reference path="../definitions/chai.d.ts" />
/// <reference path="../definitions/should.d.ts" />

/// <reference path="../src/subject.ts" />
/// <reference path="../src/event.ts" />

module TEST {

    chai.should();

    describe("Observer", () => {

        var omawariObserver: Omawari<HentaiEvent> = new Omawari<HentaiEvent>();

        it("create instance", () => {
            omawariObserver.should.be.instanceof(Omawari);
        });

    });

}

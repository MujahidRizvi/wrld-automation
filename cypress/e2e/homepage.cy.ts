import { HomePage } from "../pom/homepage.pom.cy";
const hp = new HomePage();

describe('Wetopia Test Suite', function () {
  
  context('Access WRLD test data', () => {
    
    this.beforeEach(function () {

      hp.setViewport()

      cy.fixture('homePageData').then(function (data) {
        this.data = data;
      })
    })

    it('should goto WRLD wbsite', function () {
      hp.gotoWrldWebsite()
    })

    it('should click Season 1 bullet from right navigation', function () {
    
      hp.clickAllBulletsInRigtNav()
      //hp.clickSeason1NavBtn()
    })

   /* it('should click PCT bullet from right navigation', function () {
      hp.clickpctNavBtn()
    })

    it('should click Roadmap bullet from right navigation', function () {
      hp.clickroadmapNavBtn()
    })

    it('should click Tokenomics bullet from right navigation', function () {
      hp.clicktokenomicsNavBtn()
    })

    it('should click Mirror Blog bullet from right navigation', function () {
      hp.clickmirrorNavBtn()
    })

    it('should click Join Us bullet from right navigation', function () {
      hp.clickjoinNavBtn()
    })

    it('should click Contact bullet from right navigation', function () {
      hp.clickcontactNavBtn()
    })*/

    it('should enter valid email address', function () {
      hp.enterEmailForSubscription()
    })

  })
})


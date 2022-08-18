import { homeData } from "../fixtures/wrldData.cy";

export class HomePage {

  private contactNavBtn = ('#side-nav > :nth-child(7)')
  private emailTxt = ('.justify-center.pt-10 input')
  private joinusNavBtn = ('#side-nav > :nth-child(6)')
  private mirrorNavBtn = ('#side-nav > :nth-child(5)')
  private pctNavBtn = ('#side-nav > :nth-child(2)')
  private roadmapNavBtn = ('#side-nav > :nth-child(3)')
  private season1NavBtn = ('#side-nav > :nth-child(1)')
  private tokenomicsNavBtn = ('#side-nav > :nth-child(4)')

  public clickAllBulletsInRigtNav() {

    cy.get('#side-nav > div').each(function($ele){
      cy.wait(homeData.wait3Sec)
      cy.wrap($ele).invoke('show').click()
      
    })
   // cy.wait(homeData.wait3Sec)
   cy.get(this.contactNavBtn).invoke('show').click({ force: true })
    //cy.get(this.contactNavBtn).invoke('show').click({ force: true })
    //cy.get('#side-nav').scrollTo('bottom')
   /* cy.get('#side-nav').each(function($ele){
      cy.wait(homeData.wait3Sec)
      cy.wrap($ele).find('> div').click({ multiple: true })
      
    })*/
    return this;
  }

  public clickcontactNavBtn() {
    cy.get(this.contactNavBtn).invoke('show').click({ force: true });
   // cy.wait(homeData.wait3Sec)
    return this;
  }

  public clickjoinNavBtn() {
    cy.get(this.joinusNavBtn).invoke('show').click({ force: true });
    cy.wait(homeData.wait3Sec)
    return this;
  }

  public clickmirrorNavBtn() {
    cy.get(this.mirrorNavBtn).invoke('show').click({ force: true });
    cy.wait(homeData.wait3Sec)
    return this;
  }

  public clickpctNavBtn() {
    cy.get(this.pctNavBtn).invoke('show').click({ force: true });
    cy.wait(homeData.wait3Sec)
    return this;
  }

  public clickroadmapNavBtn() {
    cy.get(this.roadmapNavBtn).invoke('show').click({ force: true });
    cy.wait(homeData.wait3Sec)
    return this;
  }

  public clickSeason1NavBtn() {
    cy.get(this.season1NavBtn).invoke('show').click({ force: true });
    cy.wait(homeData.wait3Sec)
    return this;
  }

  public clicktokenomicsNavBtn() {
    cy.get(this.tokenomicsNavBtn).invoke('show').click({ force: true });
    cy.wait(homeData.wait3Sec)
    return this;
  }

  public enterEmailForSubscription() {
   // cy.get(this.emailTxt).scrollIntoView()
   // cy.wait(homeData.wait3Sec)
    cy.get(this.emailTxt).type('smar@test.com', { force: true })
    cy.wait(homeData.wait5Sec)
    return this;
  }

  public gotoWrldWebsite() {
    cy.visit(homeData.wrldUrlStg)
    cy.wait(homeData.wait10Sec)
    return this;
  }

  public setViewport() {
    cy.viewport(homeData.viewPortSize.width, homeData.viewPortSize.height)
    return this;
  }
}
import { homeData } from "../fixtures/wrldData.cy";

export class HomePage {

  private contactNavBtn = ('#side-nav > :nth-child(7)')
  private joinusNavBtn = ('#side-nav > :nth-child(6)')
  private mirrorNavBtn = ('#side-nav > :nth-child(5)')
  private pctNavBtn = ('#side-nav > :nth-child(2)')
  private roadmapNavBtn = ('#side-nav > :nth-child(3)')
  private season1NavBtn = ('#side-nav > :nth-child(1)')
  private tokenomicsNavBtn = ('#side-nav > :nth-child(4)')

  public clickcontactNavBtn() {
    cy.get(this.contactNavBtn).invoke('show').click({ force: true });
    cy.wait(homeData.wait3Sec)
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
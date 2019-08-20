import { PassEventsC2CPage } from './app.po';

describe('pass-events-c2-c App', () => {
  let page: PassEventsC2CPage;

  beforeEach(() => {
    page = new PassEventsC2CPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

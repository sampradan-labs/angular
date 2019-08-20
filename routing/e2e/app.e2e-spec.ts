import { RoutingAppPage } from './app.po';

describe('routing-app App', () => {
  let page: RoutingAppPage;

  beforeEach(() => {
    page = new RoutingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

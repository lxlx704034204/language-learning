import { LimingPage } from './app.po';

describe('liming App', function() {
  let page: LimingPage;

  beforeEach(() => {
    page = new LimingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

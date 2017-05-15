import { TestLazyLoadingPage } from './app.po';

describe('test-lazy-loading App', () => {
  let page: TestLazyLoadingPage;

  beforeEach(() => {
    page = new TestLazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

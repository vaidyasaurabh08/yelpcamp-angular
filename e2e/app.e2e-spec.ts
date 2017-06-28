import { YelpcampPage } from './app.po';

describe('yelpcamp App', () => {
  let page: YelpcampPage;

  beforeEach(() => {
    page = new YelpcampPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

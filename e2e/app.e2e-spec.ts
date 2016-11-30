import { WebGymPage } from './app.po';

describe('web-gym App', function() {
  let page: WebGymPage;

  beforeEach(() => {
    page = new WebGymPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

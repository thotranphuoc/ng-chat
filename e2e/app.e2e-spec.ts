import { NgChatv2Page } from './app.po';

describe('ng-chatv2 App', function() {
  let page: NgChatv2Page;

  beforeEach(() => {
    page = new NgChatv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

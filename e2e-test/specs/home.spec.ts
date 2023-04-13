import Page from "../pages/page";


const page = new Page();

describe('Bridge page', () => {

  describe.only('Page Header', () => {

    beforeEach(() => {
      page.visit()
    })

    it('menu list', () => {
      page.checkMenuListEth()
    });

    it('theme switcher', () => {
      page.checkthemeSwitcher()
    });
  })

})

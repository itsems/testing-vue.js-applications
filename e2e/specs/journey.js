module.exports = {
  'takes user to the item page': function(browser) {
    browser
      .url('http://localhost:8080')
      .waitForElementVisible('.news-items', 15000)
      .click('.comments-link')
      .assert.urlContains(`/item`)
      .waitForElementVisible('.item-view', 15000)
      .end()

  }
}
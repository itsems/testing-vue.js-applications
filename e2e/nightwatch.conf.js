module.exports = {
  src_folders: ['e2e/specs'],
  output_foler: 'e2e/reports',
  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 4444,
    clu_args: {
      'WebDriver.chrom.driver': require('chromedriver').path
    }
  },
  test_settings: {
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
}
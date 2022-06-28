const { Builder, Capabilities } = require("selenium-webdriver")

require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addMovie } = require('../functions/addMovie')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movie-list/index.html')
})

afterAll(async () => {
    await driver.quit()
})

afterEach(async () => {
    await driver.sleep(6000)
})

test('Add a movie', async () => {
    await addMovie(driver)
})
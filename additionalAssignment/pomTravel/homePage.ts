import { Locator, Page } from '@playwright/test';

export class HomePage {
    private readonly findAStore: Locator;
    private readonly contactUs: Locator;
    private readonly youAreAt: Locator;
    private readonly searchTextbox: Locator;
    private readonly searchButton: Locator;
    private readonly phoneNumber: Locator;
    private readonly mainNavigationLinks: Locator;
    private readonly searchAndBookOptions: Locator;
    private readonly backgroundImage: Locator;
    private readonly mainDealHeading: Locator;
    private readonly subDealHeading: Locator;

    private readonly internationalStudentFlightsTab: Locator;
    private readonly usStudentFlightsTab: Locator;

    private readonly studentFlightDealsMainText: Locator;
    private readonly studentFlightDealsLocations: Locator;
    private readonly studentFlightDealsLinks: Locator;

    private readonly topTravelDealsText: Locator;
    private readonly topTravelDealsOptionsText: Locator;
    private readonly topTravelDealsLinks: Locator;


    constructor(page: Page) {
        this.findAStore = page.locator('[data-test-id="findAStore"]');
        this.contactUs = page.locator('[data-test-id="contactUs"]');
        this.youAreAt = page.locator('[data-test-id="youAreAtLocation"]');
        this.searchTextbox = page.locator('[data-test-id="searchTextBox"]');
        this.searchButton = page.locator('[data-test-id="searchButton"]');
        this.phoneNumber = page.locator('[data-test-id="phoneNumber"]');
        this.mainNavigationLinks = page.locator('.navigation.tabs');
        this.searchAndBookOptions = page.locator('#searchAndBook > ul');
        this.backgroundImage = page.locator('img');
        this.mainDealHeading = page.locator('h1');
        this.subDealHeading = page.locator('h2');

        this.internationalStudentFlightsTab = page.locator('[data-test-id="internationalStudentFlights"]');
        this.usStudentFlightsTab = page.locator('[data-test-id="usStudentFlights"]');
        this.studentFlightDealsMainText = page.locator('[data-test-id="studentFlightHeading"]');
        this.studentFlightDealsLocations = page.locator('[data-test-id="StudentFlightOptions"]');
        this.studentFlightDealsLinks = page.locator('[href][data-test-id="StudentFlightOptions"]');
        this.topTravelDealsText = page.locator('[data-test-id="topTravelDealsHeading"]');
        this.topTravelDealsOptionsText = page.locator('[data-test-id="topTravelDealsOptions"]');
        this.topTravelDealsLinks = page.locator('[href][data-test-id="topTravelDealsOptions"]');
    }
    
    async clickFindAStore() {
        await this.findAStore.click();
    }

    async clickContactUs() {
        await this.contactUs.click();
    }

    async getYouAreAtStoreText() {
        return await this.youAreAt.textContent();
    }

    async getMainDealHeading() {
        return await this.mainDealHeading.textContent();
    }

    async getSubDealHeading() {
        return await this.subDealHeading.textContent();
    }

    async enterSearchText(text: string) {
        await this.searchTextbox.fill(text);
        await this.searchButton.click();
    }

    async getPhoneNumber() {
        return await this.phoneNumber.textContent();
    }

    async getMainNavigationOptionsText() {
        return this.mainNavigationLinks.allTextContents();
    }

    async clickOnSpecificMainNavigationLink(specificLinkText: string) {

        const arrayOfLocators = await this.mainNavigationLinks.all();

        for (const link of arrayOfLocators) {
            const linkText = await link.textContent();
            if (specificLinkText === linkText) {
                await link.click();
                break;
            }
        }
    }

    async getImageAttributeValue() {
        return await this.backgroundImage.getAttribute('src');
    }

    async getStudentFlightDealsText() {
        return await this.studentFlightDealsMainText.textContent();
    }

    async getStudentFlightDealsLocationsText() {
        return await this.studentFlightDealsLocations.allTextContents();
    }

    async getStudentFlightDealsLinks() {

        const arrayOfLocators = await this.studentFlightDealsLinks.all();
        let href: string[] = [];
        for (const link of arrayOfLocators) {
            link.getAttribute('href');
        }

        return href;
    }

    async getTopTravelDealsText() {
        return await this.topTravelDealsText.textContent();
    }

    async getTopTravelDealsOptionsText() {
        return await this.topTravelDealsOptionsText.allTextContents();
    }

    async getTopTravelDealsLinks() {

        const arrayOfLocators = await this.topTravelDealsLinks.all();
        let href: string[] = [];
        for (const link of arrayOfLocators) {
            link.getAttribute('href');
        }

        return href;
    }
}
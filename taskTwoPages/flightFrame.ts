import { Locator, Page } from '@playwright/test';
import { HomePage } from './homepage';

export class FlightFrame extends HomePage {

    readonly fromDateText: Locator;
    readonly toDateText: Locator;
    readonly fromDatePicker: Locator;
    readonly toDateTextPicker: Locator;
    readonly departureDate: Locator;
    readonly returnDate: Locator;
    readonly flexibleDateCheckbox: Locator;
    readonly flexibleDateInfo: Locator;
    readonly studentsDropdown: Locator;
    readonly compareFaresCheckbox: Locator;
    readonly underAgeDropdown: Locator;
    readonly overAgeDropdown: Locator;
    readonly findYourFlight: Locator;
    readonly advancedSearch: Locator;

    readonly secureBooking: Locator;
    readonly verifiedlogos: Locator;

    constructor(page: Page) {

        super(page);
        this.fromDateText = page.locator('[data-test-id="fromDate"]');
        this.toDateText = page.locator('[data-test-id="toDate"]');
        this.fromDateText = page.locator('[data-test-id="fromDate"]');
        this.toDateText = page.locator('[data-test-id="toDate"]');
        this.departureDate = page.locator('[data-test-id="departureDate"]');
        this.returnDate = page.locator('[data-test-id="returnDate"]');
        this.flexibleDateCheckbox = page.locator('[data-test-id="flexibleDateCheckbox"]');
        this.flexibleDateCheckbox = page.locator('[data-test-id="flexibleDateInfo"]');
        this.studentsDropdown = page.locator('[data-test-id="numberOfStudents"]');
        this.underAgeDropdown = page.locator('[data-test-id="numberOfUnderAge"]');
        this.overAgeDropdown = page.locator('[data-test-id="numberOfOverAge"]');
        this.findYourFlight = page.locator('[data-test-id="flightButton"]');
        this.advancedSearch = page.locator('[data-test-id="advancedSearch"]');

        this.secureBooking = page.locator('[data-test-id="securedBooking"]');
        this.verifiedlogos = page.locator('[data-test-id="VerifiedLogosGroup"]');
    }

    async fillAllFlightSearchInformation(data: {
        fromDate: string;
        toDate: string;
        departureDate: string;
        returnDate: string;
        flexibleDate: boolean;
        numberOfStudents: number;
        numberOfUnderAge: number;
        numberOfOverAge: number;
        compareFares: boolean;
    }) {
        await this.enterFromDate(data.fromDate);
        await this.enterToDate(data.toDate);
        await this.enterDepartureDate(data.departureDate);
        await this.enterReturnDate(data.returnDate);
        if (data.flexibleDate) {
            await this.toggleFlexibleDate();
        }
        await this.selectNumberOfStudents(data.numberOfStudents);
        await this.selectNumberOfUnderAge(data.numberOfUnderAge);
        await this.selectNumberOfOverAge(data.numberOfOverAge);
        if (!data.compareFares) {
            await this.toggleCompareFares();
        }
        await this.clickFindYourFlight();
    }

    async enterFromDate(date: string) {
        await this.fromDateText.fill(date);
    }

    async enterToDate(date: string) {
        await this.toDateText.fill(date);
    }

    async enterDepartureDate(date: string) {
        await this.departureDate.fill(date);
    }

    async enterReturnDate(date: string) {
        await this.returnDate.fill(date);
    }

    async toggleFlexibleDate() {
        await this.flexibleDateCheckbox.check();
    }

    async selectNumberOfStudents(number: number) {
        await this.studentsDropdown.selectOption({ value: number.toString() });
    }

    async selectNumberOfUnderAge(number: number) {
        await this.underAgeDropdown.selectOption({ value: number.toString() });
    }

    async selectNumberOfOverAge(number: number) {
        await this.overAgeDropdown.selectOption({ value: number.toString() });
    }

    async toggleCompareFares() {
        await this.findYourFlight.click();
    }

    async clickFindYourFlight() {
        await this.findYourFlight.click();
    }

    async clickAdvancedSearch() {
        await this.advancedSearch.click();
    }
}
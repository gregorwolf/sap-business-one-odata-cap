"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBankAccountsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var HouseBankAccounts_1 = require("./HouseBankAccounts");
/**
 * Request builder class for operations supported on the [[HouseBankAccounts]] entity.
 */
var HouseBankAccountsRequestBuilder = /** @class */ (function (_super) {
    __extends(HouseBankAccountsRequestBuilder, _super);
    function HouseBankAccountsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `HouseBankAccounts` entity based on its keys.
     * @param absoluteEntry Key property. See [[HouseBankAccounts.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `HouseBankAccounts` entity based on its keys.
     */
    HouseBankAccountsRequestBuilder.prototype.getByKey = function (absoluteEntry) {
        return new v4_1.GetByKeyRequestBuilder(HouseBankAccounts_1.HouseBankAccounts, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `HouseBankAccounts` entities.
     * @returns A request builder for creating requests to retrieve all `HouseBankAccounts` entities.
     */
    HouseBankAccountsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(HouseBankAccounts_1.HouseBankAccounts);
    };
    /**
     * Returns a request builder for creating a `HouseBankAccounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `HouseBankAccounts`.
     */
    HouseBankAccountsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(HouseBankAccounts_1.HouseBankAccounts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `HouseBankAccounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `HouseBankAccounts`.
     */
    HouseBankAccountsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(HouseBankAccounts_1.HouseBankAccounts, entity);
    };
    HouseBankAccountsRequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(HouseBankAccounts_1.HouseBankAccounts, absoluteEntryOrEntity instanceof HouseBankAccounts_1.HouseBankAccounts ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return HouseBankAccountsRequestBuilder;
}(v4_1.RequestBuilder));
exports.HouseBankAccountsRequestBuilder = HouseBankAccountsRequestBuilder;
//# sourceMappingURL=HouseBankAccountsRequestBuilder.js.map
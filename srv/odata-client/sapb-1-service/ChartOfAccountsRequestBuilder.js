"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartOfAccountsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
/**
 * Request builder class for operations supported on the [[ChartOfAccounts]] entity.
 */
var ChartOfAccountsRequestBuilder = /** @class */ (function (_super) {
    __extends(ChartOfAccountsRequestBuilder, _super);
    function ChartOfAccountsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ChartOfAccounts` entity based on its keys.
     * @param code Key property. See [[ChartOfAccounts.code]].
     * @returns A request builder for creating requests to retrieve one `ChartOfAccounts` entity based on its keys.
     */
    ChartOfAccountsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ChartOfAccounts_1.ChartOfAccounts, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ChartOfAccounts` entities.
     * @returns A request builder for creating requests to retrieve all `ChartOfAccounts` entities.
     */
    ChartOfAccountsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ChartOfAccounts_1.ChartOfAccounts);
    };
    /**
     * Returns a request builder for creating a `ChartOfAccounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ChartOfAccounts`.
     */
    ChartOfAccountsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ChartOfAccounts_1.ChartOfAccounts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ChartOfAccounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ChartOfAccounts`.
     */
    ChartOfAccountsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ChartOfAccounts_1.ChartOfAccounts, entity);
    };
    ChartOfAccountsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ChartOfAccounts_1.ChartOfAccounts, codeOrEntity instanceof ChartOfAccounts_1.ChartOfAccounts ? codeOrEntity : { Code: codeOrEntity });
    };
    return ChartOfAccountsRequestBuilder;
}(core_1.RequestBuilder));
exports.ChartOfAccountsRequestBuilder = ChartOfAccountsRequestBuilder;
//# sourceMappingURL=ChartOfAccountsRequestBuilder.js.map
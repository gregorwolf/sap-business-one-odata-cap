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
exports.BoePortfoliosRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BoePortfolios_1 = require("./BoePortfolios");
/**
 * Request builder class for operations supported on the [[BoePortfolios]] entity.
 */
var BoePortfoliosRequestBuilder = /** @class */ (function (_super) {
    __extends(BoePortfoliosRequestBuilder, _super);
    function BoePortfoliosRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BoePortfolios` entity based on its keys.
     * @param portfolioEntry Key property. See [[BoePortfolios.portfolioEntry]].
     * @returns A request builder for creating requests to retrieve one `BoePortfolios` entity based on its keys.
     */
    BoePortfoliosRequestBuilder.prototype.getByKey = function (portfolioEntry) {
        return new core_1.GetByKeyRequestBuilderV4(BoePortfolios_1.BoePortfolios, { PortfolioEntry: portfolioEntry });
    };
    /**
     * Returns a request builder for querying all `BoePortfolios` entities.
     * @returns A request builder for creating requests to retrieve all `BoePortfolios` entities.
     */
    BoePortfoliosRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BoePortfolios_1.BoePortfolios);
    };
    /**
     * Returns a request builder for creating a `BoePortfolios` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BoePortfolios`.
     */
    BoePortfoliosRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BoePortfolios_1.BoePortfolios, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BoePortfolios`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BoePortfolios`.
     */
    BoePortfoliosRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BoePortfolios_1.BoePortfolios, entity);
    };
    BoePortfoliosRequestBuilder.prototype.delete = function (portfolioEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BoePortfolios_1.BoePortfolios, portfolioEntryOrEntity instanceof BoePortfolios_1.BoePortfolios ? portfolioEntryOrEntity : { PortfolioEntry: portfolioEntryOrEntity });
    };
    return BoePortfoliosRequestBuilder;
}(core_1.RequestBuilder));
exports.BoePortfoliosRequestBuilder = BoePortfoliosRequestBuilder;
//# sourceMappingURL=BoePortfoliosRequestBuilder.js.map
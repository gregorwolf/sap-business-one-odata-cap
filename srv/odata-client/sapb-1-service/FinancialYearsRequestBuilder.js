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
exports.FinancialYearsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var FinancialYears_1 = require("./FinancialYears");
/**
 * Request builder class for operations supported on the [[FinancialYears]] entity.
 */
var FinancialYearsRequestBuilder = /** @class */ (function (_super) {
    __extends(FinancialYearsRequestBuilder, _super);
    function FinancialYearsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FinancialYears` entity based on its keys.
     * @param absEntry Key property. See [[FinancialYears.absEntry]].
     * @returns A request builder for creating requests to retrieve one `FinancialYears` entity based on its keys.
     */
    FinancialYearsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(FinancialYears_1.FinancialYears, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `FinancialYears` entities.
     * @returns A request builder for creating requests to retrieve all `FinancialYears` entities.
     */
    FinancialYearsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(FinancialYears_1.FinancialYears);
    };
    /**
     * Returns a request builder for creating a `FinancialYears` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FinancialYears`.
     */
    FinancialYearsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(FinancialYears_1.FinancialYears, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FinancialYears`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FinancialYears`.
     */
    FinancialYearsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(FinancialYears_1.FinancialYears, entity);
    };
    FinancialYearsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(FinancialYears_1.FinancialYears, absEntryOrEntity instanceof FinancialYears_1.FinancialYears ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return FinancialYearsRequestBuilder;
}(v4_1.RequestBuilder));
exports.FinancialYearsRequestBuilder = FinancialYearsRequestBuilder;
//# sourceMappingURL=FinancialYearsRequestBuilder.js.map
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
exports.RetornoCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var RetornoCodes_1 = require("./RetornoCodes");
/**
 * Request builder class for operations supported on the [[RetornoCodes]] entity.
 */
var RetornoCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(RetornoCodesRequestBuilder, _super);
    function RetornoCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RetornoCodes` entity based on its keys.
     * @param absEntry Key property. See [[RetornoCodes.absEntry]].
     * @returns A request builder for creating requests to retrieve one `RetornoCodes` entity based on its keys.
     */
    RetornoCodesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(RetornoCodes_1.RetornoCodes, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `RetornoCodes` entities.
     * @returns A request builder for creating requests to retrieve all `RetornoCodes` entities.
     */
    RetornoCodesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(RetornoCodes_1.RetornoCodes);
    };
    /**
     * Returns a request builder for creating a `RetornoCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RetornoCodes`.
     */
    RetornoCodesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(RetornoCodes_1.RetornoCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RetornoCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RetornoCodes`.
     */
    RetornoCodesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(RetornoCodes_1.RetornoCodes, entity);
    };
    RetornoCodesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(RetornoCodes_1.RetornoCodes, absEntryOrEntity instanceof RetornoCodes_1.RetornoCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return RetornoCodesRequestBuilder;
}(core_1.RequestBuilder));
exports.RetornoCodesRequestBuilder = RetornoCodesRequestBuilder;
//# sourceMappingURL=RetornoCodesRequestBuilder.js.map
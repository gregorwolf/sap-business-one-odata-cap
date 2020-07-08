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
exports.UnitOfMeasurementsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var UnitOfMeasurements_1 = require("./UnitOfMeasurements");
/**
 * Request builder class for operations supported on the [[UnitOfMeasurements]] entity.
 */
var UnitOfMeasurementsRequestBuilder = /** @class */ (function (_super) {
    __extends(UnitOfMeasurementsRequestBuilder, _super);
    function UnitOfMeasurementsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UnitOfMeasurements` entity based on its keys.
     * @param absEntry Key property. See [[UnitOfMeasurements.absEntry]].
     * @returns A request builder for creating requests to retrieve one `UnitOfMeasurements` entity based on its keys.
     */
    UnitOfMeasurementsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(UnitOfMeasurements_1.UnitOfMeasurements, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `UnitOfMeasurements` entities.
     * @returns A request builder for creating requests to retrieve all `UnitOfMeasurements` entities.
     */
    UnitOfMeasurementsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(UnitOfMeasurements_1.UnitOfMeasurements);
    };
    /**
     * Returns a request builder for creating a `UnitOfMeasurements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurements`.
     */
    UnitOfMeasurementsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(UnitOfMeasurements_1.UnitOfMeasurements, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UnitOfMeasurements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurements`.
     */
    UnitOfMeasurementsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(UnitOfMeasurements_1.UnitOfMeasurements, entity);
    };
    UnitOfMeasurementsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(UnitOfMeasurements_1.UnitOfMeasurements, absEntryOrEntity instanceof UnitOfMeasurements_1.UnitOfMeasurements ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return UnitOfMeasurementsRequestBuilder;
}(v4_1.RequestBuilder));
exports.UnitOfMeasurementsRequestBuilder = UnitOfMeasurementsRequestBuilder;
//# sourceMappingURL=UnitOfMeasurementsRequestBuilder.js.map
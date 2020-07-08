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
exports.OccurrenceCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var OccurrenceCodes_1 = require("./OccurrenceCodes");
/**
 * Request builder class for operations supported on the [[OccurrenceCodes]] entity.
 */
var OccurrenceCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(OccurrenceCodesRequestBuilder, _super);
    function OccurrenceCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `OccurrenceCodes` entity based on its keys.
     * @param absEntry Key property. See [[OccurrenceCodes.absEntry]].
     * @returns A request builder for creating requests to retrieve one `OccurrenceCodes` entity based on its keys.
     */
    OccurrenceCodesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(OccurrenceCodes_1.OccurrenceCodes, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `OccurrenceCodes` entities.
     * @returns A request builder for creating requests to retrieve all `OccurrenceCodes` entities.
     */
    OccurrenceCodesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(OccurrenceCodes_1.OccurrenceCodes);
    };
    /**
     * Returns a request builder for creating a `OccurrenceCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OccurrenceCodes`.
     */
    OccurrenceCodesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(OccurrenceCodes_1.OccurrenceCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `OccurrenceCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `OccurrenceCodes`.
     */
    OccurrenceCodesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(OccurrenceCodes_1.OccurrenceCodes, entity);
    };
    OccurrenceCodesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(OccurrenceCodes_1.OccurrenceCodes, absEntryOrEntity instanceof OccurrenceCodes_1.OccurrenceCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return OccurrenceCodesRequestBuilder;
}(v4_1.RequestBuilder));
exports.OccurrenceCodesRequestBuilder = OccurrenceCodesRequestBuilder;
//# sourceMappingURL=OccurrenceCodesRequestBuilder.js.map
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
exports.BinLocationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BinLocations_1 = require("./BinLocations");
/**
 * Request builder class for operations supported on the [[BinLocations]] entity.
 */
var BinLocationsRequestBuilder = /** @class */ (function (_super) {
    __extends(BinLocationsRequestBuilder, _super);
    function BinLocationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BinLocations` entity based on its keys.
     * @param absEntry Key property. See [[BinLocations.absEntry]].
     * @returns A request builder for creating requests to retrieve one `BinLocations` entity based on its keys.
     */
    BinLocationsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(BinLocations_1.BinLocations, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `BinLocations` entities.
     * @returns A request builder for creating requests to retrieve all `BinLocations` entities.
     */
    BinLocationsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BinLocations_1.BinLocations);
    };
    /**
     * Returns a request builder for creating a `BinLocations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BinLocations`.
     */
    BinLocationsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BinLocations_1.BinLocations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BinLocations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BinLocations`.
     */
    BinLocationsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BinLocations_1.BinLocations, entity);
    };
    BinLocationsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BinLocations_1.BinLocations, absEntryOrEntity instanceof BinLocations_1.BinLocations ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return BinLocationsRequestBuilder;
}(core_1.RequestBuilder));
exports.BinLocationsRequestBuilder = BinLocationsRequestBuilder;
//# sourceMappingURL=BinLocationsRequestBuilder.js.map
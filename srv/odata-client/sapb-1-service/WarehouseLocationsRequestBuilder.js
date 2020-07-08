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
exports.WarehouseLocationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var WarehouseLocations_1 = require("./WarehouseLocations");
/**
 * Request builder class for operations supported on the [[WarehouseLocations]] entity.
 */
var WarehouseLocationsRequestBuilder = /** @class */ (function (_super) {
    __extends(WarehouseLocationsRequestBuilder, _super);
    function WarehouseLocationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WarehouseLocations` entity based on its keys.
     * @param code Key property. See [[WarehouseLocations.code]].
     * @returns A request builder for creating requests to retrieve one `WarehouseLocations` entity based on its keys.
     */
    WarehouseLocationsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(WarehouseLocations_1.WarehouseLocations, { Code: code });
    };
    /**
     * Returns a request builder for querying all `WarehouseLocations` entities.
     * @returns A request builder for creating requests to retrieve all `WarehouseLocations` entities.
     */
    WarehouseLocationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(WarehouseLocations_1.WarehouseLocations);
    };
    /**
     * Returns a request builder for creating a `WarehouseLocations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WarehouseLocations`.
     */
    WarehouseLocationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(WarehouseLocations_1.WarehouseLocations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WarehouseLocations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WarehouseLocations`.
     */
    WarehouseLocationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(WarehouseLocations_1.WarehouseLocations, entity);
    };
    WarehouseLocationsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(WarehouseLocations_1.WarehouseLocations, codeOrEntity instanceof WarehouseLocations_1.WarehouseLocations ? codeOrEntity : { Code: codeOrEntity });
    };
    return WarehouseLocationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.WarehouseLocationsRequestBuilder = WarehouseLocationsRequestBuilder;
//# sourceMappingURL=WarehouseLocationsRequestBuilder.js.map
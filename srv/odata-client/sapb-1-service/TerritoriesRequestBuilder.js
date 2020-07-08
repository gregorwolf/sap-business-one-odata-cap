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
exports.TerritoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Territories_1 = require("./Territories");
/**
 * Request builder class for operations supported on the [[Territories]] entity.
 */
var TerritoriesRequestBuilder = /** @class */ (function (_super) {
    __extends(TerritoriesRequestBuilder, _super);
    function TerritoriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Territories` entity based on its keys.
     * @param territoryId Key property. See [[Territories.territoryId]].
     * @returns A request builder for creating requests to retrieve one `Territories` entity based on its keys.
     */
    TerritoriesRequestBuilder.prototype.getByKey = function (territoryId) {
        return new v4_1.GetByKeyRequestBuilder(Territories_1.Territories, { TerritoryID: territoryId });
    };
    /**
     * Returns a request builder for querying all `Territories` entities.
     * @returns A request builder for creating requests to retrieve all `Territories` entities.
     */
    TerritoriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Territories_1.Territories);
    };
    /**
     * Returns a request builder for creating a `Territories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Territories`.
     */
    TerritoriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Territories_1.Territories, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Territories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Territories`.
     */
    TerritoriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Territories_1.Territories, entity);
    };
    TerritoriesRequestBuilder.prototype.delete = function (territoryIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(Territories_1.Territories, territoryIdOrEntity instanceof Territories_1.Territories ? territoryIdOrEntity : { TerritoryID: territoryIdOrEntity });
    };
    return TerritoriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.TerritoriesRequestBuilder = TerritoriesRequestBuilder;
//# sourceMappingURL=TerritoriesRequestBuilder.js.map
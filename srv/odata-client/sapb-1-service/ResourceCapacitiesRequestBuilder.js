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
exports.ResourceCapacitiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ResourceCapacities_1 = require("./ResourceCapacities");
/**
 * Request builder class for operations supported on the [[ResourceCapacities]] entity.
 */
var ResourceCapacitiesRequestBuilder = /** @class */ (function (_super) {
    __extends(ResourceCapacitiesRequestBuilder, _super);
    function ResourceCapacitiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ResourceCapacities` entity based on its keys.
     * @param id Key property. See [[ResourceCapacities.id]].
     * @returns A request builder for creating requests to retrieve one `ResourceCapacities` entity based on its keys.
     */
    ResourceCapacitiesRequestBuilder.prototype.getByKey = function (id) {
        return new v4_1.GetByKeyRequestBuilder(ResourceCapacities_1.ResourceCapacities, { Id: id });
    };
    /**
     * Returns a request builder for querying all `ResourceCapacities` entities.
     * @returns A request builder for creating requests to retrieve all `ResourceCapacities` entities.
     */
    ResourceCapacitiesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ResourceCapacities_1.ResourceCapacities);
    };
    /**
     * Returns a request builder for creating a `ResourceCapacities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ResourceCapacities`.
     */
    ResourceCapacitiesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ResourceCapacities_1.ResourceCapacities, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ResourceCapacities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ResourceCapacities`.
     */
    ResourceCapacitiesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ResourceCapacities_1.ResourceCapacities, entity);
    };
    ResourceCapacitiesRequestBuilder.prototype.delete = function (idOrEntity) {
        return new v4_1.DeleteRequestBuilder(ResourceCapacities_1.ResourceCapacities, idOrEntity instanceof ResourceCapacities_1.ResourceCapacities ? idOrEntity : { Id: idOrEntity });
    };
    return ResourceCapacitiesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ResourceCapacitiesRequestBuilder = ResourceCapacitiesRequestBuilder;
//# sourceMappingURL=ResourceCapacitiesRequestBuilder.js.map
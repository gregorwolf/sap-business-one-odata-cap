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
exports.ResourceCapacitiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(ResourceCapacities_1.ResourceCapacities, { Id: id });
    };
    /**
     * Returns a request builder for querying all `ResourceCapacities` entities.
     * @returns A request builder for creating requests to retrieve all `ResourceCapacities` entities.
     */
    ResourceCapacitiesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ResourceCapacities_1.ResourceCapacities);
    };
    /**
     * Returns a request builder for creating a `ResourceCapacities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ResourceCapacities`.
     */
    ResourceCapacitiesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ResourceCapacities_1.ResourceCapacities, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ResourceCapacities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ResourceCapacities`.
     */
    ResourceCapacitiesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ResourceCapacities_1.ResourceCapacities, entity);
    };
    ResourceCapacitiesRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ResourceCapacities_1.ResourceCapacities, idOrEntity instanceof ResourceCapacities_1.ResourceCapacities ? idOrEntity : { Id: idOrEntity });
    };
    return ResourceCapacitiesRequestBuilder;
}(core_1.RequestBuilder));
exports.ResourceCapacitiesRequestBuilder = ResourceCapacitiesRequestBuilder;
//# sourceMappingURL=ResourceCapacitiesRequestBuilder.js.map
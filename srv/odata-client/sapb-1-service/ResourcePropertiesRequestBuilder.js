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
exports.ResourcePropertiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ResourceProperties_1 = require("./ResourceProperties");
/**
 * Request builder class for operations supported on the [[ResourceProperties]] entity.
 */
var ResourcePropertiesRequestBuilder = /** @class */ (function (_super) {
    __extends(ResourcePropertiesRequestBuilder, _super);
    function ResourcePropertiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ResourceProperties` entity based on its keys.
     * @param code Key property. See [[ResourceProperties.code]].
     * @returns A request builder for creating requests to retrieve one `ResourceProperties` entity based on its keys.
     */
    ResourcePropertiesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ResourceProperties_1.ResourceProperties, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ResourceProperties` entities.
     * @returns A request builder for creating requests to retrieve all `ResourceProperties` entities.
     */
    ResourcePropertiesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ResourceProperties_1.ResourceProperties);
    };
    /**
     * Returns a request builder for creating a `ResourceProperties` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ResourceProperties`.
     */
    ResourcePropertiesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ResourceProperties_1.ResourceProperties, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ResourceProperties`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ResourceProperties`.
     */
    ResourcePropertiesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ResourceProperties_1.ResourceProperties, entity);
    };
    ResourcePropertiesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ResourceProperties_1.ResourceProperties, codeOrEntity instanceof ResourceProperties_1.ResourceProperties ? codeOrEntity : { Code: codeOrEntity });
    };
    return ResourcePropertiesRequestBuilder;
}(core_1.RequestBuilder));
exports.ResourcePropertiesRequestBuilder = ResourcePropertiesRequestBuilder;
//# sourceMappingURL=ResourcePropertiesRequestBuilder.js.map
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
exports.ResourcesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Resources_1 = require("./Resources");
/**
 * Request builder class for operations supported on the [[Resources]] entity.
 */
var ResourcesRequestBuilder = /** @class */ (function (_super) {
    __extends(ResourcesRequestBuilder, _super);
    function ResourcesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Resources` entity based on its keys.
     * @param code Key property. See [[Resources.code]].
     * @returns A request builder for creating requests to retrieve one `Resources` entity based on its keys.
     */
    ResourcesRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(Resources_1.Resources, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Resources` entities.
     * @returns A request builder for creating requests to retrieve all `Resources` entities.
     */
    ResourcesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Resources_1.Resources);
    };
    /**
     * Returns a request builder for creating a `Resources` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Resources`.
     */
    ResourcesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Resources_1.Resources, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Resources`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Resources`.
     */
    ResourcesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Resources_1.Resources, entity);
    };
    ResourcesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(Resources_1.Resources, codeOrEntity instanceof Resources_1.Resources ? codeOrEntity : { Code: codeOrEntity });
    };
    return ResourcesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ResourcesRequestBuilder = ResourcesRequestBuilder;
//# sourceMappingURL=ResourcesRequestBuilder.js.map
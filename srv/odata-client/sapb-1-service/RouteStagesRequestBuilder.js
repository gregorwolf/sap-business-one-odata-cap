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
exports.RouteStagesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var RouteStages_1 = require("./RouteStages");
/**
 * Request builder class for operations supported on the [[RouteStages]] entity.
 */
var RouteStagesRequestBuilder = /** @class */ (function (_super) {
    __extends(RouteStagesRequestBuilder, _super);
    function RouteStagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RouteStages` entity based on its keys.
     * @param internalNumber Key property. See [[RouteStages.internalNumber]].
     * @returns A request builder for creating requests to retrieve one `RouteStages` entity based on its keys.
     */
    RouteStagesRequestBuilder.prototype.getByKey = function (internalNumber) {
        return new v4_1.GetByKeyRequestBuilder(RouteStages_1.RouteStages, { InternalNumber: internalNumber });
    };
    /**
     * Returns a request builder for querying all `RouteStages` entities.
     * @returns A request builder for creating requests to retrieve all `RouteStages` entities.
     */
    RouteStagesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(RouteStages_1.RouteStages);
    };
    /**
     * Returns a request builder for creating a `RouteStages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `RouteStages`.
     */
    RouteStagesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(RouteStages_1.RouteStages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `RouteStages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `RouteStages`.
     */
    RouteStagesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(RouteStages_1.RouteStages, entity);
    };
    RouteStagesRequestBuilder.prototype.delete = function (internalNumberOrEntity) {
        return new v4_1.DeleteRequestBuilder(RouteStages_1.RouteStages, internalNumberOrEntity instanceof RouteStages_1.RouteStages ? internalNumberOrEntity : { InternalNumber: internalNumberOrEntity });
    };
    return RouteStagesRequestBuilder;
}(v4_1.RequestBuilder));
exports.RouteStagesRequestBuilder = RouteStagesRequestBuilder;
//# sourceMappingURL=RouteStagesRequestBuilder.js.map
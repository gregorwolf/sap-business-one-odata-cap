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
exports.ServiceCallTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ServiceCallTypes_1 = require("./ServiceCallTypes");
/**
 * Request builder class for operations supported on the [[ServiceCallTypes]] entity.
 */
var ServiceCallTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceCallTypesRequestBuilder, _super);
    function ServiceCallTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceCallTypes` entity based on its keys.
     * @param callTypeId Key property. See [[ServiceCallTypes.callTypeId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallTypes` entity based on its keys.
     */
    ServiceCallTypesRequestBuilder.prototype.getByKey = function (callTypeId) {
        return new v4_1.GetByKeyRequestBuilder(ServiceCallTypes_1.ServiceCallTypes, { CallTypeID: callTypeId });
    };
    /**
     * Returns a request builder for querying all `ServiceCallTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallTypes` entities.
     */
    ServiceCallTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ServiceCallTypes_1.ServiceCallTypes);
    };
    /**
     * Returns a request builder for creating a `ServiceCallTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallTypes`.
     */
    ServiceCallTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ServiceCallTypes_1.ServiceCallTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceCallTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallTypes`.
     */
    ServiceCallTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ServiceCallTypes_1.ServiceCallTypes, entity);
    };
    ServiceCallTypesRequestBuilder.prototype.delete = function (callTypeIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(ServiceCallTypes_1.ServiceCallTypes, callTypeIdOrEntity instanceof ServiceCallTypes_1.ServiceCallTypes ? callTypeIdOrEntity : { CallTypeID: callTypeIdOrEntity });
    };
    return ServiceCallTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ServiceCallTypesRequestBuilder = ServiceCallTypesRequestBuilder;
//# sourceMappingURL=ServiceCallTypesRequestBuilder.js.map
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
exports.ServiceCallsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ServiceCalls_1 = require("./ServiceCalls");
/**
 * Request builder class for operations supported on the [[ServiceCalls]] entity.
 */
var ServiceCallsRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceCallsRequestBuilder, _super);
    function ServiceCallsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceCalls` entity based on its keys.
     * @param serviceCallId Key property. See [[ServiceCalls.serviceCallId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCalls` entity based on its keys.
     */
    ServiceCallsRequestBuilder.prototype.getByKey = function (serviceCallId) {
        return new v4_1.GetByKeyRequestBuilder(ServiceCalls_1.ServiceCalls, { ServiceCallID: serviceCallId });
    };
    /**
     * Returns a request builder for querying all `ServiceCalls` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCalls` entities.
     */
    ServiceCallsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ServiceCalls_1.ServiceCalls);
    };
    /**
     * Returns a request builder for creating a `ServiceCalls` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCalls`.
     */
    ServiceCallsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ServiceCalls_1.ServiceCalls, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceCalls`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCalls`.
     */
    ServiceCallsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ServiceCalls_1.ServiceCalls, entity);
    };
    ServiceCallsRequestBuilder.prototype.delete = function (serviceCallIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(ServiceCalls_1.ServiceCalls, serviceCallIdOrEntity instanceof ServiceCalls_1.ServiceCalls ? serviceCallIdOrEntity : { ServiceCallID: serviceCallIdOrEntity });
    };
    return ServiceCallsRequestBuilder;
}(v4_1.RequestBuilder));
exports.ServiceCallsRequestBuilder = ServiceCallsRequestBuilder;
//# sourceMappingURL=ServiceCallsRequestBuilder.js.map
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
exports.ServiceCallStatusRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ServiceCallStatus_1 = require("./ServiceCallStatus");
/**
 * Request builder class for operations supported on the [[ServiceCallStatus]] entity.
 */
var ServiceCallStatusRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceCallStatusRequestBuilder, _super);
    function ServiceCallStatusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceCallStatus` entity based on its keys.
     * @param statusId Key property. See [[ServiceCallStatus.statusId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallStatus` entity based on its keys.
     */
    ServiceCallStatusRequestBuilder.prototype.getByKey = function (statusId) {
        return new core_1.GetByKeyRequestBuilderV4(ServiceCallStatus_1.ServiceCallStatus, { StatusId: statusId });
    };
    /**
     * Returns a request builder for querying all `ServiceCallStatus` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallStatus` entities.
     */
    ServiceCallStatusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ServiceCallStatus_1.ServiceCallStatus);
    };
    /**
     * Returns a request builder for creating a `ServiceCallStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallStatus`.
     */
    ServiceCallStatusRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ServiceCallStatus_1.ServiceCallStatus, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceCallStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallStatus`.
     */
    ServiceCallStatusRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ServiceCallStatus_1.ServiceCallStatus, entity);
    };
    ServiceCallStatusRequestBuilder.prototype.delete = function (statusIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ServiceCallStatus_1.ServiceCallStatus, statusIdOrEntity instanceof ServiceCallStatus_1.ServiceCallStatus ? statusIdOrEntity : { StatusId: statusIdOrEntity });
    };
    return ServiceCallStatusRequestBuilder;
}(core_1.RequestBuilder));
exports.ServiceCallStatusRequestBuilder = ServiceCallStatusRequestBuilder;
//# sourceMappingURL=ServiceCallStatusRequestBuilder.js.map
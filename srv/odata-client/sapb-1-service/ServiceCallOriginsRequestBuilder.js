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
exports.ServiceCallOriginsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ServiceCallOrigins_1 = require("./ServiceCallOrigins");
/**
 * Request builder class for operations supported on the [[ServiceCallOrigins]] entity.
 */
var ServiceCallOriginsRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceCallOriginsRequestBuilder, _super);
    function ServiceCallOriginsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceCallOrigins` entity based on its keys.
     * @param originId Key property. See [[ServiceCallOrigins.originId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallOrigins` entity based on its keys.
     */
    ServiceCallOriginsRequestBuilder.prototype.getByKey = function (originId) {
        return new core_1.GetByKeyRequestBuilderV4(ServiceCallOrigins_1.ServiceCallOrigins, { OriginID: originId });
    };
    /**
     * Returns a request builder for querying all `ServiceCallOrigins` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallOrigins` entities.
     */
    ServiceCallOriginsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ServiceCallOrigins_1.ServiceCallOrigins);
    };
    /**
     * Returns a request builder for creating a `ServiceCallOrigins` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallOrigins`.
     */
    ServiceCallOriginsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ServiceCallOrigins_1.ServiceCallOrigins, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceCallOrigins`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallOrigins`.
     */
    ServiceCallOriginsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ServiceCallOrigins_1.ServiceCallOrigins, entity);
    };
    ServiceCallOriginsRequestBuilder.prototype.delete = function (originIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ServiceCallOrigins_1.ServiceCallOrigins, originIdOrEntity instanceof ServiceCallOrigins_1.ServiceCallOrigins ? originIdOrEntity : { OriginID: originIdOrEntity });
    };
    return ServiceCallOriginsRequestBuilder;
}(core_1.RequestBuilder));
exports.ServiceCallOriginsRequestBuilder = ServiceCallOriginsRequestBuilder;
//# sourceMappingURL=ServiceCallOriginsRequestBuilder.js.map
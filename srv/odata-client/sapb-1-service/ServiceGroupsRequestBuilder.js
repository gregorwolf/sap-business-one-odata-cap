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
exports.ServiceGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ServiceGroups_1 = require("./ServiceGroups");
/**
 * Request builder class for operations supported on the [[ServiceGroups]] entity.
 */
var ServiceGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceGroupsRequestBuilder, _super);
    function ServiceGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceGroups` entity based on its keys.
     * @param absEntry Key property. See [[ServiceGroups.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ServiceGroups` entity based on its keys.
     */
    ServiceGroupsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(ServiceGroups_1.ServiceGroups, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `ServiceGroups` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceGroups` entities.
     */
    ServiceGroupsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ServiceGroups_1.ServiceGroups);
    };
    /**
     * Returns a request builder for creating a `ServiceGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceGroups`.
     */
    ServiceGroupsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ServiceGroups_1.ServiceGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceGroups`.
     */
    ServiceGroupsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ServiceGroups_1.ServiceGroups, entity);
    };
    ServiceGroupsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ServiceGroups_1.ServiceGroups, absEntryOrEntity instanceof ServiceGroups_1.ServiceGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return ServiceGroupsRequestBuilder;
}(core_1.RequestBuilder));
exports.ServiceGroupsRequestBuilder = ServiceGroupsRequestBuilder;
//# sourceMappingURL=ServiceGroupsRequestBuilder.js.map
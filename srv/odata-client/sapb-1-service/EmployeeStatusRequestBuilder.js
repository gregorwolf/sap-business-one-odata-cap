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
exports.EmployeeStatusRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeStatus_1 = require("./EmployeeStatus");
/**
 * Request builder class for operations supported on the [[EmployeeStatus]] entity.
 */
var EmployeeStatusRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeStatusRequestBuilder, _super);
    function EmployeeStatusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeStatus` entity based on its keys.
     * @param statusId Key property. See [[EmployeeStatus.statusId]].
     * @returns A request builder for creating requests to retrieve one `EmployeeStatus` entity based on its keys.
     */
    EmployeeStatusRequestBuilder.prototype.getByKey = function (statusId) {
        return new core_1.GetByKeyRequestBuilderV4(EmployeeStatus_1.EmployeeStatus, { StatusId: statusId });
    };
    /**
     * Returns a request builder for querying all `EmployeeStatus` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeStatus` entities.
     */
    EmployeeStatusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(EmployeeStatus_1.EmployeeStatus);
    };
    /**
     * Returns a request builder for creating a `EmployeeStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeStatus`.
     */
    EmployeeStatusRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(EmployeeStatus_1.EmployeeStatus, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeStatus`.
     */
    EmployeeStatusRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(EmployeeStatus_1.EmployeeStatus, entity);
    };
    EmployeeStatusRequestBuilder.prototype.delete = function (statusIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(EmployeeStatus_1.EmployeeStatus, statusIdOrEntity instanceof EmployeeStatus_1.EmployeeStatus ? statusIdOrEntity : { StatusId: statusIdOrEntity });
    };
    return EmployeeStatusRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeStatusRequestBuilder = EmployeeStatusRequestBuilder;
//# sourceMappingURL=EmployeeStatusRequestBuilder.js.map
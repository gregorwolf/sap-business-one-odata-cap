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
exports.EmployeesInfoRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var EmployeesInfo_1 = require("./EmployeesInfo");
/**
 * Request builder class for operations supported on the [[EmployeesInfo]] entity.
 */
var EmployeesInfoRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeesInfoRequestBuilder, _super);
    function EmployeesInfoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeesInfo` entity based on its keys.
     * @param employeeId Key property. See [[EmployeesInfo.employeeId]].
     * @returns A request builder for creating requests to retrieve one `EmployeesInfo` entity based on its keys.
     */
    EmployeesInfoRequestBuilder.prototype.getByKey = function (employeeId) {
        return new v4_1.GetByKeyRequestBuilder(EmployeesInfo_1.EmployeesInfo, { EmployeeID: employeeId });
    };
    /**
     * Returns a request builder for querying all `EmployeesInfo` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeesInfo` entities.
     */
    EmployeesInfoRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(EmployeesInfo_1.EmployeesInfo);
    };
    /**
     * Returns a request builder for creating a `EmployeesInfo` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeesInfo`.
     */
    EmployeesInfoRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(EmployeesInfo_1.EmployeesInfo, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeesInfo`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeesInfo`.
     */
    EmployeesInfoRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(EmployeesInfo_1.EmployeesInfo, entity);
    };
    EmployeesInfoRequestBuilder.prototype.delete = function (employeeIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(EmployeesInfo_1.EmployeesInfo, employeeIdOrEntity instanceof EmployeesInfo_1.EmployeesInfo ? employeeIdOrEntity : { EmployeeID: employeeIdOrEntity });
    };
    return EmployeesInfoRequestBuilder;
}(v4_1.RequestBuilder));
exports.EmployeesInfoRequestBuilder = EmployeesInfoRequestBuilder;
//# sourceMappingURL=EmployeesInfoRequestBuilder.js.map
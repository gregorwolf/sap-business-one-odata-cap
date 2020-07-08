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
exports.EmployeeRolesSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var EmployeeRolesSetup_1 = require("./EmployeeRolesSetup");
/**
 * Request builder class for operations supported on the [[EmployeeRolesSetup]] entity.
 */
var EmployeeRolesSetupRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeRolesSetupRequestBuilder, _super);
    function EmployeeRolesSetupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeRolesSetup` entity based on its keys.
     * @param typeId Key property. See [[EmployeeRolesSetup.typeId]].
     * @returns A request builder for creating requests to retrieve one `EmployeeRolesSetup` entity based on its keys.
     */
    EmployeeRolesSetupRequestBuilder.prototype.getByKey = function (typeId) {
        return new v4_1.GetByKeyRequestBuilder(EmployeeRolesSetup_1.EmployeeRolesSetup, { TypeID: typeId });
    };
    /**
     * Returns a request builder for querying all `EmployeeRolesSetup` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeRolesSetup` entities.
     */
    EmployeeRolesSetupRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(EmployeeRolesSetup_1.EmployeeRolesSetup);
    };
    /**
     * Returns a request builder for creating a `EmployeeRolesSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeRolesSetup`.
     */
    EmployeeRolesSetupRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(EmployeeRolesSetup_1.EmployeeRolesSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeRolesSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeRolesSetup`.
     */
    EmployeeRolesSetupRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(EmployeeRolesSetup_1.EmployeeRolesSetup, entity);
    };
    EmployeeRolesSetupRequestBuilder.prototype.delete = function (typeIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(EmployeeRolesSetup_1.EmployeeRolesSetup, typeIdOrEntity instanceof EmployeeRolesSetup_1.EmployeeRolesSetup ? typeIdOrEntity : { TypeID: typeIdOrEntity });
    };
    return EmployeeRolesSetupRequestBuilder;
}(v4_1.RequestBuilder));
exports.EmployeeRolesSetupRequestBuilder = EmployeeRolesSetupRequestBuilder;
//# sourceMappingURL=EmployeeRolesSetupRequestBuilder.js.map
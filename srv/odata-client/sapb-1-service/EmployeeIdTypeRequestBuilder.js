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
exports.EmployeeIdTypeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var EmployeeIdType_1 = require("./EmployeeIdType");
/**
 * Request builder class for operations supported on the [[EmployeeIdType]] entity.
 */
var EmployeeIdTypeRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeIdTypeRequestBuilder, _super);
    function EmployeeIdTypeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeIdType` entity based on its keys.
     * @param idType Key property. See [[EmployeeIdType.idType]].
     * @returns A request builder for creating requests to retrieve one `EmployeeIdType` entity based on its keys.
     */
    EmployeeIdTypeRequestBuilder.prototype.getByKey = function (idType) {
        return new v4_1.GetByKeyRequestBuilder(EmployeeIdType_1.EmployeeIdType, { IDType: idType });
    };
    /**
     * Returns a request builder for querying all `EmployeeIdType` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeIdType` entities.
     */
    EmployeeIdTypeRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(EmployeeIdType_1.EmployeeIdType);
    };
    /**
     * Returns a request builder for creating a `EmployeeIdType` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeIdType`.
     */
    EmployeeIdTypeRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(EmployeeIdType_1.EmployeeIdType, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeIdType`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeIdType`.
     */
    EmployeeIdTypeRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(EmployeeIdType_1.EmployeeIdType, entity);
    };
    EmployeeIdTypeRequestBuilder.prototype.delete = function (idTypeOrEntity) {
        return new v4_1.DeleteRequestBuilder(EmployeeIdType_1.EmployeeIdType, idTypeOrEntity instanceof EmployeeIdType_1.EmployeeIdType ? idTypeOrEntity : { IDType: idTypeOrEntity });
    };
    return EmployeeIdTypeRequestBuilder;
}(v4_1.RequestBuilder));
exports.EmployeeIdTypeRequestBuilder = EmployeeIdTypeRequestBuilder;
//# sourceMappingURL=EmployeeIdTypeRequestBuilder.js.map
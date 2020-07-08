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
exports.DepartmentsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Departments_1 = require("./Departments");
/**
 * Request builder class for operations supported on the [[Departments]] entity.
 */
var DepartmentsRequestBuilder = /** @class */ (function (_super) {
    __extends(DepartmentsRequestBuilder, _super);
    function DepartmentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Departments` entity based on its keys.
     * @param code Key property. See [[Departments.code]].
     * @returns A request builder for creating requests to retrieve one `Departments` entity based on its keys.
     */
    DepartmentsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(Departments_1.Departments, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Departments` entities.
     * @returns A request builder for creating requests to retrieve all `Departments` entities.
     */
    DepartmentsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Departments_1.Departments);
    };
    /**
     * Returns a request builder for creating a `Departments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Departments`.
     */
    DepartmentsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Departments_1.Departments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Departments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Departments`.
     */
    DepartmentsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Departments_1.Departments, entity);
    };
    DepartmentsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(Departments_1.Departments, codeOrEntity instanceof Departments_1.Departments ? codeOrEntity : { Code: codeOrEntity });
    };
    return DepartmentsRequestBuilder;
}(v4_1.RequestBuilder));
exports.DepartmentsRequestBuilder = DepartmentsRequestBuilder;
//# sourceMappingURL=DepartmentsRequestBuilder.js.map
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
exports.SalesPersonsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesPersons_1 = require("./SalesPersons");
/**
 * Request builder class for operations supported on the [[SalesPersons]] entity.
 */
var SalesPersonsRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesPersonsRequestBuilder, _super);
    function SalesPersonsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesPersons` entity based on its keys.
     * @param salesEmployeeCode Key property. See [[SalesPersons.salesEmployeeCode]].
     * @returns A request builder for creating requests to retrieve one `SalesPersons` entity based on its keys.
     */
    SalesPersonsRequestBuilder.prototype.getByKey = function (salesEmployeeCode) {
        return new v4_1.GetByKeyRequestBuilder(SalesPersons_1.SalesPersons, { SalesEmployeeCode: salesEmployeeCode });
    };
    /**
     * Returns a request builder for querying all `SalesPersons` entities.
     * @returns A request builder for creating requests to retrieve all `SalesPersons` entities.
     */
    SalesPersonsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesPersons_1.SalesPersons);
    };
    /**
     * Returns a request builder for creating a `SalesPersons` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesPersons`.
     */
    SalesPersonsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesPersons_1.SalesPersons, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesPersons`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesPersons`.
     */
    SalesPersonsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesPersons_1.SalesPersons, entity);
    };
    SalesPersonsRequestBuilder.prototype.delete = function (salesEmployeeCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesPersons_1.SalesPersons, salesEmployeeCodeOrEntity instanceof SalesPersons_1.SalesPersons ? salesEmployeeCodeOrEntity : { SalesEmployeeCode: salesEmployeeCodeOrEntity });
    };
    return SalesPersonsRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesPersonsRequestBuilder = SalesPersonsRequestBuilder;
//# sourceMappingURL=SalesPersonsRequestBuilder.js.map
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
exports.SalesTaxAuthoritiesTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesTaxAuthoritiesTypes_1 = require("./SalesTaxAuthoritiesTypes");
/**
 * Request builder class for operations supported on the [[SalesTaxAuthoritiesTypes]] entity.
 */
var SalesTaxAuthoritiesTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesTaxAuthoritiesTypesRequestBuilder, _super);
    function SalesTaxAuthoritiesTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesTaxAuthoritiesTypes` entity based on its keys.
     * @param numerator Key property. See [[SalesTaxAuthoritiesTypes.numerator]].
     * @returns A request builder for creating requests to retrieve one `SalesTaxAuthoritiesTypes` entity based on its keys.
     */
    SalesTaxAuthoritiesTypesRequestBuilder.prototype.getByKey = function (numerator) {
        return new v4_1.GetByKeyRequestBuilder(SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `SalesTaxAuthoritiesTypes` entities.
     * @returns A request builder for creating requests to retrieve all `SalesTaxAuthoritiesTypes` entities.
     */
    SalesTaxAuthoritiesTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes);
    };
    /**
     * Returns a request builder for creating a `SalesTaxAuthoritiesTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesTaxAuthoritiesTypes`.
     */
    SalesTaxAuthoritiesTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesTaxAuthoritiesTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesTaxAuthoritiesTypes`.
     */
    SalesTaxAuthoritiesTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes, entity);
    };
    SalesTaxAuthoritiesTypesRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes, numeratorOrEntity instanceof SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return SalesTaxAuthoritiesTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesTaxAuthoritiesTypesRequestBuilder = SalesTaxAuthoritiesTypesRequestBuilder;
//# sourceMappingURL=SalesTaxAuthoritiesTypesRequestBuilder.js.map
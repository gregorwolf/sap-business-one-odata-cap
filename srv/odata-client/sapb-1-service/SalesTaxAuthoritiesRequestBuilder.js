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
exports.SalesTaxAuthoritiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SalesTaxAuthorities_1 = require("./SalesTaxAuthorities");
/**
 * Request builder class for operations supported on the [[SalesTaxAuthorities]] entity.
 */
var SalesTaxAuthoritiesRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesTaxAuthoritiesRequestBuilder, _super);
    function SalesTaxAuthoritiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesTaxAuthorities` entity based on its keys.
     * @param type Key property. See [[SalesTaxAuthorities.type]].
     * @param code Key property. See [[SalesTaxAuthorities.code]].
     * @returns A request builder for creating requests to retrieve one `SalesTaxAuthorities` entity based on its keys.
     */
    SalesTaxAuthoritiesRequestBuilder.prototype.getByKey = function (type, code) {
        return new core_1.GetByKeyRequestBuilderV4(SalesTaxAuthorities_1.SalesTaxAuthorities, {
            Type: type,
            Code: code
        });
    };
    /**
     * Returns a request builder for querying all `SalesTaxAuthorities` entities.
     * @returns A request builder for creating requests to retrieve all `SalesTaxAuthorities` entities.
     */
    SalesTaxAuthoritiesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SalesTaxAuthorities_1.SalesTaxAuthorities);
    };
    /**
     * Returns a request builder for creating a `SalesTaxAuthorities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesTaxAuthorities`.
     */
    SalesTaxAuthoritiesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SalesTaxAuthorities_1.SalesTaxAuthorities, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesTaxAuthorities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesTaxAuthorities`.
     */
    SalesTaxAuthoritiesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SalesTaxAuthorities_1.SalesTaxAuthorities, entity);
    };
    SalesTaxAuthoritiesRequestBuilder.prototype.delete = function (typeOrEntity, code) {
        return new core_1.DeleteRequestBuilderV4(SalesTaxAuthorities_1.SalesTaxAuthorities, typeOrEntity instanceof SalesTaxAuthorities_1.SalesTaxAuthorities ? typeOrEntity : {
            Type: typeOrEntity,
            Code: code
        });
    };
    return SalesTaxAuthoritiesRequestBuilder;
}(core_1.RequestBuilder));
exports.SalesTaxAuthoritiesRequestBuilder = SalesTaxAuthoritiesRequestBuilder;
//# sourceMappingURL=SalesTaxAuthoritiesRequestBuilder.js.map
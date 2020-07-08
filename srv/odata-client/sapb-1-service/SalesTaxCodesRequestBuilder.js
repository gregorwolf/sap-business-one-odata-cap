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
exports.SalesTaxCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesTaxCodes_1 = require("./SalesTaxCodes");
/**
 * Request builder class for operations supported on the [[SalesTaxCodes]] entity.
 */
var SalesTaxCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesTaxCodesRequestBuilder, _super);
    function SalesTaxCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesTaxCodes` entity based on its keys.
     * @param code Key property. See [[SalesTaxCodes.code]].
     * @returns A request builder for creating requests to retrieve one `SalesTaxCodes` entity based on its keys.
     */
    SalesTaxCodesRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(SalesTaxCodes_1.SalesTaxCodes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `SalesTaxCodes` entities.
     * @returns A request builder for creating requests to retrieve all `SalesTaxCodes` entities.
     */
    SalesTaxCodesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesTaxCodes_1.SalesTaxCodes);
    };
    /**
     * Returns a request builder for creating a `SalesTaxCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesTaxCodes`.
     */
    SalesTaxCodesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesTaxCodes_1.SalesTaxCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesTaxCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesTaxCodes`.
     */
    SalesTaxCodesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesTaxCodes_1.SalesTaxCodes, entity);
    };
    SalesTaxCodesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesTaxCodes_1.SalesTaxCodes, codeOrEntity instanceof SalesTaxCodes_1.SalesTaxCodes ? codeOrEntity : { Code: codeOrEntity });
    };
    return SalesTaxCodesRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesTaxCodesRequestBuilder = SalesTaxCodesRequestBuilder;
//# sourceMappingURL=SalesTaxCodesRequestBuilder.js.map
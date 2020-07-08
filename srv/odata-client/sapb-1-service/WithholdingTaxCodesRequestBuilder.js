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
exports.WithholdingTaxCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
/**
 * Request builder class for operations supported on the [[WithholdingTaxCodes]] entity.
 */
var WithholdingTaxCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(WithholdingTaxCodesRequestBuilder, _super);
    function WithholdingTaxCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WithholdingTaxCodes` entity based on its keys.
     * @param wtCode Key property. See [[WithholdingTaxCodes.wtCode]].
     * @returns A request builder for creating requests to retrieve one `WithholdingTaxCodes` entity based on its keys.
     */
    WithholdingTaxCodesRequestBuilder.prototype.getByKey = function (wtCode) {
        return new v4_1.GetByKeyRequestBuilder(WithholdingTaxCodes_1.WithholdingTaxCodes, { WTCode: wtCode });
    };
    /**
     * Returns a request builder for querying all `WithholdingTaxCodes` entities.
     * @returns A request builder for creating requests to retrieve all `WithholdingTaxCodes` entities.
     */
    WithholdingTaxCodesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(WithholdingTaxCodes_1.WithholdingTaxCodes);
    };
    /**
     * Returns a request builder for creating a `WithholdingTaxCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WithholdingTaxCodes`.
     */
    WithholdingTaxCodesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(WithholdingTaxCodes_1.WithholdingTaxCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WithholdingTaxCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WithholdingTaxCodes`.
     */
    WithholdingTaxCodesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(WithholdingTaxCodes_1.WithholdingTaxCodes, entity);
    };
    WithholdingTaxCodesRequestBuilder.prototype.delete = function (wtCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(WithholdingTaxCodes_1.WithholdingTaxCodes, wtCodeOrEntity instanceof WithholdingTaxCodes_1.WithholdingTaxCodes ? wtCodeOrEntity : { WTCode: wtCodeOrEntity });
    };
    return WithholdingTaxCodesRequestBuilder;
}(v4_1.RequestBuilder));
exports.WithholdingTaxCodesRequestBuilder = WithholdingTaxCodesRequestBuilder;
//# sourceMappingURL=WithholdingTaxCodesRequestBuilder.js.map
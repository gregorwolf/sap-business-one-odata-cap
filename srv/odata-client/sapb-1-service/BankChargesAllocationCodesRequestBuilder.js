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
exports.BankChargesAllocationCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BankChargesAllocationCodes_1 = require("./BankChargesAllocationCodes");
/**
 * Request builder class for operations supported on the [[BankChargesAllocationCodes]] entity.
 */
var BankChargesAllocationCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(BankChargesAllocationCodesRequestBuilder, _super);
    function BankChargesAllocationCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BankChargesAllocationCodes` entity based on its keys.
     * @param code Key property. See [[BankChargesAllocationCodes.code]].
     * @returns A request builder for creating requests to retrieve one `BankChargesAllocationCodes` entity based on its keys.
     */
    BankChargesAllocationCodesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(BankChargesAllocationCodes_1.BankChargesAllocationCodes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `BankChargesAllocationCodes` entities.
     * @returns A request builder for creating requests to retrieve all `BankChargesAllocationCodes` entities.
     */
    BankChargesAllocationCodesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BankChargesAllocationCodes_1.BankChargesAllocationCodes);
    };
    /**
     * Returns a request builder for creating a `BankChargesAllocationCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BankChargesAllocationCodes`.
     */
    BankChargesAllocationCodesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BankChargesAllocationCodes_1.BankChargesAllocationCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BankChargesAllocationCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BankChargesAllocationCodes`.
     */
    BankChargesAllocationCodesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BankChargesAllocationCodes_1.BankChargesAllocationCodes, entity);
    };
    BankChargesAllocationCodesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BankChargesAllocationCodes_1.BankChargesAllocationCodes, codeOrEntity instanceof BankChargesAllocationCodes_1.BankChargesAllocationCodes ? codeOrEntity : { Code: codeOrEntity });
    };
    return BankChargesAllocationCodesRequestBuilder;
}(core_1.RequestBuilder));
exports.BankChargesAllocationCodesRequestBuilder = BankChargesAllocationCodesRequestBuilder;
//# sourceMappingURL=BankChargesAllocationCodesRequestBuilder.js.map
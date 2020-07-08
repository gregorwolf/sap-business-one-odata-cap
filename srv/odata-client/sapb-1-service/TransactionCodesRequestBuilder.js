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
exports.TransactionCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var TransactionCodes_1 = require("./TransactionCodes");
/**
 * Request builder class for operations supported on the [[TransactionCodes]] entity.
 */
var TransactionCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(TransactionCodesRequestBuilder, _super);
    function TransactionCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TransactionCodes` entity based on its keys.
     * @param code Key property. See [[TransactionCodes.code]].
     * @returns A request builder for creating requests to retrieve one `TransactionCodes` entity based on its keys.
     */
    TransactionCodesRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(TransactionCodes_1.TransactionCodes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `TransactionCodes` entities.
     * @returns A request builder for creating requests to retrieve all `TransactionCodes` entities.
     */
    TransactionCodesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(TransactionCodes_1.TransactionCodes);
    };
    /**
     * Returns a request builder for creating a `TransactionCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TransactionCodes`.
     */
    TransactionCodesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(TransactionCodes_1.TransactionCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TransactionCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TransactionCodes`.
     */
    TransactionCodesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(TransactionCodes_1.TransactionCodes, entity);
    };
    TransactionCodesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(TransactionCodes_1.TransactionCodes, codeOrEntity instanceof TransactionCodes_1.TransactionCodes ? codeOrEntity : { Code: codeOrEntity });
    };
    return TransactionCodesRequestBuilder;
}(v4_1.RequestBuilder));
exports.TransactionCodesRequestBuilder = TransactionCodesRequestBuilder;
//# sourceMappingURL=TransactionCodesRequestBuilder.js.map
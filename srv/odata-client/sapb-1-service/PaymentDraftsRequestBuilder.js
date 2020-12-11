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
exports.PaymentDraftsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PaymentDrafts_1 = require("./PaymentDrafts");
/**
 * Request builder class for operations supported on the [[PaymentDrafts]] entity.
 */
var PaymentDraftsRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentDraftsRequestBuilder, _super);
    function PaymentDraftsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentDrafts` entity based on its keys.
     * @param docEntry Key property. See [[PaymentDrafts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PaymentDrafts` entity based on its keys.
     */
    PaymentDraftsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(PaymentDrafts_1.PaymentDrafts, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PaymentDrafts` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentDrafts` entities.
     */
    PaymentDraftsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PaymentDrafts_1.PaymentDrafts);
    };
    /**
     * Returns a request builder for creating a `PaymentDrafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentDrafts`.
     */
    PaymentDraftsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PaymentDrafts_1.PaymentDrafts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentDrafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentDrafts`.
     */
    PaymentDraftsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PaymentDrafts_1.PaymentDrafts, entity);
    };
    PaymentDraftsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PaymentDrafts_1.PaymentDrafts, docEntryOrEntity instanceof PaymentDrafts_1.PaymentDrafts ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PaymentDraftsRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentDraftsRequestBuilder = PaymentDraftsRequestBuilder;
//# sourceMappingURL=PaymentDraftsRequestBuilder.js.map
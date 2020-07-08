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
exports.ChecksforPaymentRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ChecksforPayment_1 = require("./ChecksforPayment");
/**
 * Request builder class for operations supported on the [[ChecksforPayment]] entity.
 */
var ChecksforPaymentRequestBuilder = /** @class */ (function (_super) {
    __extends(ChecksforPaymentRequestBuilder, _super);
    function ChecksforPaymentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ChecksforPayment` entity based on its keys.
     * @param checkKey Key property. See [[ChecksforPayment.checkKey]].
     * @returns A request builder for creating requests to retrieve one `ChecksforPayment` entity based on its keys.
     */
    ChecksforPaymentRequestBuilder.prototype.getByKey = function (checkKey) {
        return new v4_1.GetByKeyRequestBuilder(ChecksforPayment_1.ChecksforPayment, { CheckKey: checkKey });
    };
    /**
     * Returns a request builder for querying all `ChecksforPayment` entities.
     * @returns A request builder for creating requests to retrieve all `ChecksforPayment` entities.
     */
    ChecksforPaymentRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ChecksforPayment_1.ChecksforPayment);
    };
    /**
     * Returns a request builder for creating a `ChecksforPayment` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ChecksforPayment`.
     */
    ChecksforPaymentRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ChecksforPayment_1.ChecksforPayment, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ChecksforPayment`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ChecksforPayment`.
     */
    ChecksforPaymentRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ChecksforPayment_1.ChecksforPayment, entity);
    };
    ChecksforPaymentRequestBuilder.prototype.delete = function (checkKeyOrEntity) {
        return new v4_1.DeleteRequestBuilder(ChecksforPayment_1.ChecksforPayment, checkKeyOrEntity instanceof ChecksforPayment_1.ChecksforPayment ? checkKeyOrEntity : { CheckKey: checkKeyOrEntity });
    };
    return ChecksforPaymentRequestBuilder;
}(v4_1.RequestBuilder));
exports.ChecksforPaymentRequestBuilder = ChecksforPaymentRequestBuilder;
//# sourceMappingURL=ChecksforPaymentRequestBuilder.js.map
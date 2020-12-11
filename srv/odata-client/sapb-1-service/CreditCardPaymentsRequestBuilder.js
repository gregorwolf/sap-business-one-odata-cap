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
exports.CreditCardPaymentsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CreditCardPayments_1 = require("./CreditCardPayments");
/**
 * Request builder class for operations supported on the [[CreditCardPayments]] entity.
 */
var CreditCardPaymentsRequestBuilder = /** @class */ (function (_super) {
    __extends(CreditCardPaymentsRequestBuilder, _super);
    function CreditCardPaymentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CreditCardPayments` entity based on its keys.
     * @param dueDateCode Key property. See [[CreditCardPayments.dueDateCode]].
     * @returns A request builder for creating requests to retrieve one `CreditCardPayments` entity based on its keys.
     */
    CreditCardPaymentsRequestBuilder.prototype.getByKey = function (dueDateCode) {
        return new core_1.GetByKeyRequestBuilderV4(CreditCardPayments_1.CreditCardPayments, { DueDateCode: dueDateCode });
    };
    /**
     * Returns a request builder for querying all `CreditCardPayments` entities.
     * @returns A request builder for creating requests to retrieve all `CreditCardPayments` entities.
     */
    CreditCardPaymentsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CreditCardPayments_1.CreditCardPayments);
    };
    /**
     * Returns a request builder for creating a `CreditCardPayments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditCardPayments`.
     */
    CreditCardPaymentsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CreditCardPayments_1.CreditCardPayments, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CreditCardPayments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditCardPayments`.
     */
    CreditCardPaymentsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CreditCardPayments_1.CreditCardPayments, entity);
    };
    CreditCardPaymentsRequestBuilder.prototype.delete = function (dueDateCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CreditCardPayments_1.CreditCardPayments, dueDateCodeOrEntity instanceof CreditCardPayments_1.CreditCardPayments ? dueDateCodeOrEntity : { DueDateCode: dueDateCodeOrEntity });
    };
    return CreditCardPaymentsRequestBuilder;
}(core_1.RequestBuilder));
exports.CreditCardPaymentsRequestBuilder = CreditCardPaymentsRequestBuilder;
//# sourceMappingURL=CreditCardPaymentsRequestBuilder.js.map
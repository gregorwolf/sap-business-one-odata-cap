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
exports.CreditPaymentMethodsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CreditPaymentMethods_1 = require("./CreditPaymentMethods");
/**
 * Request builder class for operations supported on the [[CreditPaymentMethods]] entity.
 */
var CreditPaymentMethodsRequestBuilder = /** @class */ (function (_super) {
    __extends(CreditPaymentMethodsRequestBuilder, _super);
    function CreditPaymentMethodsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CreditPaymentMethods` entity based on its keys.
     * @param paymentMethodCode Key property. See [[CreditPaymentMethods.paymentMethodCode]].
     * @returns A request builder for creating requests to retrieve one `CreditPaymentMethods` entity based on its keys.
     */
    CreditPaymentMethodsRequestBuilder.prototype.getByKey = function (paymentMethodCode) {
        return new v4_1.GetByKeyRequestBuilder(CreditPaymentMethods_1.CreditPaymentMethods, { PaymentMethodCode: paymentMethodCode });
    };
    /**
     * Returns a request builder for querying all `CreditPaymentMethods` entities.
     * @returns A request builder for creating requests to retrieve all `CreditPaymentMethods` entities.
     */
    CreditPaymentMethodsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CreditPaymentMethods_1.CreditPaymentMethods);
    };
    /**
     * Returns a request builder for creating a `CreditPaymentMethods` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditPaymentMethods`.
     */
    CreditPaymentMethodsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CreditPaymentMethods_1.CreditPaymentMethods, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CreditPaymentMethods`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditPaymentMethods`.
     */
    CreditPaymentMethodsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CreditPaymentMethods_1.CreditPaymentMethods, entity);
    };
    CreditPaymentMethodsRequestBuilder.prototype.delete = function (paymentMethodCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CreditPaymentMethods_1.CreditPaymentMethods, paymentMethodCodeOrEntity instanceof CreditPaymentMethods_1.CreditPaymentMethods ? paymentMethodCodeOrEntity : { PaymentMethodCode: paymentMethodCodeOrEntity });
    };
    return CreditPaymentMethodsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CreditPaymentMethodsRequestBuilder = CreditPaymentMethodsRequestBuilder;
//# sourceMappingURL=CreditPaymentMethodsRequestBuilder.js.map
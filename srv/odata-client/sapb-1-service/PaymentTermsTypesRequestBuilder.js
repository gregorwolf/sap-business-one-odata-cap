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
exports.PaymentTermsTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PaymentTermsTypes_1 = require("./PaymentTermsTypes");
/**
 * Request builder class for operations supported on the [[PaymentTermsTypes]] entity.
 */
var PaymentTermsTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(PaymentTermsTypesRequestBuilder, _super);
    function PaymentTermsTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PaymentTermsTypes` entity based on its keys.
     * @param groupNumber Key property. See [[PaymentTermsTypes.groupNumber]].
     * @returns A request builder for creating requests to retrieve one `PaymentTermsTypes` entity based on its keys.
     */
    PaymentTermsTypesRequestBuilder.prototype.getByKey = function (groupNumber) {
        return new core_1.GetByKeyRequestBuilderV4(PaymentTermsTypes_1.PaymentTermsTypes, { GroupNumber: groupNumber });
    };
    /**
     * Returns a request builder for querying all `PaymentTermsTypes` entities.
     * @returns A request builder for creating requests to retrieve all `PaymentTermsTypes` entities.
     */
    PaymentTermsTypesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PaymentTermsTypes_1.PaymentTermsTypes);
    };
    /**
     * Returns a request builder for creating a `PaymentTermsTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PaymentTermsTypes`.
     */
    PaymentTermsTypesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PaymentTermsTypes_1.PaymentTermsTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PaymentTermsTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PaymentTermsTypes`.
     */
    PaymentTermsTypesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PaymentTermsTypes_1.PaymentTermsTypes, entity);
    };
    PaymentTermsTypesRequestBuilder.prototype.delete = function (groupNumberOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PaymentTermsTypes_1.PaymentTermsTypes, groupNumberOrEntity instanceof PaymentTermsTypes_1.PaymentTermsTypes ? groupNumberOrEntity : { GroupNumber: groupNumberOrEntity });
    };
    return PaymentTermsTypesRequestBuilder;
}(core_1.RequestBuilder));
exports.PaymentTermsTypesRequestBuilder = PaymentTermsTypesRequestBuilder;
//# sourceMappingURL=PaymentTermsTypesRequestBuilder.js.map
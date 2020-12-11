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
exports.BlanketAgreementsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BlanketAgreements_1 = require("./BlanketAgreements");
/**
 * Request builder class for operations supported on the [[BlanketAgreements]] entity.
 */
var BlanketAgreementsRequestBuilder = /** @class */ (function (_super) {
    __extends(BlanketAgreementsRequestBuilder, _super);
    function BlanketAgreementsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BlanketAgreements` entity based on its keys.
     * @param agreementNo Key property. See [[BlanketAgreements.agreementNo]].
     * @returns A request builder for creating requests to retrieve one `BlanketAgreements` entity based on its keys.
     */
    BlanketAgreementsRequestBuilder.prototype.getByKey = function (agreementNo) {
        return new core_1.GetByKeyRequestBuilderV4(BlanketAgreements_1.BlanketAgreements, { AgreementNo: agreementNo });
    };
    /**
     * Returns a request builder for querying all `BlanketAgreements` entities.
     * @returns A request builder for creating requests to retrieve all `BlanketAgreements` entities.
     */
    BlanketAgreementsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BlanketAgreements_1.BlanketAgreements);
    };
    /**
     * Returns a request builder for creating a `BlanketAgreements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BlanketAgreements`.
     */
    BlanketAgreementsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BlanketAgreements_1.BlanketAgreements, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BlanketAgreements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BlanketAgreements`.
     */
    BlanketAgreementsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BlanketAgreements_1.BlanketAgreements, entity);
    };
    BlanketAgreementsRequestBuilder.prototype.delete = function (agreementNoOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BlanketAgreements_1.BlanketAgreements, agreementNoOrEntity instanceof BlanketAgreements_1.BlanketAgreements ? agreementNoOrEntity : { AgreementNo: agreementNoOrEntity });
    };
    return BlanketAgreementsRequestBuilder;
}(core_1.RequestBuilder));
exports.BlanketAgreementsRequestBuilder = BlanketAgreementsRequestBuilder;
//# sourceMappingURL=BlanketAgreementsRequestBuilder.js.map
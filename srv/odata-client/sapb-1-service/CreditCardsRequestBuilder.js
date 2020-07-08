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
exports.CreditCardsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CreditCards_1 = require("./CreditCards");
/**
 * Request builder class for operations supported on the [[CreditCards]] entity.
 */
var CreditCardsRequestBuilder = /** @class */ (function (_super) {
    __extends(CreditCardsRequestBuilder, _super);
    function CreditCardsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CreditCards` entity based on its keys.
     * @param creditCardCode Key property. See [[CreditCards.creditCardCode]].
     * @returns A request builder for creating requests to retrieve one `CreditCards` entity based on its keys.
     */
    CreditCardsRequestBuilder.prototype.getByKey = function (creditCardCode) {
        return new v4_1.GetByKeyRequestBuilder(CreditCards_1.CreditCards, { CreditCardCode: creditCardCode });
    };
    /**
     * Returns a request builder for querying all `CreditCards` entities.
     * @returns A request builder for creating requests to retrieve all `CreditCards` entities.
     */
    CreditCardsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CreditCards_1.CreditCards);
    };
    /**
     * Returns a request builder for creating a `CreditCards` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditCards`.
     */
    CreditCardsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CreditCards_1.CreditCards, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CreditCards`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditCards`.
     */
    CreditCardsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CreditCards_1.CreditCards, entity);
    };
    CreditCardsRequestBuilder.prototype.delete = function (creditCardCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CreditCards_1.CreditCards, creditCardCodeOrEntity instanceof CreditCards_1.CreditCards ? creditCardCodeOrEntity : { CreditCardCode: creditCardCodeOrEntity });
    };
    return CreditCardsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CreditCardsRequestBuilder = CreditCardsRequestBuilder;
//# sourceMappingURL=CreditCardsRequestBuilder.js.map
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
exports.CustomerEquipmentCardsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CustomerEquipmentCards_1 = require("./CustomerEquipmentCards");
/**
 * Request builder class for operations supported on the [[CustomerEquipmentCards]] entity.
 */
var CustomerEquipmentCardsRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomerEquipmentCardsRequestBuilder, _super);
    function CustomerEquipmentCardsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomerEquipmentCards` entity based on its keys.
     * @param equipmentCardNum Key property. See [[CustomerEquipmentCards.equipmentCardNum]].
     * @returns A request builder for creating requests to retrieve one `CustomerEquipmentCards` entity based on its keys.
     */
    CustomerEquipmentCardsRequestBuilder.prototype.getByKey = function (equipmentCardNum) {
        return new v4_1.GetByKeyRequestBuilder(CustomerEquipmentCards_1.CustomerEquipmentCards, { EquipmentCardNum: equipmentCardNum });
    };
    /**
     * Returns a request builder for querying all `CustomerEquipmentCards` entities.
     * @returns A request builder for creating requests to retrieve all `CustomerEquipmentCards` entities.
     */
    CustomerEquipmentCardsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CustomerEquipmentCards_1.CustomerEquipmentCards);
    };
    /**
     * Returns a request builder for creating a `CustomerEquipmentCards` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomerEquipmentCards`.
     */
    CustomerEquipmentCardsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CustomerEquipmentCards_1.CustomerEquipmentCards, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomerEquipmentCards`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomerEquipmentCards`.
     */
    CustomerEquipmentCardsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CustomerEquipmentCards_1.CustomerEquipmentCards, entity);
    };
    CustomerEquipmentCardsRequestBuilder.prototype.delete = function (equipmentCardNumOrEntity) {
        return new v4_1.DeleteRequestBuilder(CustomerEquipmentCards_1.CustomerEquipmentCards, equipmentCardNumOrEntity instanceof CustomerEquipmentCards_1.CustomerEquipmentCards ? equipmentCardNumOrEntity : { EquipmentCardNum: equipmentCardNumOrEntity });
    };
    return CustomerEquipmentCardsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CustomerEquipmentCardsRequestBuilder = CustomerEquipmentCardsRequestBuilder;
//# sourceMappingURL=CustomerEquipmentCardsRequestBuilder.js.map
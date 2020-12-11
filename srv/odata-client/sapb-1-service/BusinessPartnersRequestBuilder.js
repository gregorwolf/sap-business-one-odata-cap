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
exports.BusinessPartnersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartners_1 = require("./BusinessPartners");
/**
 * Request builder class for operations supported on the [[BusinessPartners]] entity.
 */
var BusinessPartnersRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnersRequestBuilder, _super);
    function BusinessPartnersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartners` entity based on its keys.
     * @param cardCode Key property. See [[BusinessPartners.cardCode]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartners` entity based on its keys.
     */
    BusinessPartnersRequestBuilder.prototype.getByKey = function (cardCode) {
        return new core_1.GetByKeyRequestBuilderV4(BusinessPartners_1.BusinessPartners, { CardCode: cardCode });
    };
    /**
     * Returns a request builder for querying all `BusinessPartners` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartners` entities.
     */
    BusinessPartnersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BusinessPartners_1.BusinessPartners);
    };
    /**
     * Returns a request builder for creating a `BusinessPartners` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartners`.
     */
    BusinessPartnersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BusinessPartners_1.BusinessPartners, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartners`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartners`.
     */
    BusinessPartnersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BusinessPartners_1.BusinessPartners, entity);
    };
    BusinessPartnersRequestBuilder.prototype.delete = function (cardCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BusinessPartners_1.BusinessPartners, cardCodeOrEntity instanceof BusinessPartners_1.BusinessPartners ? cardCodeOrEntity : { CardCode: cardCodeOrEntity });
    };
    return BusinessPartnersRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnersRequestBuilder = BusinessPartnersRequestBuilder;
//# sourceMappingURL=BusinessPartnersRequestBuilder.js.map
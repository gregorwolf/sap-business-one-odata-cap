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
exports.ShippingTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ShippingTypes_1 = require("./ShippingTypes");
/**
 * Request builder class for operations supported on the [[ShippingTypes]] entity.
 */
var ShippingTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(ShippingTypesRequestBuilder, _super);
    function ShippingTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ShippingTypes` entity based on its keys.
     * @param code Key property. See [[ShippingTypes.code]].
     * @returns A request builder for creating requests to retrieve one `ShippingTypes` entity based on its keys.
     */
    ShippingTypesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ShippingTypes_1.ShippingTypes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ShippingTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ShippingTypes` entities.
     */
    ShippingTypesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ShippingTypes_1.ShippingTypes);
    };
    /**
     * Returns a request builder for creating a `ShippingTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ShippingTypes`.
     */
    ShippingTypesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ShippingTypes_1.ShippingTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ShippingTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ShippingTypes`.
     */
    ShippingTypesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ShippingTypes_1.ShippingTypes, entity);
    };
    ShippingTypesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ShippingTypes_1.ShippingTypes, codeOrEntity instanceof ShippingTypes_1.ShippingTypes ? codeOrEntity : { Code: codeOrEntity });
    };
    return ShippingTypesRequestBuilder;
}(core_1.RequestBuilder));
exports.ShippingTypesRequestBuilder = ShippingTypesRequestBuilder;
//# sourceMappingURL=ShippingTypesRequestBuilder.js.map
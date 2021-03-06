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
exports.BusinessPlacesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPlaces_1 = require("./BusinessPlaces");
/**
 * Request builder class for operations supported on the [[BusinessPlaces]] entity.
 */
var BusinessPlacesRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPlacesRequestBuilder, _super);
    function BusinessPlacesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPlaces` entity based on its keys.
     * @param bplid Key property. See [[BusinessPlaces.bplid]].
     * @returns A request builder for creating requests to retrieve one `BusinessPlaces` entity based on its keys.
     */
    BusinessPlacesRequestBuilder.prototype.getByKey = function (bplid) {
        return new core_1.GetByKeyRequestBuilderV4(BusinessPlaces_1.BusinessPlaces, { BPLID: bplid });
    };
    /**
     * Returns a request builder for querying all `BusinessPlaces` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPlaces` entities.
     */
    BusinessPlacesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BusinessPlaces_1.BusinessPlaces);
    };
    /**
     * Returns a request builder for creating a `BusinessPlaces` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPlaces`.
     */
    BusinessPlacesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BusinessPlaces_1.BusinessPlaces, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPlaces`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPlaces`.
     */
    BusinessPlacesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BusinessPlaces_1.BusinessPlaces, entity);
    };
    BusinessPlacesRequestBuilder.prototype.delete = function (bplidOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BusinessPlaces_1.BusinessPlaces, bplidOrEntity instanceof BusinessPlaces_1.BusinessPlaces ? bplidOrEntity : { BPLID: bplidOrEntity });
    };
    return BusinessPlacesRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPlacesRequestBuilder = BusinessPlacesRequestBuilder;
//# sourceMappingURL=BusinessPlacesRequestBuilder.js.map
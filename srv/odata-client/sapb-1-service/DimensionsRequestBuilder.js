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
exports.DimensionsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Dimensions_1 = require("./Dimensions");
/**
 * Request builder class for operations supported on the [[Dimensions]] entity.
 */
var DimensionsRequestBuilder = /** @class */ (function (_super) {
    __extends(DimensionsRequestBuilder, _super);
    function DimensionsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Dimensions` entity based on its keys.
     * @param dimensionCode Key property. See [[Dimensions.dimensionCode]].
     * @returns A request builder for creating requests to retrieve one `Dimensions` entity based on its keys.
     */
    DimensionsRequestBuilder.prototype.getByKey = function (dimensionCode) {
        return new v4_1.GetByKeyRequestBuilder(Dimensions_1.Dimensions, { DimensionCode: dimensionCode });
    };
    /**
     * Returns a request builder for querying all `Dimensions` entities.
     * @returns A request builder for creating requests to retrieve all `Dimensions` entities.
     */
    DimensionsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Dimensions_1.Dimensions);
    };
    /**
     * Returns a request builder for creating a `Dimensions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Dimensions`.
     */
    DimensionsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Dimensions_1.Dimensions, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Dimensions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Dimensions`.
     */
    DimensionsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Dimensions_1.Dimensions, entity);
    };
    DimensionsRequestBuilder.prototype.delete = function (dimensionCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(Dimensions_1.Dimensions, dimensionCodeOrEntity instanceof Dimensions_1.Dimensions ? dimensionCodeOrEntity : { DimensionCode: dimensionCodeOrEntity });
    };
    return DimensionsRequestBuilder;
}(v4_1.RequestBuilder));
exports.DimensionsRequestBuilder = DimensionsRequestBuilder;
//# sourceMappingURL=DimensionsRequestBuilder.js.map
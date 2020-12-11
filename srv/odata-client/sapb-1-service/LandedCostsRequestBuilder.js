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
exports.LandedCostsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var LandedCosts_1 = require("./LandedCosts");
/**
 * Request builder class for operations supported on the [[LandedCosts]] entity.
 */
var LandedCostsRequestBuilder = /** @class */ (function (_super) {
    __extends(LandedCostsRequestBuilder, _super);
    function LandedCostsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LandedCosts` entity based on its keys.
     * @param docEntry Key property. See [[LandedCosts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `LandedCosts` entity based on its keys.
     */
    LandedCostsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(LandedCosts_1.LandedCosts, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `LandedCosts` entities.
     * @returns A request builder for creating requests to retrieve all `LandedCosts` entities.
     */
    LandedCostsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(LandedCosts_1.LandedCosts);
    };
    /**
     * Returns a request builder for creating a `LandedCosts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LandedCosts`.
     */
    LandedCostsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(LandedCosts_1.LandedCosts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LandedCosts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LandedCosts`.
     */
    LandedCostsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(LandedCosts_1.LandedCosts, entity);
    };
    LandedCostsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(LandedCosts_1.LandedCosts, docEntryOrEntity instanceof LandedCosts_1.LandedCosts ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return LandedCostsRequestBuilder;
}(core_1.RequestBuilder));
exports.LandedCostsRequestBuilder = LandedCostsRequestBuilder;
//# sourceMappingURL=LandedCostsRequestBuilder.js.map
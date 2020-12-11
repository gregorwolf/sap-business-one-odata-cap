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
exports.LandedCostsCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var LandedCostsCodes_1 = require("./LandedCostsCodes");
/**
 * Request builder class for operations supported on the [[LandedCostsCodes]] entity.
 */
var LandedCostsCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(LandedCostsCodesRequestBuilder, _super);
    function LandedCostsCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LandedCostsCodes` entity based on its keys.
     * @param code Key property. See [[LandedCostsCodes.code]].
     * @returns A request builder for creating requests to retrieve one `LandedCostsCodes` entity based on its keys.
     */
    LandedCostsCodesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(LandedCostsCodes_1.LandedCostsCodes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `LandedCostsCodes` entities.
     * @returns A request builder for creating requests to retrieve all `LandedCostsCodes` entities.
     */
    LandedCostsCodesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(LandedCostsCodes_1.LandedCostsCodes);
    };
    /**
     * Returns a request builder for creating a `LandedCostsCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LandedCostsCodes`.
     */
    LandedCostsCodesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(LandedCostsCodes_1.LandedCostsCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LandedCostsCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LandedCostsCodes`.
     */
    LandedCostsCodesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(LandedCostsCodes_1.LandedCostsCodes, entity);
    };
    LandedCostsCodesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(LandedCostsCodes_1.LandedCostsCodes, codeOrEntity instanceof LandedCostsCodes_1.LandedCostsCodes ? codeOrEntity : { Code: codeOrEntity });
    };
    return LandedCostsCodesRequestBuilder;
}(core_1.RequestBuilder));
exports.LandedCostsCodesRequestBuilder = LandedCostsCodesRequestBuilder;
//# sourceMappingURL=LandedCostsCodesRequestBuilder.js.map
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
exports.DistributionRulesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DistributionRules_1 = require("./DistributionRules");
/**
 * Request builder class for operations supported on the [[DistributionRules]] entity.
 */
var DistributionRulesRequestBuilder = /** @class */ (function (_super) {
    __extends(DistributionRulesRequestBuilder, _super);
    function DistributionRulesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DistributionRules` entity based on its keys.
     * @param factorCode Key property. See [[DistributionRules.factorCode]].
     * @returns A request builder for creating requests to retrieve one `DistributionRules` entity based on its keys.
     */
    DistributionRulesRequestBuilder.prototype.getByKey = function (factorCode) {
        return new v4_1.GetByKeyRequestBuilder(DistributionRules_1.DistributionRules, { FactorCode: factorCode });
    };
    /**
     * Returns a request builder for querying all `DistributionRules` entities.
     * @returns A request builder for creating requests to retrieve all `DistributionRules` entities.
     */
    DistributionRulesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DistributionRules_1.DistributionRules);
    };
    /**
     * Returns a request builder for creating a `DistributionRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DistributionRules`.
     */
    DistributionRulesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DistributionRules_1.DistributionRules, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DistributionRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DistributionRules`.
     */
    DistributionRulesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DistributionRules_1.DistributionRules, entity);
    };
    DistributionRulesRequestBuilder.prototype.delete = function (factorCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(DistributionRules_1.DistributionRules, factorCodeOrEntity instanceof DistributionRules_1.DistributionRules ? factorCodeOrEntity : { FactorCode: factorCodeOrEntity });
    };
    return DistributionRulesRequestBuilder;
}(v4_1.RequestBuilder));
exports.DistributionRulesRequestBuilder = DistributionRulesRequestBuilder;
//# sourceMappingURL=DistributionRulesRequestBuilder.js.map
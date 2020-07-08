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
exports.FactoringIndicatorsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var FactoringIndicators_1 = require("./FactoringIndicators");
/**
 * Request builder class for operations supported on the [[FactoringIndicators]] entity.
 */
var FactoringIndicatorsRequestBuilder = /** @class */ (function (_super) {
    __extends(FactoringIndicatorsRequestBuilder, _super);
    function FactoringIndicatorsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FactoringIndicators` entity based on its keys.
     * @param indicatorCode Key property. See [[FactoringIndicators.indicatorCode]].
     * @returns A request builder for creating requests to retrieve one `FactoringIndicators` entity based on its keys.
     */
    FactoringIndicatorsRequestBuilder.prototype.getByKey = function (indicatorCode) {
        return new v4_1.GetByKeyRequestBuilder(FactoringIndicators_1.FactoringIndicators, { IndicatorCode: indicatorCode });
    };
    /**
     * Returns a request builder for querying all `FactoringIndicators` entities.
     * @returns A request builder for creating requests to retrieve all `FactoringIndicators` entities.
     */
    FactoringIndicatorsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(FactoringIndicators_1.FactoringIndicators);
    };
    /**
     * Returns a request builder for creating a `FactoringIndicators` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FactoringIndicators`.
     */
    FactoringIndicatorsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(FactoringIndicators_1.FactoringIndicators, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FactoringIndicators`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FactoringIndicators`.
     */
    FactoringIndicatorsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(FactoringIndicators_1.FactoringIndicators, entity);
    };
    FactoringIndicatorsRequestBuilder.prototype.delete = function (indicatorCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(FactoringIndicators_1.FactoringIndicators, indicatorCodeOrEntity instanceof FactoringIndicators_1.FactoringIndicators ? indicatorCodeOrEntity : { IndicatorCode: indicatorCodeOrEntity });
    };
    return FactoringIndicatorsRequestBuilder;
}(v4_1.RequestBuilder));
exports.FactoringIndicatorsRequestBuilder = FactoringIndicatorsRequestBuilder;
//# sourceMappingURL=FactoringIndicatorsRequestBuilder.js.map
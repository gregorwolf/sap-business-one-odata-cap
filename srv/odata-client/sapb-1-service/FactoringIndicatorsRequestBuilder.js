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
exports.FactoringIndicatorsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(FactoringIndicators_1.FactoringIndicators, { IndicatorCode: indicatorCode });
    };
    /**
     * Returns a request builder for querying all `FactoringIndicators` entities.
     * @returns A request builder for creating requests to retrieve all `FactoringIndicators` entities.
     */
    FactoringIndicatorsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(FactoringIndicators_1.FactoringIndicators);
    };
    /**
     * Returns a request builder for creating a `FactoringIndicators` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FactoringIndicators`.
     */
    FactoringIndicatorsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(FactoringIndicators_1.FactoringIndicators, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FactoringIndicators`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FactoringIndicators`.
     */
    FactoringIndicatorsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(FactoringIndicators_1.FactoringIndicators, entity);
    };
    FactoringIndicatorsRequestBuilder.prototype.delete = function (indicatorCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(FactoringIndicators_1.FactoringIndicators, indicatorCodeOrEntity instanceof FactoringIndicators_1.FactoringIndicators ? indicatorCodeOrEntity : { IndicatorCode: indicatorCodeOrEntity });
    };
    return FactoringIndicatorsRequestBuilder;
}(core_1.RequestBuilder));
exports.FactoringIndicatorsRequestBuilder = FactoringIndicatorsRequestBuilder;
//# sourceMappingURL=FactoringIndicatorsRequestBuilder.js.map
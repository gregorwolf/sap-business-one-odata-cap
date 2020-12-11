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
exports.WeightMeasuresRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var WeightMeasures_1 = require("./WeightMeasures");
/**
 * Request builder class for operations supported on the [[WeightMeasures]] entity.
 */
var WeightMeasuresRequestBuilder = /** @class */ (function (_super) {
    __extends(WeightMeasuresRequestBuilder, _super);
    function WeightMeasuresRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WeightMeasures` entity based on its keys.
     * @param unitCode Key property. See [[WeightMeasures.unitCode]].
     * @returns A request builder for creating requests to retrieve one `WeightMeasures` entity based on its keys.
     */
    WeightMeasuresRequestBuilder.prototype.getByKey = function (unitCode) {
        return new core_1.GetByKeyRequestBuilderV4(WeightMeasures_1.WeightMeasures, { UnitCode: unitCode });
    };
    /**
     * Returns a request builder for querying all `WeightMeasures` entities.
     * @returns A request builder for creating requests to retrieve all `WeightMeasures` entities.
     */
    WeightMeasuresRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(WeightMeasures_1.WeightMeasures);
    };
    /**
     * Returns a request builder for creating a `WeightMeasures` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WeightMeasures`.
     */
    WeightMeasuresRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(WeightMeasures_1.WeightMeasures, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WeightMeasures`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WeightMeasures`.
     */
    WeightMeasuresRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(WeightMeasures_1.WeightMeasures, entity);
    };
    WeightMeasuresRequestBuilder.prototype.delete = function (unitCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(WeightMeasures_1.WeightMeasures, unitCodeOrEntity instanceof WeightMeasures_1.WeightMeasures ? unitCodeOrEntity : { UnitCode: unitCodeOrEntity });
    };
    return WeightMeasuresRequestBuilder;
}(core_1.RequestBuilder));
exports.WeightMeasuresRequestBuilder = WeightMeasuresRequestBuilder;
//# sourceMappingURL=WeightMeasuresRequestBuilder.js.map
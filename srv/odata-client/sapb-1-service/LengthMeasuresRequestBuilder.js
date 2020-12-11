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
exports.LengthMeasuresRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var LengthMeasures_1 = require("./LengthMeasures");
/**
 * Request builder class for operations supported on the [[LengthMeasures]] entity.
 */
var LengthMeasuresRequestBuilder = /** @class */ (function (_super) {
    __extends(LengthMeasuresRequestBuilder, _super);
    function LengthMeasuresRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LengthMeasures` entity based on its keys.
     * @param unitCode Key property. See [[LengthMeasures.unitCode]].
     * @returns A request builder for creating requests to retrieve one `LengthMeasures` entity based on its keys.
     */
    LengthMeasuresRequestBuilder.prototype.getByKey = function (unitCode) {
        return new core_1.GetByKeyRequestBuilderV4(LengthMeasures_1.LengthMeasures, { UnitCode: unitCode });
    };
    /**
     * Returns a request builder for querying all `LengthMeasures` entities.
     * @returns A request builder for creating requests to retrieve all `LengthMeasures` entities.
     */
    LengthMeasuresRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(LengthMeasures_1.LengthMeasures);
    };
    /**
     * Returns a request builder for creating a `LengthMeasures` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LengthMeasures`.
     */
    LengthMeasuresRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(LengthMeasures_1.LengthMeasures, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LengthMeasures`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LengthMeasures`.
     */
    LengthMeasuresRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(LengthMeasures_1.LengthMeasures, entity);
    };
    LengthMeasuresRequestBuilder.prototype.delete = function (unitCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(LengthMeasures_1.LengthMeasures, unitCodeOrEntity instanceof LengthMeasures_1.LengthMeasures ? unitCodeOrEntity : { UnitCode: unitCodeOrEntity });
    };
    return LengthMeasuresRequestBuilder;
}(core_1.RequestBuilder));
exports.LengthMeasuresRequestBuilder = LengthMeasuresRequestBuilder;
//# sourceMappingURL=LengthMeasuresRequestBuilder.js.map
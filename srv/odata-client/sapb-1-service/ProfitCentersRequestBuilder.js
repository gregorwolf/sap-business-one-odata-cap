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
exports.ProfitCentersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ProfitCenters_1 = require("./ProfitCenters");
/**
 * Request builder class for operations supported on the [[ProfitCenters]] entity.
 */
var ProfitCentersRequestBuilder = /** @class */ (function (_super) {
    __extends(ProfitCentersRequestBuilder, _super);
    function ProfitCentersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ProfitCenters` entity based on its keys.
     * @param centerCode Key property. See [[ProfitCenters.centerCode]].
     * @returns A request builder for creating requests to retrieve one `ProfitCenters` entity based on its keys.
     */
    ProfitCentersRequestBuilder.prototype.getByKey = function (centerCode) {
        return new core_1.GetByKeyRequestBuilderV4(ProfitCenters_1.ProfitCenters, { CenterCode: centerCode });
    };
    /**
     * Returns a request builder for querying all `ProfitCenters` entities.
     * @returns A request builder for creating requests to retrieve all `ProfitCenters` entities.
     */
    ProfitCentersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ProfitCenters_1.ProfitCenters);
    };
    /**
     * Returns a request builder for creating a `ProfitCenters` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProfitCenters`.
     */
    ProfitCentersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ProfitCenters_1.ProfitCenters, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ProfitCenters`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProfitCenters`.
     */
    ProfitCentersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ProfitCenters_1.ProfitCenters, entity);
    };
    ProfitCentersRequestBuilder.prototype.delete = function (centerCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ProfitCenters_1.ProfitCenters, centerCodeOrEntity instanceof ProfitCenters_1.ProfitCenters ? centerCodeOrEntity : { CenterCode: centerCodeOrEntity });
    };
    return ProfitCentersRequestBuilder;
}(core_1.RequestBuilder));
exports.ProfitCentersRequestBuilder = ProfitCentersRequestBuilder;
//# sourceMappingURL=ProfitCentersRequestBuilder.js.map
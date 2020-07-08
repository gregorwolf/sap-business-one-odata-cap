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
exports.DeterminationCriteriasRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DeterminationCriterias_1 = require("./DeterminationCriterias");
/**
 * Request builder class for operations supported on the [[DeterminationCriterias]] entity.
 */
var DeterminationCriteriasRequestBuilder = /** @class */ (function (_super) {
    __extends(DeterminationCriteriasRequestBuilder, _super);
    function DeterminationCriteriasRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DeterminationCriterias` entity based on its keys.
     * @param dmcId Key property. See [[DeterminationCriterias.dmcId]].
     * @returns A request builder for creating requests to retrieve one `DeterminationCriterias` entity based on its keys.
     */
    DeterminationCriteriasRequestBuilder.prototype.getByKey = function (dmcId) {
        return new v4_1.GetByKeyRequestBuilder(DeterminationCriterias_1.DeterminationCriterias, { DmcId: dmcId });
    };
    /**
     * Returns a request builder for querying all `DeterminationCriterias` entities.
     * @returns A request builder for creating requests to retrieve all `DeterminationCriterias` entities.
     */
    DeterminationCriteriasRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DeterminationCriterias_1.DeterminationCriterias);
    };
    /**
     * Returns a request builder for creating a `DeterminationCriterias` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeterminationCriterias`.
     */
    DeterminationCriteriasRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DeterminationCriterias_1.DeterminationCriterias, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DeterminationCriterias`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeterminationCriterias`.
     */
    DeterminationCriteriasRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DeterminationCriterias_1.DeterminationCriterias, entity);
    };
    DeterminationCriteriasRequestBuilder.prototype.delete = function (dmcIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(DeterminationCriterias_1.DeterminationCriterias, dmcIdOrEntity instanceof DeterminationCriterias_1.DeterminationCriterias ? dmcIdOrEntity : { DmcId: dmcIdOrEntity });
    };
    return DeterminationCriteriasRequestBuilder;
}(v4_1.RequestBuilder));
exports.DeterminationCriteriasRequestBuilder = DeterminationCriteriasRequestBuilder;
//# sourceMappingURL=DeterminationCriteriasRequestBuilder.js.map
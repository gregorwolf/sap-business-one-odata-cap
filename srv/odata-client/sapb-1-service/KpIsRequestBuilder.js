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
exports.KpIsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var KpIs_1 = require("./KpIs");
/**
 * Request builder class for operations supported on the [[KpIs]] entity.
 */
var KpIsRequestBuilder = /** @class */ (function (_super) {
    __extends(KpIsRequestBuilder, _super);
    function KpIsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `KpIs` entity based on its keys.
     * @param kpiCode Key property. See [[KpIs.kpiCode]].
     * @returns A request builder for creating requests to retrieve one `KpIs` entity based on its keys.
     */
    KpIsRequestBuilder.prototype.getByKey = function (kpiCode) {
        return new v4_1.GetByKeyRequestBuilder(KpIs_1.KpIs, { KPICode: kpiCode });
    };
    /**
     * Returns a request builder for querying all `KpIs` entities.
     * @returns A request builder for creating requests to retrieve all `KpIs` entities.
     */
    KpIsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(KpIs_1.KpIs);
    };
    /**
     * Returns a request builder for creating a `KpIs` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `KpIs`.
     */
    KpIsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(KpIs_1.KpIs, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `KpIs`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `KpIs`.
     */
    KpIsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(KpIs_1.KpIs, entity);
    };
    KpIsRequestBuilder.prototype.delete = function (kpiCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(KpIs_1.KpIs, kpiCodeOrEntity instanceof KpIs_1.KpIs ? kpiCodeOrEntity : { KPICode: kpiCodeOrEntity });
    };
    return KpIsRequestBuilder;
}(v4_1.RequestBuilder));
exports.KpIsRequestBuilder = KpIsRequestBuilder;
//# sourceMappingURL=KpIsRequestBuilder.js.map
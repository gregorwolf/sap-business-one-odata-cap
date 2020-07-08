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
exports.TaxCodeDeterminationsTcdRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var TaxCodeDeterminationsTcd_1 = require("./TaxCodeDeterminationsTcd");
/**
 * Request builder class for operations supported on the [[TaxCodeDeterminationsTcd]] entity.
 */
var TaxCodeDeterminationsTcdRequestBuilder = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationsTcdRequestBuilder, _super);
    function TaxCodeDeterminationsTcdRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TaxCodeDeterminationsTcd` entity based on its keys.
     * @param absId Key property. See [[TaxCodeDeterminationsTcd.absId]].
     * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminationsTcd` entity based on its keys.
     */
    TaxCodeDeterminationsTcdRequestBuilder.prototype.getByKey = function (absId) {
        return new v4_1.GetByKeyRequestBuilder(TaxCodeDeterminationsTcd_1.TaxCodeDeterminationsTcd, { AbsId: absId });
    };
    /**
     * Returns a request builder for querying all `TaxCodeDeterminationsTcd` entities.
     * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminationsTcd` entities.
     */
    TaxCodeDeterminationsTcdRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(TaxCodeDeterminationsTcd_1.TaxCodeDeterminationsTcd);
    };
    /**
     * Returns a request builder for creating a `TaxCodeDeterminationsTcd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminationsTcd`.
     */
    TaxCodeDeterminationsTcdRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(TaxCodeDeterminationsTcd_1.TaxCodeDeterminationsTcd, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TaxCodeDeterminationsTcd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminationsTcd`.
     */
    TaxCodeDeterminationsTcdRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(TaxCodeDeterminationsTcd_1.TaxCodeDeterminationsTcd, entity);
    };
    TaxCodeDeterminationsTcdRequestBuilder.prototype.delete = function (absIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(TaxCodeDeterminationsTcd_1.TaxCodeDeterminationsTcd, absIdOrEntity instanceof TaxCodeDeterminationsTcd_1.TaxCodeDeterminationsTcd ? absIdOrEntity : { AbsId: absIdOrEntity });
    };
    return TaxCodeDeterminationsTcdRequestBuilder;
}(v4_1.RequestBuilder));
exports.TaxCodeDeterminationsTcdRequestBuilder = TaxCodeDeterminationsTcdRequestBuilder;
//# sourceMappingURL=TaxCodeDeterminationsTcdRequestBuilder.js.map
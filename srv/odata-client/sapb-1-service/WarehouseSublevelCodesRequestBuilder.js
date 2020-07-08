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
exports.WarehouseSublevelCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var WarehouseSublevelCodes_1 = require("./WarehouseSublevelCodes");
/**
 * Request builder class for operations supported on the [[WarehouseSublevelCodes]] entity.
 */
var WarehouseSublevelCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(WarehouseSublevelCodesRequestBuilder, _super);
    function WarehouseSublevelCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WarehouseSublevelCodes` entity based on its keys.
     * @param absEntry Key property. See [[WarehouseSublevelCodes.absEntry]].
     * @returns A request builder for creating requests to retrieve one `WarehouseSublevelCodes` entity based on its keys.
     */
    WarehouseSublevelCodesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(WarehouseSublevelCodes_1.WarehouseSublevelCodes, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `WarehouseSublevelCodes` entities.
     * @returns A request builder for creating requests to retrieve all `WarehouseSublevelCodes` entities.
     */
    WarehouseSublevelCodesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(WarehouseSublevelCodes_1.WarehouseSublevelCodes);
    };
    /**
     * Returns a request builder for creating a `WarehouseSublevelCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WarehouseSublevelCodes`.
     */
    WarehouseSublevelCodesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(WarehouseSublevelCodes_1.WarehouseSublevelCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WarehouseSublevelCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WarehouseSublevelCodes`.
     */
    WarehouseSublevelCodesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(WarehouseSublevelCodes_1.WarehouseSublevelCodes, entity);
    };
    WarehouseSublevelCodesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(WarehouseSublevelCodes_1.WarehouseSublevelCodes, absEntryOrEntity instanceof WarehouseSublevelCodes_1.WarehouseSublevelCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return WarehouseSublevelCodesRequestBuilder;
}(v4_1.RequestBuilder));
exports.WarehouseSublevelCodesRequestBuilder = WarehouseSublevelCodesRequestBuilder;
//# sourceMappingURL=WarehouseSublevelCodesRequestBuilder.js.map
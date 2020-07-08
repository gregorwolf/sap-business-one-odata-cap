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
exports.BarCodesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BarCodes_1 = require("./BarCodes");
/**
 * Request builder class for operations supported on the [[BarCodes]] entity.
 */
var BarCodesRequestBuilder = /** @class */ (function (_super) {
    __extends(BarCodesRequestBuilder, _super);
    function BarCodesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BarCodes` entity based on its keys.
     * @param absEntry Key property. See [[BarCodes.absEntry]].
     * @returns A request builder for creating requests to retrieve one `BarCodes` entity based on its keys.
     */
    BarCodesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(BarCodes_1.BarCodes, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `BarCodes` entities.
     * @returns A request builder for creating requests to retrieve all `BarCodes` entities.
     */
    BarCodesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BarCodes_1.BarCodes);
    };
    /**
     * Returns a request builder for creating a `BarCodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BarCodes`.
     */
    BarCodesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BarCodes_1.BarCodes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BarCodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BarCodes`.
     */
    BarCodesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BarCodes_1.BarCodes, entity);
    };
    BarCodesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(BarCodes_1.BarCodes, absEntryOrEntity instanceof BarCodes_1.BarCodes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return BarCodesRequestBuilder;
}(v4_1.RequestBuilder));
exports.BarCodesRequestBuilder = BarCodesRequestBuilder;
//# sourceMappingURL=BarCodesRequestBuilder.js.map
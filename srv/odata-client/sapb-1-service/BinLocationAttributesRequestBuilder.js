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
exports.BinLocationAttributesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BinLocationAttributes_1 = require("./BinLocationAttributes");
/**
 * Request builder class for operations supported on the [[BinLocationAttributes]] entity.
 */
var BinLocationAttributesRequestBuilder = /** @class */ (function (_super) {
    __extends(BinLocationAttributesRequestBuilder, _super);
    function BinLocationAttributesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BinLocationAttributes` entity based on its keys.
     * @param absEntry Key property. See [[BinLocationAttributes.absEntry]].
     * @returns A request builder for creating requests to retrieve one `BinLocationAttributes` entity based on its keys.
     */
    BinLocationAttributesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(BinLocationAttributes_1.BinLocationAttributes, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `BinLocationAttributes` entities.
     * @returns A request builder for creating requests to retrieve all `BinLocationAttributes` entities.
     */
    BinLocationAttributesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BinLocationAttributes_1.BinLocationAttributes);
    };
    /**
     * Returns a request builder for creating a `BinLocationAttributes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BinLocationAttributes`.
     */
    BinLocationAttributesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BinLocationAttributes_1.BinLocationAttributes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BinLocationAttributes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BinLocationAttributes`.
     */
    BinLocationAttributesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BinLocationAttributes_1.BinLocationAttributes, entity);
    };
    BinLocationAttributesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(BinLocationAttributes_1.BinLocationAttributes, absEntryOrEntity instanceof BinLocationAttributes_1.BinLocationAttributes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return BinLocationAttributesRequestBuilder;
}(v4_1.RequestBuilder));
exports.BinLocationAttributesRequestBuilder = BinLocationAttributesRequestBuilder;
//# sourceMappingURL=BinLocationAttributesRequestBuilder.js.map
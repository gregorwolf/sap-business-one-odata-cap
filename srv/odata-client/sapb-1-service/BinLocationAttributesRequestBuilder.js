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
exports.BinLocationAttributesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(BinLocationAttributes_1.BinLocationAttributes, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `BinLocationAttributes` entities.
     * @returns A request builder for creating requests to retrieve all `BinLocationAttributes` entities.
     */
    BinLocationAttributesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BinLocationAttributes_1.BinLocationAttributes);
    };
    /**
     * Returns a request builder for creating a `BinLocationAttributes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BinLocationAttributes`.
     */
    BinLocationAttributesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BinLocationAttributes_1.BinLocationAttributes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BinLocationAttributes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BinLocationAttributes`.
     */
    BinLocationAttributesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BinLocationAttributes_1.BinLocationAttributes, entity);
    };
    BinLocationAttributesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BinLocationAttributes_1.BinLocationAttributes, absEntryOrEntity instanceof BinLocationAttributes_1.BinLocationAttributes ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return BinLocationAttributesRequestBuilder;
}(core_1.RequestBuilder));
exports.BinLocationAttributesRequestBuilder = BinLocationAttributesRequestBuilder;
//# sourceMappingURL=BinLocationAttributesRequestBuilder.js.map
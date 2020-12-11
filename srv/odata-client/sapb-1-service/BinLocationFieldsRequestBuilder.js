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
exports.BinLocationFieldsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BinLocationFields_1 = require("./BinLocationFields");
/**
 * Request builder class for operations supported on the [[BinLocationFields]] entity.
 */
var BinLocationFieldsRequestBuilder = /** @class */ (function (_super) {
    __extends(BinLocationFieldsRequestBuilder, _super);
    function BinLocationFieldsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BinLocationFields` entity based on its keys.
     * @param absEntry Key property. See [[BinLocationFields.absEntry]].
     * @returns A request builder for creating requests to retrieve one `BinLocationFields` entity based on its keys.
     */
    BinLocationFieldsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(BinLocationFields_1.BinLocationFields, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `BinLocationFields` entities.
     * @returns A request builder for creating requests to retrieve all `BinLocationFields` entities.
     */
    BinLocationFieldsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BinLocationFields_1.BinLocationFields);
    };
    /**
     * Returns a request builder for creating a `BinLocationFields` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BinLocationFields`.
     */
    BinLocationFieldsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BinLocationFields_1.BinLocationFields, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BinLocationFields`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BinLocationFields`.
     */
    BinLocationFieldsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BinLocationFields_1.BinLocationFields, entity);
    };
    BinLocationFieldsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BinLocationFields_1.BinLocationFields, absEntryOrEntity instanceof BinLocationFields_1.BinLocationFields ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return BinLocationFieldsRequestBuilder;
}(core_1.RequestBuilder));
exports.BinLocationFieldsRequestBuilder = BinLocationFieldsRequestBuilder;
//# sourceMappingURL=BinLocationFieldsRequestBuilder.js.map
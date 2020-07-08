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
exports.DynamicSystemStringsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DynamicSystemStrings_1 = require("./DynamicSystemStrings");
/**
 * Request builder class for operations supported on the [[DynamicSystemStrings]] entity.
 */
var DynamicSystemStringsRequestBuilder = /** @class */ (function (_super) {
    __extends(DynamicSystemStringsRequestBuilder, _super);
    function DynamicSystemStringsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DynamicSystemStrings` entity based on its keys.
     * @param formId Key property. See [[DynamicSystemStrings.formId]].
     * @param itemId Key property. See [[DynamicSystemStrings.itemId]].
     * @param columnId Key property. See [[DynamicSystemStrings.columnId]].
     * @returns A request builder for creating requests to retrieve one `DynamicSystemStrings` entity based on its keys.
     */
    DynamicSystemStringsRequestBuilder.prototype.getByKey = function (formId, itemId, columnId) {
        return new v4_1.GetByKeyRequestBuilder(DynamicSystemStrings_1.DynamicSystemStrings, {
            FormID: formId,
            ItemID: itemId,
            ColumnID: columnId
        });
    };
    /**
     * Returns a request builder for querying all `DynamicSystemStrings` entities.
     * @returns A request builder for creating requests to retrieve all `DynamicSystemStrings` entities.
     */
    DynamicSystemStringsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DynamicSystemStrings_1.DynamicSystemStrings);
    };
    /**
     * Returns a request builder for creating a `DynamicSystemStrings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DynamicSystemStrings`.
     */
    DynamicSystemStringsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DynamicSystemStrings_1.DynamicSystemStrings, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DynamicSystemStrings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DynamicSystemStrings`.
     */
    DynamicSystemStringsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DynamicSystemStrings_1.DynamicSystemStrings, entity);
    };
    DynamicSystemStringsRequestBuilder.prototype.delete = function (formIdOrEntity, itemId, columnId) {
        return new v4_1.DeleteRequestBuilder(DynamicSystemStrings_1.DynamicSystemStrings, formIdOrEntity instanceof DynamicSystemStrings_1.DynamicSystemStrings ? formIdOrEntity : {
            FormID: formIdOrEntity,
            ItemID: itemId,
            ColumnID: columnId
        });
    };
    return DynamicSystemStringsRequestBuilder;
}(v4_1.RequestBuilder));
exports.DynamicSystemStringsRequestBuilder = DynamicSystemStringsRequestBuilder;
//# sourceMappingURL=DynamicSystemStringsRequestBuilder.js.map
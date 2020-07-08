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
exports.ValueMappingRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ValueMapping_1 = require("./ValueMapping");
/**
 * Request builder class for operations supported on the [[ValueMapping]] entity.
 */
var ValueMappingRequestBuilder = /** @class */ (function (_super) {
    __extends(ValueMappingRequestBuilder, _super);
    function ValueMappingRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ValueMapping` entity based on its keys.
     * @param absEntry Key property. See [[ValueMapping.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ValueMapping` entity based on its keys.
     */
    ValueMappingRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(ValueMapping_1.ValueMapping, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `ValueMapping` entities.
     * @returns A request builder for creating requests to retrieve all `ValueMapping` entities.
     */
    ValueMappingRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ValueMapping_1.ValueMapping);
    };
    /**
     * Returns a request builder for creating a `ValueMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ValueMapping`.
     */
    ValueMappingRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ValueMapping_1.ValueMapping, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ValueMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ValueMapping`.
     */
    ValueMappingRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ValueMapping_1.ValueMapping, entity);
    };
    ValueMappingRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(ValueMapping_1.ValueMapping, absEntryOrEntity instanceof ValueMapping_1.ValueMapping ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return ValueMappingRequestBuilder;
}(v4_1.RequestBuilder));
exports.ValueMappingRequestBuilder = ValueMappingRequestBuilder;
//# sourceMappingURL=ValueMappingRequestBuilder.js.map
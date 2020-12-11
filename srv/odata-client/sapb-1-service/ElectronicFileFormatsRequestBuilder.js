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
exports.ElectronicFileFormatsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ElectronicFileFormats_1 = require("./ElectronicFileFormats");
/**
 * Request builder class for operations supported on the [[ElectronicFileFormats]] entity.
 */
var ElectronicFileFormatsRequestBuilder = /** @class */ (function (_super) {
    __extends(ElectronicFileFormatsRequestBuilder, _super);
    function ElectronicFileFormatsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ElectronicFileFormats` entity based on its keys.
     * @param formatId Key property. See [[ElectronicFileFormats.formatId]].
     * @returns A request builder for creating requests to retrieve one `ElectronicFileFormats` entity based on its keys.
     */
    ElectronicFileFormatsRequestBuilder.prototype.getByKey = function (formatId) {
        return new core_1.GetByKeyRequestBuilderV4(ElectronicFileFormats_1.ElectronicFileFormats, { FormatID: formatId });
    };
    /**
     * Returns a request builder for querying all `ElectronicFileFormats` entities.
     * @returns A request builder for creating requests to retrieve all `ElectronicFileFormats` entities.
     */
    ElectronicFileFormatsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ElectronicFileFormats_1.ElectronicFileFormats);
    };
    /**
     * Returns a request builder for creating a `ElectronicFileFormats` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ElectronicFileFormats`.
     */
    ElectronicFileFormatsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ElectronicFileFormats_1.ElectronicFileFormats, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ElectronicFileFormats`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ElectronicFileFormats`.
     */
    ElectronicFileFormatsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ElectronicFileFormats_1.ElectronicFileFormats, entity);
    };
    ElectronicFileFormatsRequestBuilder.prototype.delete = function (formatIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ElectronicFileFormats_1.ElectronicFileFormats, formatIdOrEntity instanceof ElectronicFileFormats_1.ElectronicFileFormats ? formatIdOrEntity : { FormatID: formatIdOrEntity });
    };
    return ElectronicFileFormatsRequestBuilder;
}(core_1.RequestBuilder));
exports.ElectronicFileFormatsRequestBuilder = ElectronicFileFormatsRequestBuilder;
//# sourceMappingURL=ElectronicFileFormatsRequestBuilder.js.map
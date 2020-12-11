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
exports.AssetRetirementRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AssetRetirement_1 = require("./AssetRetirement");
/**
 * Request builder class for operations supported on the [[AssetRetirement]] entity.
 */
var AssetRetirementRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetRetirementRequestBuilder, _super);
    function AssetRetirementRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetRetirement` entity based on its keys.
     * @param docEntry Key property. See [[AssetRetirement.docEntry]].
     * @returns A request builder for creating requests to retrieve one `AssetRetirement` entity based on its keys.
     */
    AssetRetirementRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(AssetRetirement_1.AssetRetirement, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `AssetRetirement` entities.
     * @returns A request builder for creating requests to retrieve all `AssetRetirement` entities.
     */
    AssetRetirementRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AssetRetirement_1.AssetRetirement);
    };
    /**
     * Returns a request builder for creating a `AssetRetirement` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetRetirement`.
     */
    AssetRetirementRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AssetRetirement_1.AssetRetirement, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetRetirement`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetRetirement`.
     */
    AssetRetirementRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AssetRetirement_1.AssetRetirement, entity);
    };
    AssetRetirementRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(AssetRetirement_1.AssetRetirement, docEntryOrEntity instanceof AssetRetirement_1.AssetRetirement ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return AssetRetirementRequestBuilder;
}(core_1.RequestBuilder));
exports.AssetRetirementRequestBuilder = AssetRetirementRequestBuilder;
//# sourceMappingURL=AssetRetirementRequestBuilder.js.map
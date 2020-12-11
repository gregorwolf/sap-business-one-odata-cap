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
exports.NfModelsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var NfModels_1 = require("./NfModels");
/**
 * Request builder class for operations supported on the [[NfModels]] entity.
 */
var NfModelsRequestBuilder = /** @class */ (function (_super) {
    __extends(NfModelsRequestBuilder, _super);
    function NfModelsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NfModels` entity based on its keys.
     * @param absEntry Key property. See [[NfModels.absEntry]].
     * @returns A request builder for creating requests to retrieve one `NfModels` entity based on its keys.
     */
    NfModelsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(NfModels_1.NfModels, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `NfModels` entities.
     * @returns A request builder for creating requests to retrieve all `NfModels` entities.
     */
    NfModelsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(NfModels_1.NfModels);
    };
    /**
     * Returns a request builder for creating a `NfModels` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NfModels`.
     */
    NfModelsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(NfModels_1.NfModels, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `NfModels`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NfModels`.
     */
    NfModelsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(NfModels_1.NfModels, entity);
    };
    NfModelsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(NfModels_1.NfModels, absEntryOrEntity instanceof NfModels_1.NfModels ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return NfModelsRequestBuilder;
}(core_1.RequestBuilder));
exports.NfModelsRequestBuilder = NfModelsRequestBuilder;
//# sourceMappingURL=NfModelsRequestBuilder.js.map
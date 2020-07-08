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
exports.NcmCodesSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var NcmCodesSetup_1 = require("./NcmCodesSetup");
/**
 * Request builder class for operations supported on the [[NcmCodesSetup]] entity.
 */
var NcmCodesSetupRequestBuilder = /** @class */ (function (_super) {
    __extends(NcmCodesSetupRequestBuilder, _super);
    function NcmCodesSetupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NcmCodesSetup` entity based on its keys.
     * @param absEntry Key property. See [[NcmCodesSetup.absEntry]].
     * @returns A request builder for creating requests to retrieve one `NcmCodesSetup` entity based on its keys.
     */
    NcmCodesSetupRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(NcmCodesSetup_1.NcmCodesSetup, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `NcmCodesSetup` entities.
     * @returns A request builder for creating requests to retrieve all `NcmCodesSetup` entities.
     */
    NcmCodesSetupRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(NcmCodesSetup_1.NcmCodesSetup);
    };
    /**
     * Returns a request builder for creating a `NcmCodesSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NcmCodesSetup`.
     */
    NcmCodesSetupRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(NcmCodesSetup_1.NcmCodesSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `NcmCodesSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NcmCodesSetup`.
     */
    NcmCodesSetupRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(NcmCodesSetup_1.NcmCodesSetup, entity);
    };
    NcmCodesSetupRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(NcmCodesSetup_1.NcmCodesSetup, absEntryOrEntity instanceof NcmCodesSetup_1.NcmCodesSetup ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return NcmCodesSetupRequestBuilder;
}(v4_1.RequestBuilder));
exports.NcmCodesSetupRequestBuilder = NcmCodesSetupRequestBuilder;
//# sourceMappingURL=NcmCodesSetupRequestBuilder.js.map
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
exports.DnfCodeSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DnfCodeSetup_1 = require("./DnfCodeSetup");
/**
 * Request builder class for operations supported on the [[DnfCodeSetup]] entity.
 */
var DnfCodeSetupRequestBuilder = /** @class */ (function (_super) {
    __extends(DnfCodeSetupRequestBuilder, _super);
    function DnfCodeSetupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DnfCodeSetup` entity based on its keys.
     * @param absEntry Key property. See [[DnfCodeSetup.absEntry]].
     * @returns A request builder for creating requests to retrieve one `DnfCodeSetup` entity based on its keys.
     */
    DnfCodeSetupRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(DnfCodeSetup_1.DnfCodeSetup, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `DnfCodeSetup` entities.
     * @returns A request builder for creating requests to retrieve all `DnfCodeSetup` entities.
     */
    DnfCodeSetupRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DnfCodeSetup_1.DnfCodeSetup);
    };
    /**
     * Returns a request builder for creating a `DnfCodeSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DnfCodeSetup`.
     */
    DnfCodeSetupRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DnfCodeSetup_1.DnfCodeSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DnfCodeSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DnfCodeSetup`.
     */
    DnfCodeSetupRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DnfCodeSetup_1.DnfCodeSetup, entity);
    };
    DnfCodeSetupRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(DnfCodeSetup_1.DnfCodeSetup, absEntryOrEntity instanceof DnfCodeSetup_1.DnfCodeSetup ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return DnfCodeSetupRequestBuilder;
}(v4_1.RequestBuilder));
exports.DnfCodeSetupRequestBuilder = DnfCodeSetupRequestBuilder;
//# sourceMappingURL=DnfCodeSetupRequestBuilder.js.map
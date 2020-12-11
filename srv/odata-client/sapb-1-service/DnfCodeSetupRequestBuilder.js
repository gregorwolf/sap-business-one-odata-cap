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
exports.DnfCodeSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(DnfCodeSetup_1.DnfCodeSetup, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `DnfCodeSetup` entities.
     * @returns A request builder for creating requests to retrieve all `DnfCodeSetup` entities.
     */
    DnfCodeSetupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(DnfCodeSetup_1.DnfCodeSetup);
    };
    /**
     * Returns a request builder for creating a `DnfCodeSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DnfCodeSetup`.
     */
    DnfCodeSetupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(DnfCodeSetup_1.DnfCodeSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DnfCodeSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DnfCodeSetup`.
     */
    DnfCodeSetupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(DnfCodeSetup_1.DnfCodeSetup, entity);
    };
    DnfCodeSetupRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(DnfCodeSetup_1.DnfCodeSetup, absEntryOrEntity instanceof DnfCodeSetup_1.DnfCodeSetup ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return DnfCodeSetupRequestBuilder;
}(core_1.RequestBuilder));
exports.DnfCodeSetupRequestBuilder = DnfCodeSetupRequestBuilder;
//# sourceMappingURL=DnfCodeSetupRequestBuilder.js.map
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
exports.IntegrationPackagesConfigureRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var IntegrationPackagesConfigure_1 = require("./IntegrationPackagesConfigure");
/**
 * Request builder class for operations supported on the [[IntegrationPackagesConfigure]] entity.
 */
var IntegrationPackagesConfigureRequestBuilder = /** @class */ (function (_super) {
    __extends(IntegrationPackagesConfigureRequestBuilder, _super);
    function IntegrationPackagesConfigureRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `IntegrationPackagesConfigure` entity based on its keys.
     * @param absEntry Key property. See [[IntegrationPackagesConfigure.absEntry]].
     * @returns A request builder for creating requests to retrieve one `IntegrationPackagesConfigure` entity based on its keys.
     */
    IntegrationPackagesConfigureRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(IntegrationPackagesConfigure_1.IntegrationPackagesConfigure, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `IntegrationPackagesConfigure` entities.
     * @returns A request builder for creating requests to retrieve all `IntegrationPackagesConfigure` entities.
     */
    IntegrationPackagesConfigureRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(IntegrationPackagesConfigure_1.IntegrationPackagesConfigure);
    };
    /**
     * Returns a request builder for creating a `IntegrationPackagesConfigure` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IntegrationPackagesConfigure`.
     */
    IntegrationPackagesConfigureRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(IntegrationPackagesConfigure_1.IntegrationPackagesConfigure, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `IntegrationPackagesConfigure`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IntegrationPackagesConfigure`.
     */
    IntegrationPackagesConfigureRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(IntegrationPackagesConfigure_1.IntegrationPackagesConfigure, entity);
    };
    IntegrationPackagesConfigureRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(IntegrationPackagesConfigure_1.IntegrationPackagesConfigure, absEntryOrEntity instanceof IntegrationPackagesConfigure_1.IntegrationPackagesConfigure ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return IntegrationPackagesConfigureRequestBuilder;
}(core_1.RequestBuilder));
exports.IntegrationPackagesConfigureRequestBuilder = IntegrationPackagesConfigureRequestBuilder;
//# sourceMappingURL=IntegrationPackagesConfigureRequestBuilder.js.map
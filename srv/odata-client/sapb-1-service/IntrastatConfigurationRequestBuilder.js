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
exports.IntrastatConfigurationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var IntrastatConfiguration_1 = require("./IntrastatConfiguration");
/**
 * Request builder class for operations supported on the [[IntrastatConfiguration]] entity.
 */
var IntrastatConfigurationRequestBuilder = /** @class */ (function (_super) {
    __extends(IntrastatConfigurationRequestBuilder, _super);
    function IntrastatConfigurationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `IntrastatConfiguration` entity based on its keys.
     * @param absEntry Key property. See [[IntrastatConfiguration.absEntry]].
     * @returns A request builder for creating requests to retrieve one `IntrastatConfiguration` entity based on its keys.
     */
    IntrastatConfigurationRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(IntrastatConfiguration_1.IntrastatConfiguration, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `IntrastatConfiguration` entities.
     * @returns A request builder for creating requests to retrieve all `IntrastatConfiguration` entities.
     */
    IntrastatConfigurationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(IntrastatConfiguration_1.IntrastatConfiguration);
    };
    /**
     * Returns a request builder for creating a `IntrastatConfiguration` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IntrastatConfiguration`.
     */
    IntrastatConfigurationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(IntrastatConfiguration_1.IntrastatConfiguration, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `IntrastatConfiguration`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IntrastatConfiguration`.
     */
    IntrastatConfigurationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(IntrastatConfiguration_1.IntrastatConfiguration, entity);
    };
    IntrastatConfigurationRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(IntrastatConfiguration_1.IntrastatConfiguration, absEntryOrEntity instanceof IntrastatConfiguration_1.IntrastatConfiguration ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return IntrastatConfigurationRequestBuilder;
}(core_1.RequestBuilder));
exports.IntrastatConfigurationRequestBuilder = IntrastatConfigurationRequestBuilder;
//# sourceMappingURL=IntrastatConfigurationRequestBuilder.js.map
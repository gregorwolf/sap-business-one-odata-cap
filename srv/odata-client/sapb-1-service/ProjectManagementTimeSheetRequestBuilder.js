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
exports.ProjectManagementTimeSheetRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ProjectManagementTimeSheet_1 = require("./ProjectManagementTimeSheet");
/**
 * Request builder class for operations supported on the [[ProjectManagementTimeSheet]] entity.
 */
var ProjectManagementTimeSheetRequestBuilder = /** @class */ (function (_super) {
    __extends(ProjectManagementTimeSheetRequestBuilder, _super);
    function ProjectManagementTimeSheetRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ProjectManagementTimeSheet` entity based on its keys.
     * @param absEntry Key property. See [[ProjectManagementTimeSheet.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ProjectManagementTimeSheet` entity based on its keys.
     */
    ProjectManagementTimeSheetRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(ProjectManagementTimeSheet_1.ProjectManagementTimeSheet, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `ProjectManagementTimeSheet` entities.
     * @returns A request builder for creating requests to retrieve all `ProjectManagementTimeSheet` entities.
     */
    ProjectManagementTimeSheetRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ProjectManagementTimeSheet_1.ProjectManagementTimeSheet);
    };
    /**
     * Returns a request builder for creating a `ProjectManagementTimeSheet` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProjectManagementTimeSheet`.
     */
    ProjectManagementTimeSheetRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ProjectManagementTimeSheet_1.ProjectManagementTimeSheet, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ProjectManagementTimeSheet`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProjectManagementTimeSheet`.
     */
    ProjectManagementTimeSheetRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ProjectManagementTimeSheet_1.ProjectManagementTimeSheet, entity);
    };
    ProjectManagementTimeSheetRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ProjectManagementTimeSheet_1.ProjectManagementTimeSheet, absEntryOrEntity instanceof ProjectManagementTimeSheet_1.ProjectManagementTimeSheet ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return ProjectManagementTimeSheetRequestBuilder;
}(core_1.RequestBuilder));
exports.ProjectManagementTimeSheetRequestBuilder = ProjectManagementTimeSheetRequestBuilder;
//# sourceMappingURL=ProjectManagementTimeSheetRequestBuilder.js.map
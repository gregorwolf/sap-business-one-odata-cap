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
exports.ProjectManagementsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ProjectManagements_1 = require("./ProjectManagements");
/**
 * Request builder class for operations supported on the [[ProjectManagements]] entity.
 */
var ProjectManagementsRequestBuilder = /** @class */ (function (_super) {
    __extends(ProjectManagementsRequestBuilder, _super);
    function ProjectManagementsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ProjectManagements` entity based on its keys.
     * @param absEntry Key property. See [[ProjectManagements.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ProjectManagements` entity based on its keys.
     */
    ProjectManagementsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(ProjectManagements_1.ProjectManagements, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `ProjectManagements` entities.
     * @returns A request builder for creating requests to retrieve all `ProjectManagements` entities.
     */
    ProjectManagementsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ProjectManagements_1.ProjectManagements);
    };
    /**
     * Returns a request builder for creating a `ProjectManagements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProjectManagements`.
     */
    ProjectManagementsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ProjectManagements_1.ProjectManagements, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ProjectManagements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProjectManagements`.
     */
    ProjectManagementsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ProjectManagements_1.ProjectManagements, entity);
    };
    ProjectManagementsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ProjectManagements_1.ProjectManagements, absEntryOrEntity instanceof ProjectManagements_1.ProjectManagements ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return ProjectManagementsRequestBuilder;
}(core_1.RequestBuilder));
exports.ProjectManagementsRequestBuilder = ProjectManagementsRequestBuilder;
//# sourceMappingURL=ProjectManagementsRequestBuilder.js.map